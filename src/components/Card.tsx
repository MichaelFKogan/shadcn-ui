// src/components/Card.tsx

import { Badge } from "@/components/ui/badge"
import './styles/cards.css'
import { SquareArrowOutUpRight } from "lucide-react"

import Image from "next/image";


export function Card({ data, handleKeywordSelection, handleCountrySelection, handleCategorySelection, isSwitchOn }) {

    return (
        <>
        {/* <div className="card-row"> */}
        <div className="grid grid-cols-1 gap-3 2xl:gap-5 lg:max-w-none sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 mb-2">

            {data.map((item, index) => {
                
                    {/* <h2 key={category} id={category.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/ug, '').replace(/\s+/g, '').toLowerCase()} className="cards-heading h2 section-title mb-1 mt-4">
                        {category.headingImage && (<img src={"/images/" + category.headingImage} className="section-title__img" />)}
                        {category}
                    </h2> */}

                    {/* <div className="grid grid-cols-1 gap-5 lg:max-w-none sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-2"> */}

                        {/* {links.map((item, index) => { */}

                            // Check if title exists and provide a default value if it does not
                            const title = item.title || 'Default Title';
                            // Prepare the image path by transforming the title
                            const formattedTitle = title.toLowerCase().replace(/\s+/g, '');

                            // Declare imagePath outside of the if/else block
                            let imagePath;
                            if (
                                formattedTitle === "thaivisaadvice"
                                || formattedTitle === "bangkokexpats"
                                || formattedTitle === "digitalnomadcoffeeclub-chiangmai"
                            ) { imagePath = `/images/facebook.png`; }

                            else if (
                                formattedTitle === "@discoverhongkong"
                            ) { imagePath = `/images/instagram.png`; }

                            else if (
                                formattedTitle === "@discoverhongkong"
                                || formattedTitle === "r/chiangmai"
                                || formattedTitle === "r/thailand"
                                || formattedTitle === "r/bangkok"
                                || formattedTitle === "r/digitalnomad"
                            ) { imagePath = `/images/reddit.png`; }

                            else if (
                                formattedTitle === "christhefreelancer"
                            ) { imagePath = `/images/youtube.png`; }

                            else if (
                                formattedTitle === "@christabellatravels"
                                || formattedTitle === "layla|solofemaletravel"
                                || formattedTitle === "@digital_bromad"
                            ) { imagePath = `/images/tiktok.png`; }

                            else { imagePath = `/images/${formattedTitle}.png`; }

                            return (
                                <>
                                        <div className="card group flex h-full w-full flex-col rounded-xl transition-all border shadow" key={index}>
                                            <div className="flex flex-col">

                                            {item.tags ? (
                                                <div className="tags text-xs mt-2">
                                                    {item.tags.split(',').map((tag, tagIndex) => {
                                                        const trimmedTag = tag.trim().toLowerCase();
                                                        if (trimmedTag.includes('food delivery') || trimmedTag.includes('taxi') || trimmedTag.includes('chat')) {
                                                            return (
                                                                <Badge key={tagIndex} variant="outline" className="badge badge-tag ml-1" onClick={() => handleKeywordSelection(tag.trim())}>
                                                                    {tag.trim()}
                                                                </Badge>
                                                            );
                                                        }
                                                        return null;
                                                    })}
                                                </div>
                                            ) : null}

                                            <a href={item.url} target="_blank" key={index} className="card-link rounded-xl">
                                                {/* <SquareArrowOutUpRight /> */}
                                                <div className="image-text-wrapper flex w-full items-center p-3">
                                                    <div className="relative h-[62px] min-w-[62px] w-[62px] rounded-md overflow-hidden scale-100 transition-all">
                                                        <img alt={item.title} loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src={imagePath} width={62} height={62} />
                                                    </div>
                                                    <div className="card__text-wrapper ml-4">
                                                        <h3 className="text-foreground-light group-hover:text-foreground mb-2 text-lg font-medium transition-colors">{item.title}</h3>
                                                        <p className="text-foreground-lighter text-xs line-clamp-2 min-h-[34px] h-[34px]" title={item.description}>{item.description}</p>
                                                    </div>
                                                </div>
                                                </a>

                                                <div className={`bottom-card ${isSwitchOn ? "block" : "hidden"} px-3 pb-2`}>
                                                    {/* <hr/> */}
                                                    <div className="flex justify-end badge-wrapper">
                                                        {item.category ? <Badge variant="secondary" className="badge badge-category text-xs" onClick={() => handleCategorySelection(item.category)}>{item.category}</Badge> : null}

                                                        {item.city ? <Badge variant="outline" className="badge badge-city text-xs" onClick={() => handleCountrySelection(item.city)}>{item.city}</Badge> :
                                                        item.country ? <Badge variant="outline" className="badge badge-country text-xs" onClick={() => handleCountrySelection(item.country)}>{item.country}</Badge> : 
                                                        item.continent ? <Badge variant="outline" className="badge badge-continent text-xs" onClick={() => handleCountrySelection(item.continent)}>{item.continent}</Badge> : null}
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                </>
                            );
                        {/* })} */}

                    {/* </div> */}
                
            })}
        {/* </div> */}
        </div>
        </>
    );
}
