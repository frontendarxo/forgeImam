import { Nav } from "./nav";
import './header.css'
import { Hero } from "../../components/hero/hero";

export function Header() {
    return (
        <header className="header">
            <Nav />
            <Hero />
        </header>

    )
}