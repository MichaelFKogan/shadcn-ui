import { Badge } from "@/components/ui/badge";
import './styles/list.css';

import Image from "next/image";

export function List({ data, cleanCategoryForSorting }) {
    // Group the data by category
    const groupedData = data.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});

    // Sort the categories alphabetically, accounting for emojis and symbols
    const sortedCategories = Object.keys(groupedData).sort((a, b) => cleanCategoryForSorting(a).localeCompare(cleanCategoryForSorting(b)));

    return (
        <>
            {sortedCategories.map((category, index) => (

                <div key={index} className="list-container card-list bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-lg border shadow transition-all hover:shadow-lg">
                        <h2 id={category.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/ug, '').replace(/\s+/g, '').toLowerCase()} className="category-heading h2 section-title mb-1 border-b-2 px-4 py-2">
                            {category.headingImage && (<img src={"/images/" + category.headingImage} className="section-title__img" />)}
                            {category}
                        </h2>
                    <div className="card-list px-4 pb-4">

                        {groupedData[category].map((item, idx) => {

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

                                    <div className="flex w-full space-x-6">
                                        <a href={item.url} target="_blank" key={index} className="list__link" style={{ alignItems: "center" }}>

                                            <div className="relative h-[22px] min-w-[22px] w-[22px] rounded-md overflow-hidden scale-100 transition-all">
                                                <Image alt={item.title} loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src={imagePath} width={22} height={22} />
                                            </div>

                                            <div className="link__text-wrapper">
                                                <h3 className="text-foreground-light group-hover:text-foreground mb-0 text-sm font-medium transition-colors">{item.title}</h3>
                                            </div>

                                        </a>
                                    </div>

                                </>
                            );
                            
                        })}

                    </div>
                </div>

            ))}
        </>
    );
}
