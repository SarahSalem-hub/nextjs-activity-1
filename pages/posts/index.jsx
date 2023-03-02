import React from 'react'
import Link from 'next/link';

const posts = ({posts}) => {
    // console.log(posts.posts);
  return (
    <div>
        {
            posts.posts.map((post)=>{
               return <div>
                 <h1>{post.title}</h1>
                 <p>{post.title}</p>
                 <Link href={`posts/${post.id}`}>Read More</Link>
               </div>

            })
        }
    </div>
  )
}
export async function getStaticProps(){
    const res = await fetch('https://dummyjson.com/posts')
  const posts = await res.json()

  return{
    props:{
        posts,
    },
  }
}
export default posts