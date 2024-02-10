import Navigation from "@/components/navbar";
import Formpost from "@/components/formpost";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Land(){
    const router = useRouter();
    const[draftContent, setDraftContent] = useState("");
    useEffect(() => {
        const {draftContent} = router.query;
        if (draftContent) {
            setDraftContent(draftContent)
        }
    }, [router.query])
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
                    <Formpost initialContent={draftContent}></Formpost>
                </div>
        </div>
    </>
    )
}
