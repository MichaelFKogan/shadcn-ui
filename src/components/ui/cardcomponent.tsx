import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


const CardComponent = ({title, description, content, footer}) => {
    return (
        <>

            <Card>
                <CardHeader>
                    <CardTitle>
                        <div className="flex">
                            <img src={"https://www.google.com/s2/favicons?domain=https://www.google.com&sz=256"} style={{height:"25px", marginRight:"5px"}}/>
                            {title}
                        </div>
                    </CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>{content}</p>
                </CardContent>
                <CardFooter>
                    <p>{footer}</p>
                </CardFooter>
            </Card>

        </>
    );
};

export default CardComponent;