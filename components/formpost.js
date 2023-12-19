import Card from "../components/Card";

export default function Formpost(){
    return(
        <>
        <Card>
          <textarea className="area" placeholder="Release your next idea into the world..."> </textarea>
        </Card>
        <button type="submit" className="btn submit">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" strokeWidth={1.5} stroke="currentColor" dataslot="icon" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        </button>
        <div className="ideas">
          <div className="idea">
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
                    This is what I want to say and there is so much to say and I am just trying to test out what it looks like when there ids more than it can handle
                    <div className="authorname">
                      aparajitasarkar
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
                    10
                  </div>
                  <div className="entry">
                    Hey guys whats up
                    <div className="authorname">
                      aparajitasarkar
                    </div>
                  </div>
              </div>
            </Card>
          </div>
        </div>
        </>
    )
}