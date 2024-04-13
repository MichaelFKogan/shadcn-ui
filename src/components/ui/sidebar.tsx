// src/components/ui/sidebar.tsx
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  import { thailand } from '../../data/thailand/thailand';
  
  import { bangkok } from '../../data/thailand/bangkok';

  import { instagram } from '../../data/socialmedia/instagram';

  

export function Sidebar({setData}) {

    return (

<div className="lg:col-span-2 xl:col-span-2">
              <div className="fixed-sidebar space-y-6">

                {/* <div className="text-sm leading-4 grid gap-2 md:grid md:grid-cols-12">
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
                </div> */}

                <div className="hidden lg:block">
                  <h2 className="text-foreground-lighter mb-2 text-xl">Countries</h2>
                  <div className="countries-accordion accordion space-y-1">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>⛩ Asia</AccordionTrigger>
                            <AccordionContent>
                                <hr className="mt-2 mb-2"/>
                                <a className="country text-foreground-light block text-base font-medium" onClick={() => setData(thailand)}>🇹🇭 Thailand</a>
                                <a className="city text-foreground-light block text-sm" onClick={() => setData(bangkok)}>🛺 Bangkok</a>
                                <a className="city text-foreground-light block text-sm">🐘 Chiang Mai</a>
                                <a className="city text-foreground-light block text-sm">🌊 Kho Phangan</a>
                                <hr className="mt-2 mb-2"/>
                                <a className="country text-foreground-light block text-base font-medium" href="/japan">🇯🇵 Japan</a>
                                <a className="city text-foreground-light block text-sm" href="/tokyo">🗼 Tokyo</a>
                                <a className="city text-foreground-light block text-sm" href="/osaka">🏯 Osaka</a>
                                <a className="city text-foreground-light block text-sm" href="/kyoto">👘 Kyoto</a>
                                <hr className="mt-2 mb-2"/>
                                <a className="country text-foreground-light block text-base font-medium" href="/indonesia">🇮🇩 Indonesia</a>
                                <a className="city text-foreground-light block text-sm" href="/bali">🏝 Bali</a>
                                <a className="city text-foreground-light block text-sm" href="/canggu">🏄‍♀️ Canggu</a>
                                <a className="city text-foreground-light block text-sm" href="/ubud">🐒 Ubud</a>
                                <hr className="mt-2 mb-2"/>
                                <a className="country text-foreground-light block text-base font-medium" href="/korea">🇰🇷 Korea</a>
                                <a className="city text-foreground-light block text-sm" href="/bali">🍱 Seoul</a>
                                <a className="city text-foreground-light block text-sm" href="/canggu">🚝 Busan</a>
                                <hr className="mt-2 mb-2"/>
                                <a className="country text-foreground-light block text-base font-medium" href="/vietnam">🇻🇳 Vietnam</a>
                                <a className="city text-foreground-light block text-sm" href="/hochiminhcity">🛵 Ho Chi Minh City</a>
                                <a className="city text-foreground-light block text-sm" href="/hanoi">🍲 Hanoi</a>
                                <hr className="mt-2 mb-2"/>
                                <a className="country text-foreground-light block text-base font-medium" href="/china">🇨🇳 China</a>
                                <a className="city text-foreground-light block text-sm" href="/beijing">🥡 Beijing</a>
                                <a className="city text-foreground-light block text-sm" href="/shanghai">🧧 Shanghai</a>
                                <hr className="mt-2 mb-2"/>
                                <a className="country text-foreground-light block text-base font-medium" href="/hong kong">🇭🇰 Hong Kong</a>
                                <hr className="mt-2 mb-2"/>
                                <a className="country text-foreground-light block text-base font-medium" href="/taiwan">🇹🇼 Taiwan</a>
                                <a className="city text-foreground-light block text-sm" href="/taipei">Taipei</a>
                                <hr className="mt-2 mb-2"/>
                                

                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>💃🏻 Latin America</AccordionTrigger>
                            <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>🇪🇺 Europe</AccordionTrigger>
                            <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>🕌 Middle East</AccordionTrigger>
                            <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>🌊 Oceania</AccordionTrigger>
                            <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                  </div>
                </div>


                <div className="hidden lg:block">
                  <h2 className="text-foreground-lighter mb-2 text-xl">Categories</h2>
                  <div className="categories space-y-1">
                    {/* <a className="text-foreground-light block text-base" href="#featured">💯 Featured</a> */}
                    <a className="text-foreground-light block text-base" href="#travel">🗺 Travel</a>
                    <a className="text-foreground-light block text-base" href="#accomodation">🛌 Accomodation</a>
                    <a className="text-foreground-light block text-base" href="#healthinsurance">😷 Health Insurance</a>
                    <a className="text-foreground-light block text-base" href="#visa">🛂 Visa</a>

                    {/* <a className="text-foreground-light block text-base" href="#socialmedia">📸 Social Media</a> */}

                    <Accordion className="categories-accordion accordion" type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>📸 Social Media</AccordionTrigger>
                            <AccordionContent>
                    <a className="text-foreground-light block text-base" onClick={() => setData(instagram)}><div className="flex items-center"><img src="./images/instagram.png" className="accordion-logo"/>Instagram</div></a>
                    <a className="text-foreground-light block text-base" href="#tiktok"><div className="flex items-center"><img src="./images/tiktok.png" className="accordion-logo"/>TikTok</div></a>
                    <a className="text-foreground-light block text-base" href="#youtube"><div className="flex items-center"><img src="./images/youtube.png" className="accordion-logo"/>YouTube</div></a>
                    <a className="text-foreground-light block text-base" href="#reddit"><div className="flex items-center"><img src="./images/reddit.png" className="accordion-logo"/>Reddit</div></a>
                            </AccordionContent>
                            </AccordionItem>
                    </Accordion>

                    <a className="text-foreground-light block text-base" href="#apps">📱 Apps</a>
                    <a className="text-foreground-light block text-base" href="#vlog">📹 Vlog</a>
                    <a className="text-foreground-light block text-base" href="#blog">✍️ Blog</a>

                    <a className="text-foreground-light block text-base" href="#work">👔 Work</a>
                    <a className="text-foreground-light block text-base" href="#work">🔤 English Teaching</a>

                    <a className="text-foreground-light block text-base" href="#finance">💵 Finance</a>
                    <a className="text-foreground-light block text-base" href="#productivity">📊 Productivity</a>


                    <a className="text-foreground-light block text-base" href="#blog">⌚️ Products</a>
                  </div>
                </div>

                {/* <div className="space-y-4">
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
                </div> */}

              </div>
            </div>

    )
}

export default Sidebar;