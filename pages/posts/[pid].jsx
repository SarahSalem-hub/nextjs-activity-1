import React from "react";

const post = ({post}) => {
  return <div>{post.title}</div>;
};

export default post;

export async function getStaticPaths() {
  const res = await fetch(`https://dummyjson.com/posts/`);
  const posts = await res.json();

  const paths = posts.posts.map((post) => ({
    params: { pid: post.id.toString() },
  }));
  
  return { paths, fallback: false };
}

export async function getStaticProps({params}){
    const res = await fetch(`https://dummyjson.com/posts/${params.pid}`);
    const post = await res.json()
    console.log(post);

    return{
        props:{
            post
        }
    }
}
