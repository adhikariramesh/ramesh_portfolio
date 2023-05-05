import Link from "next/link"

const Nav = () => {
  return (
    <nav className="navbar">
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
