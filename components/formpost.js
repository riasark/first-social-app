import Card from "../components/Card";
import Navigation from "../components/navbar";
import { useEffect, useState } from "react";

export default function Formpost({initialContent}){
  const [content, setContent] = useState("");
  useEffect(() => {
      if (initialContent) {
          setContent(initialContent);
      }
  }, [initialContent]);
  const handleChange = (event) => {
      setContent(event.target.value);
  }
  
  return(
        <>
        <Card>
          <div className="card">
            <textarea className="area" placeholder="Release your next idea into the world..." value={content} onChange={handleChange}></textarea>
            <button className="submit">
              Submit
            </button>
          </div>
        </Card>
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
                    This is what I want to say and there is so much to say and I am just trying to test out what it looks like when there is more than it can handle, does it expand into something more?
                    <div className="authorname">
                      authorname
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