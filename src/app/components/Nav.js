'use client';
import {useState} from "react";

import Link from "next/link";
import { inter, lora, sourceCodePro400, sourceCodePro700 } from "../styles/fonts";
import {HiXMark} from "react-icons/hi2";
import {AiOutlineMenu} from "react-icons/ai";
const Nav = () => {
  const [showMenuIcon, setShowMenuIcon] = useState(false);

  const handleCloseMenu = () =>{
    const mainNav = document.querySelector(".main-nav");
    setShowMenuIcon(false);
    mainNav.style.display = "none";
    mainNav.style.transform = "translateX(110%)";
    mainNav.style.opacity = "0";
    mainNav.style.visibility = "hidden";
    mainNav.style.transition = "all 0.3s ease";
  }

  const handleOpenMenu = () =>{
    setShowMenuIcon(true);
    const mainNav = document.querySelector(".main-nav");
    mainNav.style.display = "flex";
    mainNav.style.transform = "translateX(0%)";
    mainNav.style.opacity = "1";
    mainNav.style.visibility = "visible";
    mainNav.style.transition = "all 0.3s ease";

  }
  return (
    <nav className={sourceCodePro400.className}>
       <div className="menu">
       {!showMenuIcon && <AiOutlineMenu onClick={handleOpenMenu}/>}
       {showMenuIcon && <HiXMark onClick={handleCloseMenu}/>}
      </div>
      <ul className="main-nav">
        <li><Link href="/" className="nav-links">home</Link></li>
        <li><Link href="/about" className="nav-links">about</Link></li>
        <li><Link href="/portfolio" className="nav-links">portfolio</Link></li>
        <li><Link href="/contact" className="nav-links">contact</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
