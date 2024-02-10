import { useState } from "react";
import Navigation from "@/components/navbar";
import Card from "@/components/Card";
import { useRouter } from "next/router";

export default function Drafts() {
  const router = useRouter();
  const [draftContent, setDraftContent] = useState("");
  const [drafts, setDrafts] = useState([]);

  const handleDraft = () => {
    if (draftContent.trim() !== "") {
      setDrafts((prevDrafts) => [...prevDrafts, draftContent]);
      setDraftContent("");
    }
  };

  const fillHome = (draftContent) => {
    router.push({
      pathname: "/home",
      query: { draftContent: draftContent },
    });
  };

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
              <textarea
                className="area"
                placeholder="Write up a draft to save for later!"
                value={draftContent}
                onChange={(e) => setDraftContent(e.target.value)}
              ></textarea>
              <button className="submit" onClick={handleDraft}>
                Draft
              </button>
            </div>
          </Card>
          {drafts.map((draft, index) => (
            <Card key={index}>
              {draft}
              <button className="draftpost" onClick={() => fillHome(draft)}>
                Post
              </button>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
