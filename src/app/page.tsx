import Image from "next/image";
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button";
import { Cards } from "@/components/ui/cards";
import { Sidebar } from "@/components/ui/sidebar";
import Script from 'next/script'; // Import next/script component
import { travel, accomodation, healthinsurance, visa, apps } from '../data/data';


export default function Home() {
  return (
    <>
      <MainNav />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 space-y-16">
          <div>
            <h1 className="h1">Find your travel inspiration</h1>
            <p className="text-foreground-lighter text-xl">A collection of digital nomad content.</p>
          </div>

          <div className="grid space-y-12 md:gap-8 lg:grid-cols-12 lg:gap-16 lg:space-y-0 xl:gap-16">

            <Sidebar />

            <div className="lg:col-span-8 xl:col-span-9">
              <div className="grid space-y-10">

                <Cards heading="🗺 Travel" data={travel} anchor="travel" />
                <Cards heading="🛌 Accomodation" data={accomodation} anchor="accomodation" />
                <Cards heading="😷 Health Insurance" data={healthinsurance} anchor="healthinsurance" />
                <Cards heading="🛂 Visa" data={visa} anchor="visa" />
                <Cards heading="📱 Apps" data={apps} anchor="apps" />

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
