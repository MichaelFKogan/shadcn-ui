import '../styles/cardcomponent.css'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


const CardComponentWrapHorizontal = ({heading, data}) => {
    return (
        <>

            <Card>
                <CardHeader>
                    <CardTitle>
                        {heading}
                    </CardTitle>
                    {/* <CardDescription>{description}</CardDescription> */}
                </CardHeader>
                <CardContent>
                    {data.map((item, index) => (
                        <div className="card w-[25%] flex items-center space-x-4 rounded-md border p-2">
                            <div className="flex-1 space-y-1">
                                <div className="flex items-center">
                                    <img src={"https://www.google.com/s2/favicons?domain="+ item.favicon +"&sz=256"} style={{height:"25px", marginRight:"5px"}}/>
                                    <p className="text-sm font-medium leading-none">
                                        {item.title}
                                    </p>
                                </div>
                                <p className="card__description text-sm text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </CardContent>
                {/* <CardFooter>
                    <p>{footer}</p>
                </CardFooter> */}
            </Card>

        </>
    );
};

export default CardComponentWrapHorizontal;