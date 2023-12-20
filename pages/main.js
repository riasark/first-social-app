import Navigation from "@/components/navbar"
import Card from "@/components/Card"

export default function Main(){
    return(
        <>
    <h1> Main Page </h1>
    <div className="flex ml-10 mt-4 max-w-4xl mx-auto gap-4">
      <div className="w-1/3">
        <Navigation></Navigation>
      </div>
      <div className="w-2/3 ">
            <Card>
              <div className="flex">
                <div className="flex mr-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-7 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                    </svg>
                    24
                  </div>
                  <div className="entry">
                    This is someone elses entry and it is on your feed
                    <div className="authorname">
                      otherauthorname
                    </div>
                    <div className="text-right">
                      <button className="px-4 upvote">
                        Vote
                      </button>
                  </div>
                  </div>
              </div>
            </Card>
      </div>
    </div>
    </>
    )
}