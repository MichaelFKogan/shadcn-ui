// src/app/page.tsx
'use client'
import { useState, useEffect } from "react";
import { MainNav } from "@/components/MainNav"
import { Sidebar } from "@/components/Sidebar";
import { HeroBanner } from "@/components/HeroBanner";
import { TabsComponent } from "@/components/TabsComponent";
// import {handleKeywordSelection, handleFirstKeyword, clearKeywords} from "@/utils/KeywordUtils";
import Script from 'next/script'; // Import next/script component
import { homepage } from '../data/data'
import jsonData from '../data/data.json';


export default function Home() {

const [filterKeyword, setFilterKeyword] = useState('');
const [lastKeyword, setLastKeyword] = useState('');  // State to track the last keyword
const [continentBreadcrumbKeyword, setContinentBreadcrumbKeyword] = useState('');
const [breadcrumbKeyword, setBreadcrumbKeyword] = useState('');
const [secondBreadcrumbKeyword, setSecondBreadcrumbKeyword] = useState('');
const [listData, setListData] = useState([]);
const [tableData, setTableData] = useState([]);
const [uniqueCategories, setUniqueCategories] = useState(new Set());
const [isSwitchOn, setIsSwitchOn] = useState(false);
const [sidebarOpen, setSidebarOpen] = useState(true);
const [hideBanner, setHideBanner] = useState(false);


// TOGGLING AND FILTERING KEYWORDS WHEN SELECTED
const handleKeywordSelection = (keyword) => {
  // Extend the regex to include regional indicator symbols for flag emojis
  // Remove emojis and replace multiple spaces with a single space, trim leading spaces
  const cleanedKeyword = keyword.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2300}-\u{23FF}\u{2B50}-\u{2BFF}\u{2C60}-\u{2C7F}\u{2E00}-\u{2E7F}\u{3000}-\u{303F}\u{1F1E6}-\u{1F1FF}]/gu, '')
    .replace(/\s{2,}/g, ' ') // Replace multiple spaces with a single space
    .replace(/^\s+/g, ''); // Trim leading spaces only

  setFilterKeyword(cleanedKeyword);

  if (lastKeyword === '') {
    setLastKeyword(cleanedKeyword);
  }

  if (breadcrumbKeyword === '') {
    setBreadcrumbKeyword(cleanedKeyword);
  }

  if (breadcrumbKeyword !== '') {
    setSecondBreadcrumbKeyword(cleanedKeyword);
  }

  // if(breadcrumbKeyword !== '' && secondBreadcrumbKeyword !== '' ){
  //   setFilterKeyword(cleanedKeyword);
  //   setLastKeyword(cleanedKeyword);
  // }

};

const clearKeywords = () => {
  setFilterKeyword(''); // Set to a default or different keyword if the same is clicked
  setLastKeyword(''); // Update the last keyword
  setBreadcrumbKeyword('');
  setSecondBreadcrumbKeyword('');
}

  // TOGGLING AND FILTERING KEYWORDS WHEN SELECTED
const handleFirstKeyword = (keyword) => {
      // Extend the regex to include regional indicator symbols for flag emojis
      // Remove emojis and replace multiple spaces with a single space, trim leading spaces
      const cleanedKeyword = keyword.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2300}-\u{23FF}\u{2B50}-\u{2BFF}\u{2C60}-\u{2C7F}\u{2E00}-\u{2E7F}\u{3000}-\u{303F}\u{1F1E6}-\u{1F1FF}]/gu, '')
        .replace(/\s{2,}/g, ' ') // Replace multiple spaces with a single space
        .replace(/^\s+/g, ''); // Trim leading spaces only
  
      setFilterKeyword(cleanedKeyword);
      setLastKeyword('');
  
      setContinentBreadcrumbKeyword('');
      setBreadcrumbKeyword('');
      setSecondBreadcrumbKeyword('');
    }

  useEffect(() => {
    const linksData = Object.values(jsonData.__collections__.Links)
      .filter(link => {
        if (!filterKeyword) return true; // If no filter is applied, return all data

        // Split filterKeyword into an array of keywords
        const keywords = filterKeyword.toLowerCase().split(' ');

        // Check if all keywords are present in the link
        return keywords.every(keyword => {
          // Aggregate all text from the link
          const allText = Object.values(link).reduce((acc, value) => {
            if (typeof value === 'string') {
              return acc + ' ' + value; // Continue to add string values
            } else if (Array.isArray(value)) {
              return acc + ' ' + value.join(' '); // Join array elements with spaces and add to the accumulated string
            }
            return acc;
          }, '');
          // Ensure case-insensitive search for each keyword
          return keywords.every(keyword => allText.toLowerCase().includes(keyword));
        });
      })
      .map((link) => ({
        title: link.name,
        description: link.description || '',
        url: link.url,
        image: 'default.png',
        category: link.category,
        tags: Array.isArray(link.tags) ? link.tags.join(', ') : '',
        city: link.city,
        country: link.country,
        continent: link.continent
      }))
      .sort((a, b) => a.category.localeCompare(b.category));

    setTableData(linksData);
  }, [filterKeyword]); // Dependency array includes filterKeyword to re-run when it changes

  // it seems this useEffect plays a part in a component that handles a variety of data display modes 
  // (cards, list, table) possibly for a dashboard or a data management interface. 
  // The uniqueCategories state might be used to enable users to filter or view the data based on categories, 
  // enhancing the interface's interactivity and user experience.
  useEffect(() => {
    const newCategories = new Set();
    tableData.forEach(item => {
      if (item.category) {
        newCategories.add(item.category);
      }
    });
    setUniqueCategories(newCategories);
  }, [tableData]); // This effect runs whenever tableData changes

  // SORTING BY CATEGORY FOR LIST
  useEffect(() => {
    const categoryMap = {};

    // Convert the object of links into an array of links
    const linksArray = Object.values(jsonData.__collections__.Links);

    linksArray.forEach(link => {
      const category = link.category || 'Uncategorized'; // Fallback for any links without a category
      if (!categoryMap[category]) {
        categoryMap[category] = [];
      }
      categoryMap[category].push({
        title: link.name,
        description: link.description || '',
        url: link.url,
        image: 'default.png', // Assuming default image path, update this as necessary
        tags: Array.isArray(link.tags) ? link.tags.join(', ') : '',
        city: link.city,
        country: link.country,
        continent: link.continent
      });
    });

    // Sort categories alphabetically and update the state
    setListData(Object.entries(categoryMap).sort(([catA], [catB]) => catA.localeCompare(catB)));
  }, [filterKeyword]); // Ensure dependency on jsonData to recompute on data change

  const handleBreadcrumbSelection = (keyword) => {
    // Extend the regex to include regional indicator symbols for flag emojis
    // Remove emojis and replace multiple spaces with a single space, trim leading spaces
    const cleanedKeyword = keyword.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2300}-\u{23FF}\u{2B50}-\u{2BFF}\u{2C60}-\u{2C7F}\u{2E00}-\u{2E7F}\u{3000}-\u{303F}\u{1F1E6}-\u{1F1FF}]/gu, '')
      .replace(/\s{2,}/g, ' ') // Replace multiple spaces with a single space
      .replace(/^\s+/g, ''); // Trim leading spaces only

    setSecondBreadcrumbKeyword();
  }

  const dynamicTabsSelection = (keyword) => {
    const cleanedKeyword = keyword.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2300}-\u{23FF}\u{2B50}-\u{2BFF}\u{2C60}-\u{2C7F}\u{2E00}-\u{2E7F}\u{3000}-\u{303F}\u{1F1E6}-\u{1F1FF}]/gu, '')
      .replace(/\s{2,}/g, ' ')
      .replace(/^\s+/g, '');
  }

  // SORTS THE CATEGORIES LIST IN ALPHABETICAL ORDER, ACCOUNTING FOR EMOJIS
  const cleanCategoryForSorting = (category) => {
    // Normalize Unicode characters to a standard form
    category = category.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Strip accents/diacritics
    return category.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2300}-\u{23FF}\u{2B50}-\u{2BFF}\u{2C60}-\u{2C7F}\u{2E00}-\u{2E7F}\u{3000}-\u{303F}\u{1F1E6}-\u{1F1FF}]/gu, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
  }

  const handleSwitchChange = (newState) => {
    setIsSwitchOn(newState);
  };
  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen); // Toggles the sidebarOpen state
  };
  const handleBannerToggle = () => {
    setHideBanner(!hideBanner);
  };

  // SNOWFLAKE EFFECT
  useEffect(() => {
    const container = document.getElementById('snow-container');
    for (let i = 0; i < 4; i++) {
      let flake = document.createElement('div');
      flake.className = 'snowflake';
      let randomSize = Math.random() * 2 + 3;
      let randomOpacity = Math.random() * 0.1 + 0.4;
      let randomDuration = Math.random() * 11 + 2;
      let randomDelay = Math.random() * 10 - 3;
      let randomHorizontal = (Math.random() * 2 - 1) * 100;
      let randomLeft = Math.random() * 100;

      flake.style.width = `${randomSize}px`;
      flake.style.height = `${randomSize}px`;
      flake.style.opacity = randomOpacity;
      flake.style.animationDuration = `${randomDuration}s`;
      flake.style.animationDelay = `${randomDelay}s`;
      flake.style.left = `${randomLeft}%`;

      container.appendChild(flake);
    }
  }, []);  // Empty dependency array means this runs once on component mount

  return (
    <>

      <Sidebar
        onSelectKeyword={handleKeywordSelection} 
        handleFirstKeyword={handleFirstKeyword}
        sidebarOpen={sidebarOpen} 
        handleSidebarToggle={handleSidebarToggle} 
        setContinentBreadcrumbKeyword={setContinentBreadcrumbKeyword} 
      />

      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className={`sm:py-18 relative mx-auto w-full py-16 md:py-24 lg:py-24 space-y-16 ${sidebarOpen ? "lg:pl-64" : "lg:pl-0"}`} style={{ paddingTop: "0px" }}>
          
          <MainNav 
            handleSidebarToggle={handleSidebarToggle} 
            sidebarOpen={sidebarOpen} 
            handleKeywordSelection={handleKeywordSelection} 
          />
          
          <div className="grid space-y-12 md:gap-8 lg:grid-cols-12 lg:gap-16 lg:space-y-0 xl:gap-16" style={{ marginTop: ".25rem" }}>
            <div className="lg:col-span-12 xl:col-span-12 px-5 relative">
              <HeroBanner 
                hideBanner={hideBanner} 
                handleBannerToggle={handleBannerToggle}
               />
              
              <TabsComponent 
                filterKeyword={filterKeyword} 
                lastKeyword={lastKeyword} 
                breadcrumbKeyword={breadcrumbKeyword} 
                secondBreadcrumbKeyword={secondBreadcrumbKeyword} 
                continentBreadcrumbKeyword={continentBreadcrumbKeyword} 
                setBreadcrumbKeyword={setBreadcrumbKeyword} 
                setSecondBreadcrumbKeyword={setSecondBreadcrumbKeyword} 
                clearKeywords={clearKeywords} 
                handleKeywordSelection={handleKeywordSelection}
                isSwitchOn={isSwitchOn}
                handleSwitchChange={handleSwitchChange}
                tableData={tableData}
                listData={listData}
                uniqueCategories={uniqueCategories}
                cleanCategoryForSorting={cleanCategoryForSorting}
                 />
            </div>
          </div>

        </div>
      </main>

      {/* SMOOTH SCROLL */}
      <Script> {`
      // Get all anchor tags
      const anchorTags = document.querySelectorAll('a[href^="#"]');

      // Loop through each anchor tag and add event listener
      anchorTags.forEach(anchor => {
          anchor.addEventListener('click', function(e) {
              e.preventDefault();

              const targetId = this.getAttribute('href').substring(1); // Remove the '#' from href
              const targetElement = document.getElementById(targetId);

              if (targetElement) {
                const offsetTop = targetElement.offsetTop - 60; // Adjust the offset by 100px
                window.scrollTo({
                  top: offsetTop,
                  behavior: 'smooth'
              });
              }
          });
      });
      `}</Script>
    </>
  );
}
