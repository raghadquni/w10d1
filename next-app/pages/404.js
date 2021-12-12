import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
    const router = useRouter()
    const goBack = () => {
        router.back()
    }

    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 3000)
    }, [])

    return ( 
    <>
    <h1> PAGE NOT FOUND :( </h1>
    <p>You will be re-directed in 3 sec</p>
    <button onClick={goBack}>Go Back </button>
    <style jsx> {`
        h1 {
            color: black;
            display: flex;
            justify-content: center;
        }
        button {
            border-radius: 0.5rem ;
            margin-left: 47%
        }

        p {
            color: black;
            display: flex;
            justify-content: center;
            font-size: 1.2rem
        }
        `
    }
        </style>
    </>
    );
}
 
export default NotFound;