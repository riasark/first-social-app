import { Form } from "react-bootstrap"
import Navigation from "../components/navbar"
import Formpost from "@/components/formpost"

export default function Home() {
  return (
    <>
    <h1> Your Feed</h1>
    <div className="flex ml-10 mt-4 mx-auto gap-4">
      <div className="w-1/3">
        <Navigation></Navigation>
      </div>
      <div className="postcard">
        <Formpost></Formpost>
      </div>
    </div>
    </>
  )
}
