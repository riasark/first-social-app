import Navigation from "@/components/navbar"
import Card from "@/components/Card"
import { useRouter } from "next/navigation"

export default function Drafts(){
    const router = useRouter();
    const fillMain = () => {
        router.push('./main')
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
             <div className="colright" >
                <Card>
                    Hello this is a draft
                    <button className="draftpost">
                        Post
                    </button>
                </Card>
             </div>
             <div className="colleft">
                <Card>
                    Hello this is another draft and I just want to write something even larger in here to see what could possibly happen if we were to push this textbox to the boundaries of what it can hold. I think there is a Lor Ipsum something that can be found on the internet but im too lazy to go looking for it!
                    <button className="draftpost">
                        Post
                    </button>
                </Card>
             </div>
        </div>
    </>
    )
}

