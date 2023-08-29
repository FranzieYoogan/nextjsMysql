import Image from 'next/image'
import App from 'next/app'

import { PrismaClient } from '@prisma/client'

  export default async function Home() {

const prisma = new PrismaClient()

 

const posts = await prisma.posts.findMany({
  where: {
  id: 1,
  },
})

console.log(posts);




  
  return (
    <>
   {posts.map((post) => {

return <h1>{post.title}</h1>
   })}
 

    
    </> 
  )
}
