import Link from "next/link"

export default function Menu() {
    return (
        <>
            <ul className="navigation">
                <li className="active menu-item"><Link href="#">Home</Link>
                   </li>
                <li className="menu-item"><Link href="/Galeria">Galeria</Link></li>
                <li className="menu-item"><Link href="/Tech">Tech</Link></li>
                <li className="menu-item"><Link href="/Models">Modelos</Link></li>
                <li className="menu-item"><Link href="/CaseStudy">Case Study</Link></li>
            </ul>
        </>
    )
}
