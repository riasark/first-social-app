import Card from "@/components/Card";
import { useRouter } from "next/router";

export default function Login(){
    const router = useRouter();
    
    const goMain = ()=> {
        router.push('./main')
    }

    return(
        <>
        <div className="h-screen flex items-center">
            <div className="text-center px-20 w-2/3 mx-auto py-20">
            <div className="login">
                    Login or Sign Up
                    </div>
                <Card>
                    <textarea className="username" 
                    placeholder="Username"></textarea>
                    <textarea className="password" 
                    placeholder="Password"></textarea>
                </Card>
                <div className="text-center my-5">
                    <button className="px-4 align-left logbtn" onClick={goMain}>
                            Login
                    </button>
                    <button className="ml-10 px-4 align-left signbtn">
                            Sign Up
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}