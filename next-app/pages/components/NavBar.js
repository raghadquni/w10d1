import Link from "next/link";
import styles from './../../styles/NavBar.module.css'
import Image from 'next/image'


const NavBar = () => {
    return ( 
        <>
        <ul className={styles.navbar}>
            <Image src= "/images2.png" height={80} width={120}></Image>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/contact"><li>Contact</li></Link>
            <Link href="/posts"><li>Posts</li></Link>
        </ul>
        </>
     );
}
 
export default NavBar;