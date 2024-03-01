import Link from "next/link";
import logo from '../assets/logo.png'
import style from '../components/main-header.module.css'
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

import NavLink from "./nav-link";

export default function Mainheader()
{
    return(
        <>
        <MainHeaderBackground/>
        <header className={style.header}>
            <Link href="/" className={style.logo}><Image src={logo} alt="A plate with food on it"/>
                NextLevel Food
            </Link>
        
        <nav className={style.nav}>
            <ul>
            <li><NavLink href="/meals">Browse Meals</NavLink></li>
            {/* For nested path we use startsWith */}
            <li><NavLink href="/community">Foodies Community</NavLink></li>
            {/* As there are no nested path.So we could do it like if path===/community then classes.active */}
            </ul>
        </nav>

        </header>

        </>
    )
}