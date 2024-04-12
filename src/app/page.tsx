// src/app/page.tsx
'use client'
import { useState } from "react";
import Image from "next/image";
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button";
import { Cards } from "@/components/ui/cards";
import { CardExtension } from "@/components/ui/cardextension";
import { Sidebar } from "@/components/ui/sidebar";
import Script from 'next/script'; // Import next/script component
import { allData, travel, accomodation, healthinsurance, visa, apps, socialmedia, reddit, work } from '../data/dataExtension';
import {homepage} from '../data/data'
import {thailand} from '../data/thailand/thailand'


export default function Home() {
  const [data, setData] = useState(homepage);

  return (
    <>
      <MainNav setData={setData} />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="sm:py-18 relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-10 space-y-16" style={{paddingTop: "3rem"}}>

          <div className="grid space-y-12 md:gap-8 lg:grid-cols-12 lg:gap-16 lg:space-y-0 xl:gap-16">

            <Sidebar setData={setData} />

            <div className="lg:col-span-10 xl:col-span-10">

              <div className="main-title">
                <h1 className="h1">Find your travel inspiration</h1>
                <p className="text-foreground-lighter text-xl">A collection of digital nomad content.</p>
              </div>

              <div className="grid space-y-10">

              {data.map((item, index) => (
                <Cards key={index} data={item} anchor={`data-${index}`} />
              ))}  

              {/* {thailand.map((item, index) => (
                <Cards key={index} data={item} anchor={`thailand-${index}`} />
              ))} */}

              {/* <div id="featured" className="card-row space-y-8">
                <h2 className="h2 section-title">💯 Featured</h2>
                  <div className="grid grid-cols-1 gap-5 lg:max-w-none sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <CardExtension data={allData} />
                  </div>
              </div> */}

                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <Button variant="secondary">See All</Button>
                </div>

              </div>
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
                  targetElement.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                  });
              }
          });
      });
      `}</Script>
    </>
  );
}
