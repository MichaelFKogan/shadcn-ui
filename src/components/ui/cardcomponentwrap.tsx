import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


const CardComponentWrap = ({heading, title, description, content, footer}) => {
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
                    <div className=" flex items-center space-x-4 rounded-md border p-4 mb-2">
                        <div className="flex-1 space-y-1">
                            <div className="flex items-center">
                                <img src={"https://www.google.com/s2/favicons?domain=https://www.google.com&sz=256"} style={{height:"25px", marginRight:"5px"}}/>
                                <p className="text-sm font-medium leading-none">
                                    {title}
                                </p>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                {description}
                            </p>
                        </div>
                    </div>
                    <div className=" flex items-center space-x-4 rounded-md border p-4 mb-2">
                        <div className="flex-1 space-y-1">
                            <div className="flex items-center">
                                <img src={"https://www.google.com/s2/favicons?domain=https://www.google.com&sz=256"} style={{height:"25px", marginRight:"5px"}}/>
                                <p className="text-sm font-medium leading-none">
                                    {title}
                                </p>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                {description}
                            </p>
                        </div>
                    </div>
                    <div className=" flex items-center space-x-4 rounded-md border p-4 mb-2">
                        <div className="flex-1 space-y-1">
                            <div className="flex items-center">
                                <img src={"https://www.google.com/s2/favicons?domain=https://www.google.com&sz=256"} style={{height:"25px", marginRight:"5px"}}/>
                                <p className="text-sm font-medium leading-none">
                                    {title}
                                </p>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                {description}
                            </p>
                        </div>
                    </div>
                    <div className=" flex items-center space-x-4 rounded-md border p-4 mb-2">
                        <div className="flex-1 space-y-1">
                            <div className="flex items-center">
                                <img src={"https://www.google.com/s2/favicons?domain=https://www.google.com&sz=256"} style={{height:"25px", marginRight:"5px"}}/>
                                <p className="text-sm font-medium leading-none">
                                    {title}
                                </p>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                {description}
                            </p>
                        </div>
                    </div>
                </CardContent>
                {/* <CardFooter>
                    <p>{footer}</p>
                </CardFooter> */}
            </Card>

        </>
    );
};

export default CardComponentWrap;