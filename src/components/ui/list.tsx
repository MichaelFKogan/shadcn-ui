import { Badge } from "@/components/ui/badge"
import '../styles/list.css'

export function List({ data, anchor }) {
    return (
        <>
            <div className="card-list bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-4 py-4 shadow transition-all hover:shadow-lg">
                <h2 id={data.heading.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/ug, '').replace(/\s+/g, '').toLowerCase()} className="h2 section-title mb-1 border-b-2">
                    {data.headingImage && (<img src={"/images/" + data.headingImage} className="section-title__img" />)}
                    {data.heading}
                </h2>
                {data.links.map((linkItem, linkIndex) => (
                    <div className="flex w-full space-x-6">
                        <a href={linkItem.url} target="_blank" key={linkIndex} className="list__link" style={{alignItems: "center"}}>

                            <div className="relative h-[22px] min-w-[22px] w-[22px] rounded-md overflow-hidden scale-100 transition-all">
                                <img alt={linkItem.title} loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src={"/images/" + linkItem.image} />
                            </div>

                            <div className="link__text-wrapper">
                                <h3 className="text-foreground-light group-hover:text-foreground mb-0 text-sm font-medium transition-colors">{linkItem.title}</h3>
                            </div>

                        </a>
                    </div>
                ))}
            </div>
        </>
    );
}
