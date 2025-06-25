import { useState } from 'react'
import './about.css'

export function About() {

    const [after, setAfter] = useState(false)

    function afterChangeToggle() {
        setAfter(!after)
    }

    return (
        <section className="about" id='about'>
            <div className="about__media">
                {
                    !after ? 
                    <figcaption className='about__before' onClick={afterChangeToggle}>
                        <img src="https://imgholder.ru/600x300/8493a8/adb9ca&text=Before+After+Effect&font=kelson" alt="before" />
                        <figure>Before</figure>
                    </figcaption> 
                :   
                    <figcaption className='about__after' onClick={afterChangeToggle}>
                            <img src="https://imgholder.ru/600x300/8493a8/adb9ca&text=Before+After+Effect&font=kelson" alt="before" />
                            <figure>after</figure>
                    </figcaption>
                }
                
            </div>
            <div className="about__text">
                <h4 className="about__title">Who is Me?</h4>
                <p className="about__paragr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia nobis quo, odio iusto laboriosam in, saepe quia iure ad ex tempora illum cum incidunt pariatur officiis nihil autem libero itaque.</p>
                <div className="about__progresses">
                    <span className="about__progress"><strong>100+</strong>Years in sport</span>
                    <span className="about__progress"><strong>100+</strong>Years in sport</span>
                    <span className="about__progress"><strong>100+</strong>Years in sport</span>
                </div>
            </div>
        </section>
    )
}