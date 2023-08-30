import styles from './footer.module.css'
import Link from 'next/link'

export default function Footer() {

    return(

        

        


<footer className={` ${styles.footerStyles}`}>
 
      
   
        <span className={`block text-sm  sm:text-center  ${styles.spanFooter1}`}>© 2023 <Link href="https://github.com/FranzieYoogan" className={`hover:underline ${styles.spanFooter2}`}>GAMESBLOG™</Link>. All Rights Reserved.</span>
 
</footer>







        

    )

}