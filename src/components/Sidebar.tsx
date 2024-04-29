// src/components/sidebar.tsx
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { Button } from "@/components/ui/button";
  import { ChevronsLeft } from "lucide-react"
  import './styles/sidebar.css'
  

export function Sidebar({onSelectKeyword, handleFirstKeyword, sidebarOpen, handleSidebarToggle}) {

    return (
      <>
            <div className={`sidebar-wrapper fixed top-0 z-10 flex w-full flex-col border-b lg:bottom-0 lg:z-auto lg:w-56 2xl:w-64 lg:border-b-0 lg:border-r ${sidebarOpen ? "block" : "collapsed"}`}>
              <div className="fixed-sidebar">

              <div className="flex h-14 items-center px-6 py-4 lg:h-auto" style={{display: "none"}}>
                <a className="group flex w-full items-center gap-x-2.5" onClick={() => onSelectKeyword('')}>
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
                  <h2 className="countries-title text-foreground-lighter mb-2 text-sm font-semibold border-b-2">Countries</h2>
                  <div className="countries-accordion accordion space-y-1">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                        <AccordionTrigger><div><span className="sidebar-emoji">⛩</span> <span className="country-click" onClick={() => onSelectKeyword('Asia')}>Asia</span></div></AccordionTrigger>
                            <AccordionContent>
                                <hr className="mx-7 my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => onSelectKeyword('Thailand')}><span className="sidebar-emoji">🇹🇭</span> Thailand</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => onSelectKeyword('Bangkok')}><span className="sidebar-emoji">🛺</span> Bangkok</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => onSelectKeyword('Chiang Mai')}><span className="sidebar-emoji">🐘</span> Chiang Mai</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => onSelectKeyword('Kho Phangan')}><span className="sidebar-emoji">🌊</span> Kho Phangan</a>
                                <hr className="mx-7 my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => onSelectKeyword('Japan')}><span className="sidebar-emoji">🇯🇵</span> Japan</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => onSelectKeyword('Tokyo')}><span className="sidebar-emoji">🗼</span> Tokyo</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => onSelectKeyword('Osaka')}><span className="sidebar-emoji">🏯</span> Osaka</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => onSelectKeyword('Kyoto')}><span className="sidebar-emoji">👘</span> Kyoto</a>
                                <hr className="mx-7 my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => onSelectKeyword('Indonesia')}><span className="sidebar-emoji">🇮🇩</span> Indonesia</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => onSelectKeyword('Bali')}><span className="sidebar-emoji">🏝</span> Bali</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => onSelectKeyword('Canggu')}><span className="sidebar-emoji">🏄‍♀️</span> Canggu</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => onSelectKeyword('Ubud')}><span className="sidebar-emoji">🐒</span> Ubud</a>
                                <hr className="mx-7 my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => onSelectKeyword('Korea')}><span className="sidebar-emoji">🇰🇷</span> Korea</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => onSelectKeyword('Seoul')}><span className="sidebar-emoji">🍱</span> Seoul</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => onSelectKeyword('Busan')}><span className="sidebar-emoji">🚝</span> Busan</a>
                                <hr className="mx-7 my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => onSelectKeyword('Vietnam')}><span className="sidebar-emoji">🇻🇳</span> Vietnam</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => onSelectKeyword('Ho Chi Minh City')}><span className="sidebar-emoji">🛵</span> Ho Chi Minh City</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => onSelectKeyword('Hanoi')}><span className="sidebar-emoji">🍲</span> Hanoi</a>
                                <hr className="mx-7 my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => onSelectKeyword('China')}><span className="sidebar-emoji">🇨🇳</span> China</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => onSelectKeyword('Beijing')}><span className="sidebar-emoji">🥡</span> Beijing</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => onSelectKeyword('Shanghai')}><span className="sidebar-emoji">🧧</span> Shanghai</a>
                                <hr className="mx-7 my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => onSelectKeyword('Hong Kong')}><span className="sidebar-emoji">🇭🇰</span> Hong Kong</a>
                                <hr className="mx-7 my-2"/>
                                <a className="country text-foreground-light block text-sm" onClick={() => onSelectKeyword('Taiwan')}><span className="sidebar-emoji">🇹🇼</span> Taiwan</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => onSelectKeyword('Taipei')}>Taipei</a>
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
                  <h2 className="categories-title text-foreground-lighter mt-4 mb-2 text-sm font-semibold border-b-2" onClick={() => onSelectKeyword('Essentials')}><span className="sidebar-emoji">📍</span> Essentials</h2>
                  <div className="categories">
                    
                    <a className="text-foreground-light block text-sm" onClick={() => handleFirstKeyword("Flights")}><span className="sidebar-emoji">✈️</span> Flights</a>
                    <a className="text-foreground-light block text-sm" onClick={() => handleFirstKeyword("Maps")}><span className="sidebar-emoji">🗺</span> Maps</a>
                    <a className="text-foreground-light block text-sm" onClick={() => handleFirstKeyword("Accomodation")}><span className="sidebar-emoji">🛌</span> Accomodation</a>
                    <a className="text-foreground-light block text-sm" onClick={() => handleFirstKeyword("Health Insurance")}><span className="sidebar-emoji">😷</span> Health Insurance</a>
                    <a className="text-foreground-light block text-sm" onClick={() => handleFirstKeyword("Visa")}><span className="sidebar-emoji">🛂</span> Visa</a>

                    <h2 className="categories-title text-foreground-lighter mb-2 mt-4 text-sm font-semibold border-b-2"><span className="sidebar-emoji">📸</span> Social Media</h2>
                    <a className="text-foreground-light block text-sm" onClick={() => onSelectKeyword("Instagram")}><div className="flex items-center"><span className="sidebar-emoji"><img src="./images/instagram.png" className="accordion-logo"/></span>Instagram</div></a>
                    <a className="text-foreground-light block text-sm" onClick={() => onSelectKeyword("TikTok")}><div className="flex items-center"><span className="sidebar-emoji"><img src="./images/tiktok.png" className="accordion-logo"/></span>TikTok</div></a>
                    <a className="text-foreground-light block text-sm" onClick={() => onSelectKeyword("Facebook")}><div className="flex items-center"><span className="sidebar-emoji"><img src="./images/facebook.png" className="accordion-logo"/></span>Facebook</div></a>
                    <a className="text-foreground-light block text-sm" onClick={() => onSelectKeyword("YouTube")}><div className="flex items-center"><span className="sidebar-emoji"><img src="./images/youtube.png" className="accordion-logo"/></span>YouTube</div></a>
                    <a className="text-foreground-light block text-sm" onClick={() => onSelectKeyword("Reddit")}><div className="flex items-center"><span className="sidebar-emoji"><img src="./images/reddit.png" className="accordion-logo"/></span>Reddit</div></a>
                    <a className="text-foreground-light block text-sm" onClick={() => onSelectKeyword("Vlog")}><span className="sidebar-emoji">📹</span> Vlog</a>
                    <a className="text-foreground-light block text-sm" onClick={() => onSelectKeyword("Blog")}><span className="sidebar-emoji">✍️</span> Blog</a>

                    <h2 className="categories-title text-foreground-lighter mb-2 mt-4 text-sm font-semibold border-b-2"><span className="sidebar-emoji">💼</span> Work</h2>
                    <a className="text-foreground-light block text-sm" onClick={() => onSelectKeyword("Jobs")}><span className="sidebar-emoji">👔</span> Work</a>
                    <a className="text-foreground-light block text-sm" onClick={() => onSelectKeyword("English Teaching")}><span className="sidebar-emoji">🔤</span> English Teaching</a>
                    <a className="text-foreground-light block text-sm" onClick={() => onSelectKeyword("Finance")}><span className="sidebar-emoji">💵</span> Finance</a>
                    <a className="text-foreground-light block text-sm" onClick={() => onSelectKeyword("Productivity")}><span className="sidebar-emoji">📊</span> Productivity</a>

                    <h2 className="categories-title text-foreground-lighter mb-2 mt-4 text-sm font-semibold border-b-2"><span className="sidebar-emoji">🏄‍♀️</span> Lifestyle</h2>
                    <a className="text-foreground-light block text-sm" onClick={() => onSelectKeyword("Apps")}><span className="sidebar-emoji">📱</span> Apps</a>
                    <a className="text-foreground-light block text-sm" onClick={() => onSelectKeyword("Products")}><span className="sidebar-emoji">⌚️</span> Products</a>
                    <a className="text-foreground-light block text-sm" onClick={() => onSelectKeyword("Solo")}><span className="sidebar-emoji">🧍‍♀️</span> Solo Travel</a>
                    <a className="text-foreground-light block text-sm" onClick={() => onSelectKeyword("Expat")}><span className="sidebar-emoji">🧍‍♂️</span> Expat</a>
                    <a className="text-foreground-light block text-sm" onClick={() => onSelectKeyword("Couple")}><span className="sidebar-emoji">👫</span> Couple</a>
                    <a className="text-foreground-light block text-sm" onClick={() => onSelectKeyword("Backpacker")}><span className="sidebar-emoji">🎒</span> Backpacker</a>
                    <a className="text-foreground-light block text-sm" onClick={() => onSelectKeyword("Van Life")}><span className="sidebar-emoji">🚐</span> Van Life</a>

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