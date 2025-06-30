import { useState } from 'react';
import './productCard.css';
import { ProductCard } from './productCard';

export function ProductCards() {
    // eslint-disable-next-line no-unused-vars
    const [productData, setProductData] = useState([
        { price: 9800, time: '30 дней', name: 'Персональная тренировака + Диета' },
        { price: 18600, time: '90 дней', name: 'Связь со мной и поддержка' },
    ]);

    return (
        <section className="product-cards" id='product'>
            <h4 className="second-title">Меняйся сейчас - добейся цели</h4>
            {
                <div className="product-cards__content">
                    {productData.map((product) => {
                        return (
                            <ProductCard
                                price={product.price}
                                name={product.name}
                                time={product.time}
                            />
                        );
                    })}
                </div>
            }
        </section>
    );
}
