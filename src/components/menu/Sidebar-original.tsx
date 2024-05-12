// src/components/sidebar.tsx
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { Button } from "@/components/ui/button";
  import { ChevronsLeft } from "lucide-react"
  import '../styles/sidebar.css'

  import Image from "next/image";
  

export function Sidebar({handleKeywordSelection, handleCountrySelection, sidebarOpen, handleSidebarToggle}) {

    return (
      <>
            <div className={`sidebar-wrapper fixed top-0 z-10 flex w-full flex-col border-b lg:bottom-0 lg:z-auto lg:w-56 2xl:w-64 lg:border-b-0 lg:border-r ${sidebarOpen ? "block" : "collapsed"}`}>
              <div className="fixed-sidebar">

              <div className="flex h-14 items-center px-6 py-4 lg:h-auto" style={{display: "none"}}>
                <a className="group flex w-full items-center gap-x-2.5" onClick={() => handleCountrySelection('')}>
                    <div className="h-7 w-7 rounded-full border">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6"><rect width="256" height="256" fill="none"></rect><line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                            <line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                        </svg>
                    </div>
                        <span className="hidden font-bold sm:inline-block">NomadLinks</span>
                </a>
              </div>

                <div className="hidden lg:block">
                  <div className="w-full h-14 flex items-center mr-2 text-right">
                    <Button variant="ghost" size="icon" className="ml-auto mr-3" onClick={handleSidebarToggle}>
                      <ChevronsLeft />
                    </Button>
                  </div>
                  <h2 className="countries-title text-foreground-lighter mb-2 text-sm font-medium border-b-2">COUNTRIES</h2>
                  <div className="countries-accordion accordion space-y-1">

                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                        <AccordionTrigger><div><span className="sidebar-emoji">⛩</span> <span className="country-click" onClick={() => handleCountrySelection('⛩ Asia')}>Asia</span></div></AccordionTrigger>
                            <AccordionContent>
                                <hr className="mx-7 my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇹🇭 Thailand')}><span className="sidebar-emoji">🇹🇭</span> Thailand</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🛺 Bangkok')}><span className="sidebar-emoji">🛺</span> Bangkok</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🐘 Chiang Mai')}><span className="sidebar-emoji">🐘</span> Chiang Mai</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🌊 Kho Phangan')}><span className="sidebar-emoji">🌊</span> Kho Phangan</a>
                                <hr className="mx-7 my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇯🇵 Japan')}><span className="sidebar-emoji">🇯🇵</span> Japan</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🗼 Tokyo')}><span className="sidebar-emoji">🗼</span> Tokyo</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🏯 Osaka')}><span className="sidebar-emoji">🏯</span> Osaka</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('👘 Kyoto')}><span className="sidebar-emoji">👘</span> Kyoto</a>
                                <hr className="mx-7 my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇮🇩 Indonesia')}><span className="sidebar-emoji">🇮🇩</span> Indonesia</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🏝 Bali')}><span className="sidebar-emoji">🏝</span> Bali</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🏄‍♀️ Canggu')}><span className="sidebar-emoji">🏄‍♀️</span> Canggu</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🐒 Ubud')}><span className="sidebar-emoji">🐒</span> Ubud</a>
                                <hr className="mx-7 my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇰🇷 Korea')}><span className="sidebar-emoji">🇰🇷</span> Korea</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🍱 Seoul')}><span className="sidebar-emoji">🍱</span> Seoul</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🚝 Busan')}><span className="sidebar-emoji">🚝</span> Busan</a>
                                <hr className="mx-7 my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇻🇳 Vietnam')}><span className="sidebar-emoji">🇻🇳</span> Vietnam</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🛵 Ho Chi Minh City')}><span className="sidebar-emoji">🛵</span> Ho Chi Minh City</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🍲 Hanoi')}><span className="sidebar-emoji">🍲</span> Hanoi</a>
                                <hr className="mx-7 my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇨🇳 China')}><span className="sidebar-emoji">🇨🇳</span> China</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🥡 Beijing')}><span className="sidebar-emoji">🥡</span> Beijing</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('🧧 Shanghai')}><span className="sidebar-emoji">🧧</span> Shanghai</a>
                                <hr className="mx-7 my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇭🇰 Hong Kong')}><span className="sidebar-emoji">🇭🇰</span> Hong Kong</a>
                                <hr className="mx-7 my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => handleCountrySelection('🇹🇼 Taiwan')}><span className="sidebar-emoji">🇹🇼</span> Taiwan</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => handleCountrySelection('Taipei')}>Taipei</a>
                                <hr className="mx-7 my-2"/>
                                

                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger><div><span className="sidebar-emoji">💃🏻</span> Latin America</div></AccordionTrigger>
                            <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger><div><span className="sidebar-emoji">🇪🇺</span> Europe</div></AccordionTrigger>
                            <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger><div><span className="sidebar-emoji">🕌</span> Middle East</div></AccordionTrigger>
                            <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger><div><span className="sidebar-emoji">🌊</span> Oceania</div></AccordionTrigger>
                            <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                  </div>
                </div>


                <div className="hidden lg:block mb-32">

                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger><div className="countries-title text-foreground-lighter mb-2 text-sm font-medium border-b-2"><span className="sidebar-emoji">📍</span> <span className="country-click" onClick={() => handleCountrySelection('📍 Essentials')}>ESSENTIALS</span></div></AccordionTrigger>
                        <AccordionContent>
                        </AccordionContent>
                  </AccordionItem>
                </Accordion>


                  <h2 className="categories-title essentials text-foreground-lighter mt-5 mb-2 text-sm font-medium border-b-2" onClick={() => handleCountrySelection('📍 Essentials')}><span className="sidebar-emoji">📍</span> Essentials</h2>
                  <div className="categories">
                    
                    <a className="text-foreground-light block text-sm" onClick={() => handleCountrySelection("✈️ Flights")}><span className="sidebar-emoji">✈️</span> Flights</a>
                    <a className="text-foreground-light block text-sm" onClick={() => handleCountrySelection("🗺 Maps")}><span className="sidebar-emoji">🗺</span> Maps</a>
                    <a className="text-foreground-light block text-sm" onClick={() => handleCountrySelection("🛌 Accomodation")}><span className="sidebar-emoji">🛌</span> Accomodation</a>
                    <a className="text-foreground-light block text-sm" onClick={() => handleCountrySelection("😷 Health Insurance")}><span className="sidebar-emoji">😷</span> Health Insurance</a>
                    <a className="text-foreground-light block text-sm" onClick={() => handleCountrySelection("🛂 Visa")}><span className="sidebar-emoji">🛂</span> Visa</a>
                    <a className="text-foreground-light block text-sm" onClick={() => handleCountrySelection("🗺 Travel Guide")}><span className="sidebar-emoji">🗺</span> Travel Guide</a>

                    <h2 className="categories-title text-foreground-lighter mb-2 mt-5 text-sm font-medium border-b-2"><span className="sidebar-emoji">📸</span> Social Media</h2>
                    <a className="text-foreground-light block text-sm" onClick={() => handleCountrySelection("Instagram")}><div className="flex items-center"><span className="sidebar-emoji"><Image src="./images/instagram.png" className="accordion-logo" width={20} height={20} /></span>Instagram</div></a>
                    <a className="text-foreground-light block text-sm" onClick={() => handleCountrySelection("TikTok")}><div className="flex items-center"><span className="sidebar-emoji"><Image src="./images/tiktok.png" className="accordion-logo" width={20} height={20} /></span>TikTok</div></a>
                    <a className="text-foreground-light block text-sm" onClick={() => handleCountrySelection("Facebook")}><div className="flex items-center"><span className="sidebar-emoji"><Image src="./images/facebook.png" className="accordion-logo" width={20} height={20} /></span>Facebook</div></a>
                    <a className="text-foreground-light block text-sm" onClick={() => handleCountrySelection("YouTube")}><div className="flex items-center"><span className="sidebar-emoji"><Image src="./images/youtube.png" className="accordion-logo" width={20} height={20} /></span>YouTube</div></a>
                    <a className="text-foreground-light block text-sm" onClick={() => handleCountrySelection("Reddit")}><div className="flex items-center"><span className="sidebar-emoji"><Image src="./images/reddit.png" className="accordion-logo" width={20} height={20} /></span>Reddit</div></a>
                    <a className="text-foreground-light block text-sm" onClick={() => handleCountrySelection("📹 Vlog")}><span className="sidebar-emoji">📹</span> Vlog</a>
                    <a className="text-foreground-light block text-sm" onClick={() => handleCountrySelection("✍️ Blog")}><span className="sidebar-emoji">✍️</span> Blog</a>

                    <h2 className="categories-title text-foreground-lighter mb-2 mt-5 text-sm font-medium border-b-2"><span className="sidebar-emoji">👔</span> Work</h2>
                    <a className="text-foreground-light block text-sm" onClick={() => handleCountrySelection("👔 Jobs")}><span className="sidebar-emoji">👔</span> Jobs</a>
                    <a className="text-foreground-light block text-sm" onClick={() => handleCountrySelection("🔤 English Teaching")}><span className="sidebar-emoji">👩‍🏫</span> English Teaching</a>
                    <a className="text-foreground-light block text-sm" onClick={() => handleCountrySelection("💵 Finance")}><span className="sidebar-emoji">💵</span> Finance</a>
                    <a className="text-foreground-light block text-sm" onClick={() => handleCountrySelection("📊 Productivity")}><span className="sidebar-emoji">📊</span> Productivity</a>

                    <h2 className="categories-title text-foreground-lighter mb-2 mt-5 text-sm font-medium border-b-2"><span className="sidebar-emoji">🏄‍♀️</span> Lifestyle</h2>
                    <a className="text-foreground-light block text-sm" onClick={() => handleCountrySelection("📱 Apps")}><span className="sidebar-emoji">📱</span> Apps</a>
                    <a className="text-foreground-light block text-sm" onClick={() => handleCountrySelection("⌚️ Products")}><span className="sidebar-emoji">⌚️</span> Products</a>
                    <a className="text-foreground-light block text-sm" onClick={() => handleCountrySelection("🧍‍♀️ Solo")}><span className="sidebar-emoji">🧍‍♀️</span> Solo Travel</a>
                    <a className="text-foreground-light block text-sm" onClick={() => handleCountrySelection("🧍‍♂️ Expat")}><span className="sidebar-emoji">🧍‍♂️</span> Expat</a>
                    <a className="text-foreground-light block text-sm" onClick={() => handleCountrySelection("👫 Couple")}><span className="sidebar-emoji">👫</span> Couple</a>
                    <a className="text-foreground-light block text-sm" onClick={() => handleCountrySelection("🎒 Backpacker")}><span className="sidebar-emoji">🎒</span> Backpacker</a>
                    <a className="text-foreground-light block text-sm" onClick={() => handleCountrySelection("🚐 Van Life")}><span className="sidebar-emoji">🚐</span> Van Life</a>

                    <h2 className="categories-title text-foreground-lighter mb-2 mt-5 text-sm font-medium border-b-2"><span className="sidebar-emoji">📘</span> Learn</h2>
                    <a className="text-foreground-light block text-sm" onClick={() => handleCountrySelection("🎙 Podcast")}><span className="sidebar-emoji">🎙</span> Podcast</a>
                    <a className="text-foreground-light block text-sm" onClick={() => handleCountrySelection("📘 Course")}><span className="sidebar-emoji"></span> Course</a>
                    <a className="text-foreground-light block text-sm" onClick={() => handleCountrySelection("📄 Article")}><span className="sidebar-emoji"></span> Article</a>

                  </div>
                </div>

                {/* <div className="space-y-4">
                  <div className="text-foreground-lighter mb-2 text-sm">Explore more</div>
                  <div className="grid grid-cols-2 gap-8 lg:grid-cols-1">

                    <a href="/partners/experts">
                      <div className=" hover:border-foreground-lighter bg-surface-100 group cursor-pointer rounded  border px-5 py-4  ">
                        <div className="flex flex-col gap-3">
                          <div className="bg-blue-300 text-blue-900 flex h-8 w-8 items-center justify-center rounded-md transition-all group-hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                              </path>
                            </svg>
                          </div>
                          <div>
                            <h5 className="text-foreground mb-2 text-sm">Experts</h5>
                            <p className="p text-sm">Explore our certified Supabase agency experts that build with Supabase</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="/partners/integrations#become-a-partner">
                      <div className=" hover:border-foreground-lighter bg-surface-100 group cursor-pointer rounded  border px-5 py-4  ">
                        <div className="flex flex-col gap-3">
                          <div className="bg-brand-300 text-brand flex h-8 w-8 items-center justify-center rounded-md transition-all group-hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z">
                              </path>
                            </svg>
                          </div>
                          <div>
                            <h5 className="text-foreground mb-2 text-sm">Become a partner</h5>
                            <p className="p text-sm">Fill out a quick 30 second form to apply to become a partner</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div> */}

              </div>
            </div>
    </>
    )
}

export default Sidebar;