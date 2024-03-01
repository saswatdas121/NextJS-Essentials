"use client"

import { usePathname } from "next/navigation"
import style from './navlink.module.css'
import Link from 'next/link'

export default function NavLink({href,children})
{
    const path=usePathname()
    return(
        <Link href={href} className={path.startsWith(href)?style.active:undefined}>{children}</Link>
    )
}