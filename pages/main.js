import Navigation from "@/components/navbar"
import Card from "@/components/Card"

export default function Main(){
    return(
        <>
    <h1> Your Feed </h1>
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
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    <div className="authorname">
                      De Finibus Bonorum
                    </div>
                    <div className="text-right">
                      <button className="px-4 upvote">
                        Vote
                      </button>
                  </div>
                  </div>
              </div>
            </Card>
            <Card>
              <div className="flex">
                <div className="flex mr-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-7 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                    </svg>
                    86
                  </div>
                  <div className="entry">
                  But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
                    <div className="authorname">
                      H. Rackham
                    </div>
                    <div className="text-right">
                      <button className="px-4 upvote">
                        Vote
                      </button>
                  </div>
                  </div>
              </div>
            </Card>
            <Card>
              <div className="flex">
                <div className="flex mr-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-7 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                    </svg>
                    0
                  </div>
                  <div className="entry">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                    <div className="authorname">
                      Cicero
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