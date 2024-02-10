import Navigation from "@/components/navbar"
import Card from "@/components/Card"
import { useRouter } from "next/router"
import { useState } from "react";

export default function Drafts(){
    const router = useRouter();
    const fillHome = (draftContent) => {
        router.push({
            pathname: '/home',
            query: { draftContent: draftContent }
        });
    }
    
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
                <div className="card">
                    <textarea className="area" placeholder="Write up a draft to save for later!"></textarea>
                    <button className="submit">
                    Draft
                    </button>
                </div>
                </Card>
                <div>
                <Card>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <button className="draftpost" onClick={() => fillHome("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}>
                        Post
                    </button>
                </Card>
                <Card>
                    One more for the giggles
                    <button className="draftpost" onClick={() => fillHome("One more for the giggles")}>
                        Post
                    </button>
                </Card>
             </div>
             </div>
        </div>
    </>
    )
}

