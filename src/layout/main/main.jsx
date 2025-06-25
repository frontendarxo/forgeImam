import './main.css'
import { AboutProgamm } from "../../components/about/about";


export function Main() {
    return (
        <main className="main">
            <AboutProgamm />
            <section className="service"></section>
            <section className="clients"></section>
            <section className="contacts"></section>
        </main>
    )
}