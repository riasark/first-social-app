import Navigation from "@/components/navbar";
import Formpost from "@/components/formpost";

export default function Land(){
    return(
    <>
        <h1> Your Feed</h1>
        <div className="flex ml-10 mt-4 max-w-4xl mx-auto gap-4">
        <div className="w-1/3">
            <Navigation></Navigation>
        </div>
        <div className="postcard">
            <Formpost></Formpost>
        </div>
        </div>
    </>
    )
}