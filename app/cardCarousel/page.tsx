import { PrismaClient } from "@prisma/client";
import styles from './cardCarousel.module.css'
export default async function CardCarousel() {
    const prisma = new PrismaClient()

 

    const posts = await prisma.posts.findMany({
      where: {
      id: 1,
      },
    })
    
    console.log(posts);
    
    return(

        <>
         {posts.map((post) => {
            return  <section>

                <h1>{post.title}</h1>
                <img className={`${styles.img}`} src={post.image}></img>
                
                </section>
         })}
        </>

    )

}