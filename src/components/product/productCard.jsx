import { Button } from "../button/startButton";

export function ProductCard({ name, price, time }) {
    return (
        <div className="product-card__content">
            <h5 className="product-cards__title">{name}</h5>
            <span className="about__progress">
                <strong>{price}₽</strong>{time}
            </span>
            <div className="product-cards__descr paragraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni saepe.
            </div>
            <Button />
        </div>
    );
}
