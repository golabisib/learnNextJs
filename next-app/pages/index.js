import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter();

    const clickHandler = () => {
        // Logging process successful
        router.push("/users")
    }
  return (
    <div className={styles.container}>
     <h1>Golabi.ir</h1>
     <ul>
        <li>
            <Link href="/courses" >Go to Courses Page</Link>
        </li>
        <li>
            <Link href="/users">Go to Users Page</Link>
        </li>
        <li>
            <button onClick={clickHandler}>Log in</button>
        </li>

     </ul>
    </div>
  )
}
