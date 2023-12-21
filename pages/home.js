import Navigation from "@/components/navbar";
import Formpost from "@/components/formpost";

export default function Land(){
    return(
    <>
        <h1> Your Feed</h1>
        <div className="flex gap-10">
            <div className="ml-10">
                <div className="nav">
                    <Navigation></Navigation>
                </div>
            </div>
            <div className="postcard">
                    <Formpost></Formpost>
                </div>
        </div>
    </>
    )
}