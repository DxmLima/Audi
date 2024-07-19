import Link from "next/link"

export default function Menu() {
    return (
        <>
            <ul className="navigation">
                <li className="active menu-item"><Link href="#">Home</Link>
                   </li>
                <li className="menu-item"><Link href="#">Projeto</Link></li>
                <li className="menu-item"><Link href="#">API Mercado Pago</Link></li>
            </ul>
        </>
    )
}
