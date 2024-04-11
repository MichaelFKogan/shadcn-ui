

export function CardExtension({data}) {

    return (
        <>
                    {data.map((item, index) => (
                        <a href={item.url} target="_blank">
                        <div className="card bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-4 py-4 shadow transition-all hover:shadow-lg">
                            <div className="flex w-full space-x-6">
                            <div className="relative h-[50px] min-w-[50px] w-[50px] rounded-md overflow-hidden scale-100 transition-all">
                                <img alt={item.title} loading="lazy" decoding="async" data-nimg="fill" className="bg-surface-100" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", color: "transparent" }} sizes="100vw" src={"/images/" + item.image} />
                            </div>
                            <div className="card__text-wrapper">
                                <h3 className="text-foreground-light group-hover:text-foreground mb-2 text-xl transition-colors">{item.title}</h3>
                                <p className="text-foreground-lighter text-sm line-clamp-4 min-h-[50px] h-[58px]" title={item.description}>{item.description}</p>
                            </div>
                            </div>
                        </div>
                        </a>
                    ))}
        </>

    )
}

export default CardExtension;