import { PrismaClient } from "@prisma/client"
import { GetStaticProps } from "next"
import { use } from "react"
export default function GetServerSideProps() {
    
    const prisma = new PrismaClient()

    const posts = use(prisma.posts.findMany())


    
}