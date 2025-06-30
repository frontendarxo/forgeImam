import './main.css'
import { AboutProgamm } from "../../components/program/program";
import { AboutMe } from '../../components/aboutMe/aboutMe';
import { ProductCards } from '../../components/product/productCards';


export function Main() {
    return (
        <main className="main">
            <AboutMe />
            <AboutProgamm />
            <ProductCards />
        </main>
    )
}