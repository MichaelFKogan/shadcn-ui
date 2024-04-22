// src/app/page.tsx
'use client'
import { useState, useMemo } from "react";
import Image from "next/image";
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button";
import { Cards } from "@/components/ui/cards";
import { List } from "@/components/ui/list";
import { Table } from "@/components/ui/table";

import { CardExtension } from "@/components/ui/cardextension";
import { Sidebar } from "@/components/ui/sidebar";
import { SidebarNew } from "@/components/ui/sidebarnew";
import Script from 'next/script'; // Import next/script component
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { allData, travel, accomodation, healthinsurance, visa, apps, socialmedia, reddit, work } from '../data/dataExtension';
import {homepage} from '../data/data'
import {thailand} from '../data/thailand/thailand'

// Import the JSON data directly
import jsonData from '../data/data.json';


export default function Home() {
  const [data, setData] = useState(homepage);

  return (
    <>

      <Sidebar setData={setData} />
      {/* <SidebarNew setData={setData}/> */}

      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="lg:pl-64 sm:py-18 relative mx-auto w-full py-16 md:py-24 lg:py-24 space-y-16" style={{paddingTop: "0px"}}>
        <MainNav setData={setData} />

          <div className="grid space-y-12 md:gap-8 lg:grid-cols-12 lg:gap-16 lg:space-y-0 xl:gap-16" style={{marginTop:"1rem"}}>
            <div className="lg:col-span-12 xl:col-span-12 px-5">

              <div className="main-title">
                <h1 className="h1">Find your travel inspiration</h1>
                <p className="text-foreground-lighter text-xl">A collection of digital nomad content.</p>
              </div>

              <div className="grid space-y-10">

                <Tabs defaultValue="table" className="">
                  <TabsList>
                    <TabsTrigger value="cards">Cards</TabsTrigger>
                    <TabsTrigger value="list">List</TabsTrigger>
                    <TabsTrigger value="table">Table</TabsTrigger>
                  </TabsList>

                  <TabsContent value="cards">
                    <div id="card-view">
                      {data.map((item, index) => (
                        <Cards key={index} data={item} anchor={`data-${index}`} />
                      ))}  
                  </div>
                  </TabsContent>

                  <TabsContent value="list">
                    <div id="list-view">
                      <div className="list-row space-y-8">
                        <div className="grid grid-cols-1 gap-5 lg:max-w-none sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> 
                          {data.map((item, index) => (
                            <List key={index} data={item} anchor={`data-${index}`} />
                          ))}  
                        </div>
                      </div>
                   </div>
                  </TabsContent>

                  <TabsContent value="table">
                    <div id="table-view">
                        <Table data={data} anchor="table-1" />
                    </div>
                  </TabsContent>
                  
                </Tabs>


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
                  {/* <Button variant="secondary">See All</Button> */}
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
