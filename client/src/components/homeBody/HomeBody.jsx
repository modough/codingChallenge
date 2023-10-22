import './homeBody.css';
import { cardData, quizCardData } from '../../data/cardData';
import Card from '../card/Card';
import PropTypes from 'prop-types';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Video from '../video/Video';
import vsc1 from '../../assets/vsc6.png'
import vsc2 from '../../assets/vsc2.webp'
import vsc3 from '../../assets/vsc4.avif'
import QuizCard from '../quizCard/QuizCard';
import { videoData } from '../../data/videoData';


function HomeBody({ toggle, show }) {

    return (
        <main className={`home-body ${toggle ? 'toggle' : ''} ${show ? 'show' : ''}`}>
            <section className='flag'>
                <div className='blur'></div>
                <div className='flagContainer'>
                    <div className='flagText'>
                        <h2>A votre rythme étapes par étapes</h2>
                        <p>Suivre les cours, regarder les tutos puis passer les quiz !</p>
                    </div>

                    <div className='flagImg'>
                        <img className='vsc1' src={vsc1} alt="" />
                        <img className='vsc3' src={vsc3} alt="" />
                        <img className='vsc2' src={vsc2} alt="" />
                    </div>
                </div>
            </section>
            <div className='homeCard'>
                <div className='home-body-card first'>
                    <h2>JavaScript, HTML, CSS, SQL, TypeScript <strong>...</strong></h2>
                    <p>Choisissez le cours que vous souhaitez, peaufiné specialement par des experts du dev pour vous permettre une meilleure compréhension.</p>
                </div>
                {cardData.map((data) => (
                    <Card
                        key={data.title}
                        img={data.img}
                        text={data.text}
                        title={data.title}
                    />
                ))}

            </div>
            <div className='homeVideo'>
                <h2>Parcourez la liste des videos ...</h2>
                <div className='homeVideo-container'>
                    <Carousel infiniteLoop showThumbs={false}>
                        {videoData?.map((video) => <Video key={video.id} title={video.name} embedId={video?.id} description={video.desc} />)}
                    </Carousel>
                </div>
            </div>
            <div className='homeQuiz'>
                <h2>Prêt à passer le quiz ?</h2>
                <div className='homeQuiz-container'>
                    {quizCardData.map((data) => <QuizCard
                        key={data.question}
                        question={data.question}
                        choices={data.choices}
                        answer={data.correctAnswer}
                    />
                    )}
                </div>
            </div>
        </main>
    )
}

HomeBody.propTypes = {
    show: PropTypes.bool,
    toggle: PropTypes.bool
}
export default HomeBody