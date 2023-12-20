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
                    100
                  </div>
                  <div className="entry">
                    This is what I want to say and there is so much to say and I am just trying to test out what it looks like when there is more than it can handle
                    <div className="authorname">
                      authorname
                    </div>
                  </div>
              </div>
            </Card>
      </div>
    </div>
    </>
    )
}