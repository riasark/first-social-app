import Navigation from "@/components/navbar"
import Card from "@/components/Card"

export default function Drafts(){
    return (
        <>
        <h1> Drafts </h1>
        <div className="flex gap-10">
            <div className="ml-10">
                <div className="nav">
                    <Navigation></Navigation>
                </div>
            </div>
             <div className="colright">
                <Card>

                </Card>
             </div>
             <div className="colleft">
                <Card>

                </Card>
             </div>
        </div>
    </>
    )
}

