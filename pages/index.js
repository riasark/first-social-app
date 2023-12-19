import Card from "../components/Card"

export default function Home() {
  return (
    <>
    <h1> Your Feed </h1>
    <div className="flex ml-10 mt-4 mx-auto gap-4">
      <div className="w-1/3">
      <Card>
          Navigation
            <div className="mt-5">
              Your Feed
            </div>
            <div className="mt-5">
              Your Ideas
            </div>
            <div className="mt-5">
              Drafts
            </div>
            <div className="mt-5">
              Posts
            </div>
        </Card>
      </div>
      <div className="postcard">
        <Card>
          <form className="textcard">
            <input className="textinput" type="text" placeholder="Write your next big idea...">
            </input>
          </form>
        </Card>
      </div>
    </div>
    </>
  )
}
