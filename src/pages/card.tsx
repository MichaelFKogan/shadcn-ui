import Image from "next/image";
import { MainNav } from "@/components/main-nav"
import { ThemeProvider } from "@/components/theme-provider"
import '../app/globals.css'
import CardComponent from "@/components/ui/cardcomponent";
import CardComponentWrap from "@/components/ui/cardcomponentWrap";

export default function Card() {
  return (
    <>
    <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
    >
    <MainNav/>
    <main className="flex flex-row items-center p-3" style={{columnGap:"10px"}}>

        {/* <CardComponent
            title="Google Maps"
            description="Find local businesses, view maps and get driving directions in Google Maps."
        />
        <CardComponent
            title="Google Maps"
            description="Find local businesses, view maps and get driving directions in Google Maps."
        /> */}

        <CardComponentWrap
            heading="🗺 Travel Essentials"
            title="Google Maps"
            description="Find local businesses, view maps and get driving directions in Google Maps."
        />
        <CardComponentWrap
            heading="🛌 Accomodation"
            title="Google Maps"
            description="Find local businesses, view maps and get driving directions in Google Maps."
        />
        <CardComponentWrap
            heading="😷 Health Insurance"
            title="Google Maps"
            description="Find local businesses, view maps and get driving directions in Google Maps."
        />
        <CardComponentWrap
            heading="🛂 Visa"
            title="Google Maps"
            description="Find local businesses, view maps and get driving directions in Google Maps."
        />

    </main>
    </ThemeProvider>
    </>
  );
}
