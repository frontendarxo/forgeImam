import './aboutMe.css'
import ReactPlayer from 'react-player'
import Video from '../../assets/video/holderVideo.mp4'

export function AboutMe() {
    return (
        <section className="about-me" id='about-me'>
            <div className="about-me__video">
                <ReactPlayer src={Video} controls={true} width={"100%"} height={"auto"} />
            </div>
            <div className="about-me__text">
                <h4 className="about-me__title second-title">Кем я являюсь?</h4>
                <p className="about-me__paragr paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia nobis quo, odio iusto laboriosam in, saepe quia iure ad ex tempora illum cum incidunt pariatur officiis nihil autem libero itaque.</p>
                <div className="about__progresses">
                    <span className="about__progress"><strong>10</strong>лет живу спортом</span>
                    <span className="about__progress"><strong>100+</strong>Хороших отзывов</span>
                    <span className="about__progress"><strong>15</strong>Сертифа</span>
                </div>
            </div>
        </section>
    )
}