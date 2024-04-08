import Image from "next/image";
import { MainNav } from "@/components/main-nav"
import { ThemeProvider } from "@/components/theme-provider"
import '../app/globals.css'
import CardComponent from "@/components/ui/cardcomponent";
import CardComponentWrapHorizontal from "@/components/ui/cardcomponentWrapHorizontal";

const travel = [
    {
      title: "Google Maps",
      description: "Find local businesses, view maps and get driving directions in Google Maps.",
      favicon: "https://www.google.com/maps",
    },
    {
      title: "Google Flights",
      description: "Use Google Flights to explore cheap flights to anywhere. Search destinations and track prices to find and book your next flight.",
      favicon: "https://www.google.com/travel/flights",
    },
    {
      title: "Nomad List",
      description: "Learn how to become a digital nomad and find the best places to live and work remotely as a location independent remote worker.",
      favicon: "https://www.nomadlist.com",
    },
    {
      title: "HoodMaps",
      description: "Learn how to become a digital nomad and find the best places to live and work remotely as a location independent remote worker.",
      favicon: "https://www.hoodmaps.com",
    },
]
const accomodation = [
      {
        title: "AirBNB",
        description: "Vacation Rentals & More — Book Top Rated Rentals for Your Next Trip - Houses, Cabins, Condos, Unique Stays & More.",
        favicon: "https://www.airbnb.com",
      },
      {
        title: "Agoda",
        description: "Agoda.com is an online travel agency catering primarily to consumers in the Asia-Pacific region, with headquarters in Singapore and operations in Bangkok, Thailand. Agoda facilitates reservations for lodging, flights, ground transportation, and activities. It is a subsidiary of Booking Holdings.",
        favicon: "https://www.Agoda.com/travel/flights",
      },
      {
        title: "Booking.com",
        description: " Choose From a Wide Range of Properties Which Booking.com Offers. Search Now! Find What You Need At Booking.com, The Biggest Travel Site In The World. Flight + Hotel. Hotels.",
        favicon: "https://www.booking.com",
      },
      {
        title: "Hostelworld",
        description: "Book hostels and connect with travellers.",
        favicon: "https://www.hostelworld.com",
      },
]
const healthinsurance = [
          {
            title: "Safety Wing",
            description: "A travel and medical incident insurance built specifically for digital nomads. It can be purchased while already abroad, covers home trip visits and operates...",
            favicon: "https://safetywing.com/",
          },
          {
            title: "World Nomads",
            description: "International Travel Insurance — International travel insurance for devices, emergency dental & medical, baggage, & gears. 24/7 emergency assistance & medical cover, trip cancellation, and gear cover.",
            favicon: "https://www.worldnomads.com",
          },
]
const visa = [
          {
            title: "Visa requirements for United States citizens",
            description: "As of 2024, holders of a United States passport may travel to 189 countries and territories without a travel visa, or with a visa on arrival. The United States ...",
            favicon: "https://en.wikipedia.org/wiki/Visa_requirements_for_United_States_citizens",
          },
          {
            title: "VisaHQ",
            description: "Passports and Travel Visas Online: Comprehensive Information on Passport Services, Visa Requirements and Applications. Real-time Status Updates, Live Help.",
            favicon: "https://www.visahq.com/",
          },
]
const facebook = [
        {
          title: "Bangkok Expats",
          description: "BANGKOK EXPATS is a group for people who live in, are visiting or just love Bangkok.",
          favicon: "https://www.facebook.com/groups/bkexpats.kc/",
        },
        {
          title: "Digital Nomad Coffee Club - Chiang Mai",
          description: "Weekly Coffee Meetup for Digital Nomads in Chiang Mai. Featuring Guest Speakers, Live Q&A's and Networking. Meet other digital nomads, expats, entrepreneurs, travelers, even english teachers, everyone's invited.",
          favicon: "https://www.facebook.com/groups/nomadcoffee/",
        },
        {
          title: "Nomad List",
          description: "Learn how to become a digital nomad and find the best places to live and work remotely as a location independent remote worker.",
          favicon: "https://www.nomadlist.com",
        },
        {
          title: "HoodMaps",
          description: "Learn how to become a digital nomad and find the best places to live and work remotely as a location independent remote worker.",
          favicon: "https://www.hoodmaps.com",
        },
]
const reddit = [
          {
            title: "r/Thailand",
            description: "The home of Thailand on Reddit.",
            favicon: "https://www.reddit.com/r/Thailand/",
          },
          {
            title: "r/Bangkok",
            description: "This sub-reddit is an english language friendly discussion forum focusing on life for living in Bangkok, as well as any other Bangkok related content. If you are looking for a large Thai only speaking community we recommend /r/thaithai Hope you enjoy the sub. Please read the rules, remember to talk to people nicely, and try to be there for each other.",
            favicon: "https://www.reddit.com/r/Bangkok/",
          },
          {
            title: "r/Chiangmai",
            description: "Chiang Mai, Thailand. The hidden Jewel of Southeast Asia. The Rose of the North. Situated in the mountainous region of Northern Thailand, expat residents of Chiang Mai enjoy more temperate weather and a relaxed lifestyle not much different from back home. Come along and join the discussion about the beautiful sites to see, great food and other pleasantries on offer here in this lovely corner of the world!",
            favicon: "https://www.reddit.com/r/chiangmai/",
          },
          {
            title: "Hostelworld",
            description: "Book hostels and connect with travellers.",
            favicon: "https://www.hostelworld.com",
          },
]
const coworking = [
              {
                title: "Co-working spaces in Chiang Mai",
                description: "What are some good co-working spaces here? Preferably a place where I can meet and mingle with some digital nomads.",
                favicon: "https://www.reddit.com/r/chiangmai/comments/15kjz9p/coworking_spaces_in_chiang_mai/",
              },
              {
                title: "Chiang Mai Coworking & Cafes",
                description: "Chiang Mai Coworking & Cafes · Lily Bruns",
                favicon: "https://www.google.com/maps/@/data=!3m1!4b1!4m2!11m1!2s14ayUSYHiojqBRFjx1xLjSZDBE34?g_ep=CAISBjYuNzYuMxgAILffASoSLDQ3MDY4MzAzLDQ3MDcxNzA0QgJHQg%3D%3D",
              },
]
const apps = [
              {
                title: "Safety Wing",
                description: "A travel and medical incident insurance built specifically for digital nomads. It can be purchased while already abroad, covers home trip visits and operates...",
                favicon: "https://safetywing.com/",
              },
              {
                title: "World Nomads",
                description: "International Travel Insurance — International travel insurance for devices, emergency dental & medical, baggage, & gears. 24/7 emergency assistance & medical cover, trip cancellation, and gear cover.",
                favicon: "https://www.worldnomads.com",
              },
]
const visaThailand = [
              {
                title: "Visa requirements for United States citizens",
                description: "As of 2024, holders of a United States passport may travel to 189 countries and territories without a travel visa, or with a visa on arrival. The United States ...",
                favicon: "https://en.wikipedia.org/wiki/Visa_requirements_for_United_States_citizens",
              },
              {
                title: "VisaHQ",
                description: "Passports and Travel Visas Online: Comprehensive Information on Passport Services, Visa Requirements and Applications. Real-time Status Updates, Live Help.",
                favicon: "https://www.visahq.com/",
              },
]

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
    <main className="flex flex-col items-start p-3" style={{rowGap:"0px"}}>

        <CardComponentWrapHorizontal
            heading="🗺 Travel Essentials"
            data={travel}
        />
        <CardComponentWrapHorizontal
            heading="🛌 Accomodation"
            data={accomodation}
        />
        <CardComponentWrapHorizontal
            heading="😷 Health Insurance"
            data={healthinsurance}
        />
        <CardComponentWrapHorizontal
            heading="🛂 Visa"
            data={visa}
        />

        <CardComponentWrapHorizontal
            heading="Facebook Groups"
            data={facebook}
        />
        <CardComponentWrapHorizontal
            heading="Reddit"
            data={reddit}
        />
        <CardComponentWrapHorizontal
            heading="👨‍💻👩‍💻 Coworking"
            data={coworking}
        />
        <CardComponentWrapHorizontal
            heading="📱 Apps"
            data={apps}
        />
        {/* <CardComponentWrapHorizontal
            heading="🛂 Visa"
            data={visaThailand}
        /> */}
    </main>

    </ThemeProvider>
    </>
  );
}
