// src/app/utils/keywordUtils.tsx
import { useState } from "react";

export function useKeywordState(initialValue: string) {
    const [filterKeyword, setFilterKeyword] = useState(initialValue);
    const [lastKeyword, setLastKeyword] = useState('');
    const [continentBreadcrumbKeyword, setContinentBreadcrumbKeyword] = useState('');
    const [breadcrumbKeyword, setBreadcrumbKeyword] = useState('');
    const [secondBreadcrumbKeyword, setSecondBreadcrumbKeyword] = useState('');

    return {
        filterKeyword,
        setFilterKeyword,
        lastKeyword,
        setLastKeyword,
        continentBreadcrumbKeyword,
        setContinentBreadcrumbKeyword,
        breadcrumbKeyword,
        setBreadcrumbKeyword,
        secondBreadcrumbKeyword,
        setSecondBreadcrumbKeyword
    };
}

// const [filterKeyword, setFilterKeyword] = useState('');
// const [lastKeyword, setLastKeyword] = useState(''); 
// const [continentBreadcrumbKeyword, setContinentBreadcrumbKeyword] = useState('');
// const [breadcrumbKeyword, setBreadcrumbKeyword] = useState('');
// const [secondBreadcrumbKeyword, setSecondBreadcrumbKeyword] = useState('');
  
  // TOGGLING AND FILTERING KEYWORDS WHEN SELECTED
  export function handleKeywordSelection(keyword: string): void {
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


  export function clearKeywords(): void {
    setFilterKeyword(''); // Set to a default or different keyword if the same is clicked
    setLastKeyword(''); // Update the last keyword
    setBreadcrumbKeyword('');
    setSecondBreadcrumbKeyword('');
  }

    // TOGGLING AND FILTERING KEYWORDS WHEN SELECTED
    export function handleFirstKeyword(keyword: string): void {
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