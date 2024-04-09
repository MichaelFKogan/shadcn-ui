import Image from "next/image";
import { MainNav } from "@/components/main-nav"

const travel = [
  {
    title: "Google Maps",
    description: "Find local businesses, view maps and get driving directions in Google Maps.",
    url: "https://www.google.com/maps",
  },
  {
    title: "Google Flights",
    description: "Use Google Flights to explore cheap flights to anywhere. Search destinations and track prices to find and book your next flight.",
    url: "https://www.google.com/travel/flights",
  },
  {
    title: "Nomad List",
    description: "Learn how to become a digital nomad and find the best places to live and work remotely as a location independent remote worker.",
    url: "https://www.nomadlist.com",
  },
  {
    title: "HoodMaps",
    description: "Learn how to become a digital nomad and find the best places to live and work remotely as a location independent remote worker.",
    url: "https://www.hoodmaps.com",
  },
]
const accomodation = [
    {
      title: "AirBNB",
      description: "Vacation Rentals & More — Book Top Rated Rentals for Your Next Trip - Houses, Cabins, Condos, Unique Stays & More.",
      url: "https://www.airbnb.com",
    },
    {
      title: "Agoda",
      description: "Agoda.com is an online travel agency catering primarily to consumers in the Asia-Pacific region, with headquarters in Singapore and operations in Bangkok, Thailand. Agoda facilitates reservations for lodging, flights, ground transportation, and activities. It is a subsidiary of Booking Holdings.",
      url: "https://www.Agoda.com/travel/flights",
    },
    {
      title: "Booking.com",
      description: " Choose From a Wide Range of Properties Which Booking.com Offers. Search Now! Find What You Need At Booking.com, The Biggest Travel Site In The World. Flight + Hotel. Hotels.",
      url: "https://www.booking.com",
    },
    {
      title: "Hostelworld",
      description: "Book hostels and connect with travellers.",
      url: "https://www.hostelworld.com",
    },
  ]
    const healthinsurance = [
        {
          title: "Safety Wing",
          description: "A travel and medical incident insurance built specifically for digital nomads. It can be purchased while already abroad, covers home trip visits and operates...",
          url: "https://safetywing.com/",
        },
        {
          title: "World Nomads",
          description: "International Travel Insurance — International travel insurance for devices, emergency dental & medical, baggage, & gears. 24/7 emergency assistance & medical cover, trip cancellation, and gear cover.",
          url: "https://www.worldnomads.com",
        },
    ]
    const visa = [
        {
          title: "Visa requirements for United States citizens",
          description: "As of 2024, holders of a United States passport may travel to 189 countries and territories without a travel visa, or with a visa on arrival. The United States ...",
          url: "https://en.wikipedia.org/wiki/Visa_requirements_for_United_States_citizens",
        },
        {
          title: "VisaHQ",
          description: "Passports and Travel Visas Online: Comprehensive Information on Passport Services, Visa Requirements and Applications. Real-time Status Updates, Live Help.",
          url: "https://www.visahq.com/",
        },
    ]

export default function Home() {
  return (
    <>
      <MainNav />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="grid space-y-12 md:gap-8 lg:grid-cols-12 lg:gap-16 lg:space-y-0 xl:gap-16">
        
        
        <div className="lg:col-span-4 xl:col-span-3">
          <div className="space-y-6">

            <div className="text-sm leading-4 grid gap-2 md:grid md:grid-cols-12">
              <div className="col-span-12">
                <div className="">
                  <div className="relative">
                    <input data-size="small" id="" name="" placeholder="Search..." type="text" className="peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted group bg-foreground/[.026] border border-control text-sm leading-4 px-3 py-2 pl-10" value="" />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-foreground-light [&amp;_svg]:stroke-[1.5] [&amp;_svg]:h-[18px] [&amp;_svg]:w-[18px]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" className="sbui-icon">
                        <circle cx="11" cy="11" r="8">
                        </circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65">
                        </line>
                      </svg>
                    </div>
                  </div>
                </div>
                <p data-state="hide" className="text-red-900 transition-all data-show:mt-2 data-show:animate-slide-down-normal data-hide:animate-slide-up-normal text-sm leading-4">
                </p>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="text-foreground-lighter mb-2 text-sm">Categories</div>
              <div className="space-y-1">
                <a className="text-foreground-light block text-base" href="#featured">💯 Featured</a>
                <a className="text-foreground-light block text-base" href="#travel">📍 Travel</a>
                <a className="text-foreground-light block text-base" href="#accomodation">🛌 Accomodation</a>
                <a className="text-foreground-light block text-base" href="#healthinsurance">😷 Health Insurance</a>
                <a className="text-foreground-light block text-base" href="#visa">🛂 Visa</a>

                <a className="text-foreground-light block text-base" href="#work">👔 Work</a>
                <a className="text-foreground-light block text-base" href="#finance">💵 Finance</a>
                <a className="text-foreground-light block text-base" href="#productivity">📊 Productivity</a>
                <a className="text-foreground-light block text-base" href="#apps">📱 Apps</a>
                <a className="text-foreground-light block text-base" href="#socialmedia">📸 Social Media</a>
                <a className="text-foreground-light block text-base" href="#vlog">📹 Vlog</a>
                <a className="text-foreground-light block text-base" href="#blog">✍️ Blog</a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-foreground-lighter mb-2 text-sm">Explore more</div>
              <div className="grid grid-cols-2 gap-8 lg:grid-cols-1">

                <a href="/partners/experts">
                  <div className=" hover:border-foreground-lighter bg-surface-100 group cursor-pointer rounded  border px-5 py-4  ">
                    <div className="flex flex-col gap-3">
                      <div className="bg-blue-300 text-blue-900 flex h-8 w-8 items-center justify-center rounded-md transition-all group-hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                          </path>
                        </svg>
                      </div>
                      <div>
                        <h5 className="text-foreground mb-2 text-base">Experts</h5>
                        <p className="p text-sm">Explore our certified Supabase agency experts that build with Supabase</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/integrations#become-a-partner">
                  <div className=" hover:border-foreground-lighter bg-surface-100 group cursor-pointer rounded  border px-5 py-4  ">
                    <div className="flex flex-col gap-3">
                      <div className="bg-brand-300 text-brand flex h-8 w-8 items-center justify-center rounded-md transition-all group-hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z">
                          </path>
                        </svg>
                      </div>
                      <div>
                        <h5 className="text-foreground mb-2 text-base">Become a partner</h5>
                        <p className="p text-sm">Fill out a quick 30 second form to apply to become a partner</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>













        <div className="lg:col-span-8 xl:col-span-9">
          <div className="grid space-y-10">
            
            <div id="featured" className="space-y-8 ">
              <h2 className="h2">💯 Featured</h2>
              <div className="grid grid-cols-1 gap-5 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
                {travel.map((item, index) => (
                  <a href={item.url} target="_blank">
                    <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                      <div className="flex w-full space-x-6">
                        <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                          <img alt="Google Maps" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src={"https://www.google.com/s2/favicons?domain=" + item.url} />
                        </div>
                        <div>
                          <h3 className="text-foreground-light group-hover:text-foreground mb-2 text-xl transition-colors">{item.title}</h3>
                          <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title={item.description}>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
                {accomodation.map((item, index) => (
                  <a href={item.url} target="_blank">
                    <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                      <div className="flex w-full space-x-6">
                        <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                          <img alt="Google Maps" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src={"https://www.google.com/s2/favicons?domain=" + item.url} />
                        </div>
                        <div>
                          <h3 className="text-foreground-light group-hover:text-foreground mb-2 text-xl transition-colors">{item.title}</h3>
                          <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title={item.description}>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
                {healthinsurance.map((item, index) => (
                  <a href={item.url} target="_blank">
                    <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                      <div className="flex w-full space-x-6">
                        <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                          <img alt="Google Maps" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src={"https://www.google.com/s2/favicons?domain=" + item.url} />
                        </div>
                        <div>
                          <h3 className="text-foreground-light group-hover:text-foreground mb-2 text-xl transition-colors">{item.title}</h3>
                          <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title={item.description}>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
                {visa.map((item, index) => (
                  <a href={item.url} target="_blank">
                    <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                      <div className="flex w-full space-x-6">
                        <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                          <img alt="Google Maps" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src={"https://www.google.com/s2/favicons?domain=" + item.url} />
                        </div>
                        <div>
                          <h3 className="text-foreground-light group-hover:text-foreground mb-2 text-xl transition-colors">{item.title}</h3>
                          <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title={item.description}>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              <div style={{textAlign: "center", marginTop:"20px"}}>See All</div>
            </div>

            <div id="travel" className="space-y-8 ">
              <h2 className="h2">🗺 Travel</h2>
              <div className="grid grid-cols-1 gap-5 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
                {travel.map((item, index) => (
                  <a href={item.url} target="_blank">
                    <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                      <div className="flex w-full space-x-6">
                        <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                          <img alt="Google Maps" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src={"https://www.google.com/s2/favicons?domain=" + item.url} />
                        </div>
                        <div>
                          <h3 className="text-foreground-light group-hover:text-foreground mb-2 text-xl transition-colors">{item.title}</h3>
                          <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title={item.description}>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div id="accomodation" className="space-y-8">
              <h2 className="h2">🛌 Accomodation</h2>
              <div className="grid  grid-cols-1 gap-5 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
                {accomodation.map((item, index) => (
                  <a href={item.url} target="_blank">
                    <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                      <div className="flex w-full space-x-6">
                        <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                          <img alt="Google Maps" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src={"https://www.google.com/s2/favicons?domain=" + item.url} />
                        </div>
                        <div>
                          <h3 className="text-foreground-light group-hover:text-foreground mb-2 text-xl transition-colors">{item.title}</h3>
                          <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title={item.description}>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div id="healthinsurance" className="space-y-8">
              <h2 className="h2">😷 Health Insurance</h2>
              <div className="grid  grid-cols-1 gap-5 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
                {healthinsurance.map((item, index) => (
                  <a href={item.url} target="_blank">
                    <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                      <div className="flex w-full space-x-6">
                        <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                          <img alt="Google Maps" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src={"https://www.google.com/s2/favicons?domain=" + item.url} />
                        </div>
                        <div>
                          <h3 className="text-foreground-light group-hover:text-foreground mb-2 text-xl transition-colors">{item.title}</h3>
                          <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title={item.description}>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div id="visa" className="space-y-8">
              <h2 className="h2">🛂 Visa</h2>
              <div className="grid  grid-cols-1 gap-5 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
                {visa.map((item, index) => (
                  <a href={item.url} target="_blank">
                    <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                      <div className="flex w-full space-x-6">
                        <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                          <img alt="Google Maps" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src={"https://www.google.com/s2/favicons?domain=" + item.url} />
                        </div>
                        <div>
                          <h3 className="text-foreground-light group-hover:text-foreground mb-2 text-xl transition-colors">{item.title}</h3>
                          <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title={item.description}>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>


            <div id="auth" className="space-y-8">
              <h2 className="h2">Auth</h2>
              <div className="grid  grid-cols-1 gap-5 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
                <a href="/partners/arengu">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Arengu" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Arengu</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Build frictionless signup flows with any stack.">Build frictionless signup flows with any stack.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/auth0">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Auth0" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Auth0</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Rapidly integrate authentication and authorization for web, mobile, and legacy applications so you can focus on your core business.">Rapidly integrate authentication and authorization for web, mobile, and legacy applications so you can focus on your core business.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/authsignal">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Authsignal" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Authsignal</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Out of the box Multi-Factor Authentication (MFA).">Out of the box Multi-Factor Authentication (MFA).</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/clerk">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Clerk" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Clerk</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Authentication for Next.js, React, and the Modern Web.">Authentication for Next.js, React, and the Modern Web.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/corbado">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Corbado" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Corbado</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Offer passkeys in any new or existing application.">Offer passkeys in any new or existing application.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/keyri">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Keyri" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Keyri</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="QR authentication for an easy and flexible biometric solution across all platforms.">QR authentication for an easy and flexible biometric solution across all platforms.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/nextauth">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="NextAuth" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">NextAuth</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Open Source Authentication for Next.js">Open Source Authentication for Next.js</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/ory">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Ory" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Ory</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Open Source Identity Infrastructure">Open Source Identity Infrastructure</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/passageidentity">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Passage by 1Password" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Passage by 1Password</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Fully passwordless authentication to reduce friction for your users and provide best-in-class security.">Fully passwordless authentication to reduce friction for your users and provide best-in-class security.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/picket">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Picket" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Picket</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Web3 Authentication Made Easy. A single API call to authenticate wallets and token gate anything.">Web3 Authentication Made Easy. A single API call to authenticate wallets and token gate anything.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/stytch">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Stytch" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Stytch</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Stytch provides an all-in-one platform for passwordless auth.">Stytch provides an all-in-one platform for passwordless auth.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/supertokens">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="SuperTokens" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">SuperTokens</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="SuperTokens is an open source authentication solution.">SuperTokens is an open source authentication solution.</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div id="caching / offline-first" className="space-y-8">
              <h2 className="h2">Caching / Offline-First</h2>
              <div className="grid  grid-cols-1 gap-5 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
                <a href="/partners/electricsql">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="ElectricSQL" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">ElectricSQL</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="ElectricSQL is a local-first sync layer for building fast, collaborative apps that work offline.">ElectricSQL is a local-first sync layer for building fast, collaborative apps that work offline.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/polyscale">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="PolyScale" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">PolyScale</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="PolyScale is an intelligent, serverless database caching engine which allows low-latency reads from Supabase globally, no coding required.">PolyScale is an intelligent, serverless database caching engine which allows low-latency reads from Supabase globally, no coding required.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/powersync">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="PowerSync" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">PowerSync</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="PowerSync is a drop-in sync layer for making apps built on Supabase work offline-first.">PowerSync is a drop-in sync layer for making apps built on Supabase work offline-first.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/readyset">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="ReadySet" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">ReadySet</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Same database, (much) faster queries.">Same database, (much) faster queries.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/replicache">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Replicache" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Replicache</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Replicache is a JavaScript framework for building high performance, collaborative, offline-first web apps.">Replicache is a JavaScript framework for building high performance, collaborative, offline-first web apps.</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div id="data platform" className="space-y-8">
              <h2 className="h2">Data Platform</h2>
              <div className="grid  grid-cols-1 gap-5 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
                <a href="/partners/artie">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Artie" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Artie</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Open source software for real-time data replication between databases and data warehouses. Leverage the power of CDC streaming, without the complex maintenance.">Open source software for real-time data replication between databases and data warehouses. Leverage the power of CDC streaming, without the complex maintenance.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/basedash">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Basedash" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Basedash</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Basedash is a CMS made for SQL databases.">Basedash is a CMS made for SQL databases.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/buster">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Buster" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Buster</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Build LLM-powered analytics into your product.">Build LLM-powered analytics into your product.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/directus">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Directus" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Directus</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Power any project with a modern, open source data platform.">Power any project with a modern, open source data platform.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/draxlr">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Draxlr" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Draxlr</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="No-Code Data Visualization Platform that lets you Embed Dashboards, Get Data Alerts, and more.">No-Code Data Visualization Platform that lets you Embed Dashboards, Get Data Alerts, and more.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/explo">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Explo" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Explo</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Build customer-facing dashboards on top of your database.">Build customer-facing dashboards on top of your database.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/insightbase">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="InsightBase" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">InsightBase</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Chat with your Database Using AI.">Chat with your Database Using AI.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/risingwave">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="RisingWave" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">RisingWave</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Real-time insights on streaming data using SQL.">Real-time insights on streaming data using SQL.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/trevor_io">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Trevor.io" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Trevor.io</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Trevor.io empowers your whole team to get answers from your Supabase database data, in just a few clicks.">Trevor.io empowers your whole team to get answers from your Supabase database data, in just a few clicks.</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div id="devtools" className="space-y-8">
              <h2 className="h2">DevTools</h2>
              <div className="grid  grid-cols-1 gap-5 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
                <a href="/partners/cloudflare-workers">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="CloudFlare Workers" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">CloudFlare Workers</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Using Supabase from your Cloudflare Workers just got even easier.">Using Supabase from your Cloudflare Workers just got even easier.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/codesandbox">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="CodeSandbox" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">CodeSandbox</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="The new CodeSandbox Projects Beta let’s you run your projects and turn them into a link you can share with anyone.">The new CodeSandbox Projects Beta let’s you run your projects and turn them into a link you can share with anyone.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/deepnote">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Deepnote" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Deepnote</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Deepnote is a new kind of data notebook that’s built for collaboration — Jupyter compatible, works magically in the cloud, and sharing is easy as sending a link.">Deepnote is a new kind of data notebook that’s built for collaboration — Jupyter compatible, works magically in the cloud, and sharing is easy as sending a link.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/dhiwise">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="DhiWise" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">DhiWise</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Visual programming platform to develop enterprise-grade applications in low-code and pro-code simultaneously.">Visual programming platform to develop enterprise-grade applications in low-code and pro-code simultaneously.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/doppler">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Doppler" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Doppler</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Doppler is the multi-cloud SecretOps Platform developers and security teams trust to provide secrets management at enterprise scale.">Doppler is the multi-cloud SecretOps Platform developers and security teams trust to provide secrets management at enterprise scale.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/estuary">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Estuary" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Estuary</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Estuary helps seamlessly migrate your data from Firestore to a Supabase Postgres database.">Estuary helps seamlessly migrate your data from Firestore to a Supabase Postgres database.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/infisical">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Infisical" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Infisical</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Infisical is an open-source end-to-end encrypted secrets platform.">Infisical is an open-source end-to-end encrypted secrets platform.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/litellm">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="LiteLLM" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">LiteLLM</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Simplify LLM API Calls across Anthropic, OpenAI, HuggingFace, Replicate, etc. ">Simplify LLM API Calls across Anthropic, OpenAI, HuggingFace, Replicate, etc. </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/nuxt">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Nuxt" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Nuxt</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="The Intuitive Vue Framework">The Intuitive Vue Framework</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/prisma">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Prisma" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Prisma</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Next-generation Node.js and TypeScript ORM.">Next-generation Node.js and TypeScript ORM.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/react-admin">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="React-admin" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">React-admin</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="A frontend Framework for building B2B applications.">A frontend Framework for building B2B applications.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/replibyte">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Replibyte" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Replibyte</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Replibyte lets you seed your databases with your production data while keeping sensitive data safe.">Replibyte lets you seed your databases with your production data while keeping sensitive data safe.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/resend">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Resend" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Resend</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Email for developers to reach humans instead of spam folders. Build, test, and deliver transactional emails at scale.">Email for developers to reach humans instead of spam folders. Build, test, and deliver transactional emails at scale.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/snaplet">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Snaplet" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Snaplet</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Snaplet is a developer tool that copies a Postgres database, transforming personal information, so that you can safely code against actual data.">Snaplet is a developer tool that copies a Postgres database, transforming personal information, so that you can safely code against actual data.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/stormkit">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Stormkit" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Stormkit</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Full-stack Javascript apps. Deployed to the Cloud.">Full-stack Javascript apps. Deployed to the Cloud.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/streamlit">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Streamlit" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Streamlit</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Streamlit turns data scripts into shareable web apps in minutes. All in pure Python. No front‑end experience required.">Streamlit turns data scripts into shareable web apps in minutes. All in pure Python. No front‑end experience required.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/tamagui-takeout">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Tamagui Takeout" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Tamagui Takeout</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="React Native and Web starter kit with everything you need to bootstrap your startup.">React Native and Web starter kit with everything you need to bootstrap your startup.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/triggerdotdev">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Trigger.dev" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Trigger.dev</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="The background jobs framework.">The background jobs framework.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/vercel">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Vercel" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Vercel</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Easily add the power of Supabase to your Vercel projects with our Vercel integration.">Easily add the power of Supabase to your Vercel projects with our Vercel integration.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/windmill">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Windmill" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Windmill</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Open-source platform to turn minimal scripts into internal UIs and workflows.">Open-source platform to turn minimal scripts into internal UIs and workflows.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/zapp_run">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Zapp!" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Zapp!</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Build Flutter apps in your browser!">Build Flutter apps in your browser!</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/pgmustard">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="pgMustard" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">pgMustard</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Troubleshoot slow queries on Supabase using explain and pgMustard.">Troubleshoot slow queries on Supabase using explain and pgMustard.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/refine_dev">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="refine" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">refine</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Build your React-based CRUD applications, without constraints.">Build your React-based CRUD applications, without constraints.</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div id="foreign data wrapper" className="space-y-8">
              <h2 className="h2">Foreign Data Wrapper</h2>
              <div className="grid  grid-cols-1 gap-5 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
                <a href="/partners/supabase_wrapper_bigquery">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="BigQuery Wrapper" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">BigQuery Wrapper</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="A foreign data wrapper for BigQuery developed using Supabase Wrappers.">A foreign data wrapper for BigQuery developed using Supabase Wrappers.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/supabase_wrapper_firebase">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Firebase Wrapper" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Firebase Wrapper</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="A foreign data wrapper for Firebase developed using Supabase Wrappers.">A foreign data wrapper for Firebase developed using Supabase Wrappers.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/supabase_wrapper_stripe">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Stripe Wrapper" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Stripe Wrapper</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="A foreign data wrapper for Stripe developed using Supabase Wrappers.">A foreign data wrapper for Stripe developed using Supabase Wrappers.</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div id="low-code" className="space-y-8">
              <h2 className="h2">Low-Code</h2>
              <div className="grid  grid-cols-1 gap-5 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
                <a href="/partners/appsmith">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Appsmith" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Appsmith</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Build Support Dashboards by connecting Supabase to an Appsmith front-end.">Build Support Dashboards by connecting Supabase to an Appsmith front-end.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/clutch">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Clutch" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Clutch</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Clutch helps product teams go from prototype to production in real-time. #CodeOptional">Clutch helps product teams go from prototype to production in real-time. #CodeOptional</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/dashibase">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Dashibase" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Dashibase</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Dashibase is a lightning-fast way to build your application frontend in minutes, not days. ">Dashibase is a lightning-fast way to build your application frontend in minutes, not days. </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/dezbor">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Dezbor" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Dezbor</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Build your Admin Panel with AI.">Build your Admin Panel with AI.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/draftbit">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Draftbit" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Draftbit</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Draftbit is back-end agnostic and connects to Supabase via REST API.">Draftbit is back-end agnostic and connects to Supabase via REST API.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/drapcode">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="DrapCode" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">DrapCode</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Build Full-Fledged Web Applications - No Coding Required.">Build Full-Fledged Web Applications - No Coding Required.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/dronahq">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="DronaHQ" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">DronaHQ</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Low code toolkit for developers to quickly build internal tools, digital journeys, operational apps on top of any data source or APIs.">Low code toolkit for developers to quickly build internal tools, digital journeys, operational apps on top of any data source or APIs.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/flutterflow">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="FlutterFlow" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">FlutterFlow</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Create beautiful UI, generate clean code, and deploy to the app stores or web in one click. Fully extensible with custom code.">Create beautiful UI, generate clean code, and deploy to the app stores or web in one click. Fully extensible with custom code.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/forestadmin">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Forest Admin" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Forest Admin</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="One internal tool builder for all your data.">One internal tool builder for all your data.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/fezto">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Frontend Zero to One" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Frontend Zero to One</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Launch an app instantly via OpenAPI spec.">Launch an app instantly via OpenAPI spec.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/illa">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="ILLA" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">ILLA</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="A low-code platform for developers to build internal tools in minutes.">A low-code platform for developers to build internal tools in minutes.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/internalio">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Internal" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Internal</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Build custom internal apps and workflows incredibly fast on top of Supabase.">Build custom internal apps and workflows incredibly fast on top of Supabase.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/jetadmin">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Jet Admin" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Jet Admin</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Build custom business apps and front-ends for your external or internal users!">Build custom business apps and front-ends for your external or internal users!</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/plasmic">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Plasmic" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Plasmic</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Create stunning visual content and pages, seamlessly integrating no-code into your codebase. Unblock your teams and ship lightning fast.">Create stunning visual content and pages, seamlessly integrating no-code into your codebase. Unblock your teams and ship lightning fast.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/retool">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Retool" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Retool</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Build internal tools, remarkably fast.">Build internal tools, remarkably fast.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/voltapp">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="Voltapp" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">Voltapp</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Voltapp is a nocode tool to create any kind of application for desktop or mobile.">Voltapp is a nocode tool to create any kind of application for desktop or mobile.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/weweb">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="WeWeb" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">WeWeb</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="WeWeb is a no-code tool that allows you to build user interfaces on top of existing databases.">WeWeb is a no-code tool that allows you to build user interfaces on top of existing databases.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/partners/yepcode">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="YepCode" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">YepCode</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="YepCode is the integration &amp; automation tool that loves source code.">YepCode is the integration &amp; automation tool that loves source code.</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div id="messaging" className="space-y-8">
              <h2 className="h2">Messaging</h2>
              <div className="grid  grid-cols-1 gap-5 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
                <a href="/partners/onesignal">
                  <div className=" bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg">
                    <div className="flex w-full space-x-6">
                      <div className="relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110">
                        <img alt="OneSignal" loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src="https://www.google.com/s2/favicons?domain=google.com" />
                      </div>
                      <div>
                        <h3 className="text-light group-hover:text-foreground mb-2 text-xl transition-colors">OneSignal</h3>
                        <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[80px]" title="Push Notifications, Email, SMS &amp; In-App Messaging to drive engaged and loyal customers.">Push Notifications, Email, SMS &amp; In-App Messaging to drive engaged and loyal customers.</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      </main>
    </>
  );
}
