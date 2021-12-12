import Link from "next/link"

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()

    return {
        props : { posts : data }
    }
}


const Posts = ({posts}) => {

    return ( 
    <>
    <h1> Posts </h1>
    <style jsx> {`
        h1 {
            color: black;
            display: flex;
            justify-content: center;
            margin-bottom: 3rem
        }`
    }
        </style>

    { posts.map((post) => 
    <Link href={`/posts/${post.id}`}>
    <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
    </div>
    </Link>
    )}
    </>
    );
}
 
export default Posts;