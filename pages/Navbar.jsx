import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    
        <nav>
            <ul>
            <Link href="/">Home</Link>
            <Link href="/posts">Posts</Link>
            <Link href="/about">About</Link>
        </ul>
        </nav>
   
  )
}

export default Navbar