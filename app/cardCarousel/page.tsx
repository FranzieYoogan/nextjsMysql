import { get } from "http";
import { PrismaClient } from "@prisma/client";
import React from "react";
import styles from './cardCarousel.module.css'
export default async function CardCarousel() {


    
    const prisma = new PrismaClient()

    const posts = await prisma.posts.findMany()
    
    
    
    return(

        <section>

 
<div className={` ${styles.divCards}`}>
    <div className={`${styles.borderCard}`}>
{posts.map((post) =>        
    <div className={`${styles.divCards2}`}>

        
    <img className={`${styles.imgStyles}`} src={post.image}></img>
    
    </div>
    )}
            

     
           
        </div>
        </div>
        </section>

    )

}