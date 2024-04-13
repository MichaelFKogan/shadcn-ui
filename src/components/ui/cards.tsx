import { Badge } from "@/components/ui/badge"

export function Cards({ data, anchor }) {
    return (
        <div id={anchor} className="card-row space-y-8">
            <h2 className="h2 section-title mb-1">
                {data.headingImage && (<img src={"/images/" + data.headingImage} className="section-title__img" />)}
                {data.heading}
            </h2>
            <div className="grid grid-cols-1 gap-5 lg:max-w-none sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {data.links.map((linkItem, linkIndex) => (
                    <a href={linkItem.url} target="_blank" key={linkIndex}>
                        <div className="card bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-4 py-4 shadow transition-all hover:shadow-lg">
                            {linkItem.badge ? <Badge variant="secondary" className="badge">{linkItem.badge}</Badge> : null}
                            <div className="flex w-full space-x-6">
                                <div className="relative h-[50px] min-w-[50px] w-[50px] rounded-md overflow-hidden scale-100 transition-all">
                                    <img alt={linkItem.title} loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src={"/images/" + linkItem.image} />
                                </div>
                                <div className="card__text-wrapper">
                                    <h3 className="text-foreground-light group-hover:text-foreground mb-2 text-xl transition-colors">{linkItem.title}</h3>
                                    <p className="text-foreground-lighter text-xs line-clamp-4 min-h-[50px] h-[58px]" title={linkItem.description}>{linkItem.description}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
