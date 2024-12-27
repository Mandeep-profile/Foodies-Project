import Link from "next/link"
import Image from "next/image"
import LogoImg from "@/assets/logo.png"
import classes from './main-header.module.css'

export default function MainHeader() {
    return <header className={classes.header}>
        <Link href="/" className={classes.logo}>
            <Image src={LogoImg} alt="A Plate with food on it" priority />
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link href="/meals">Browse Meals</Link>
                </li>
                <li>
                    <Link href="/community">Foodies Community</Link>
                </li>
            </ul>
        </nav>
    </header>
}