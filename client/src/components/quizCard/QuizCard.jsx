import { useState } from 'react';
import './quizCard.css';
import PropTypes from "prop-types";

function QuizCard({ question, choices, answer }) {
    const [showAnswer, setShowAnswer] = useState(false);
    const [className, setClassName] = useState('');
    const handleShowAnswer = (e) => {
        setShowAnswer(!showAnswer);
        if (e.target.innerHTML === answer) {
            setClassName('green');

        } else {
            setClassName('red');
            setTimeout(() => {
                setShowAnswer(showAnswer)
            }, 1000);
        }
    }
    return (
        <section className='quizCard'>
            <div className="quiz-card">
                <div className="question">
                    <p>{question}</p>
                </div>
                <div className="choices">
                    {choices.map((choice) => <button key={choice} className="choice" onClick={handleShowAnswer}>{choice}</button>
                    )}
                </div>
                {showAnswer && <p className={className}>{className === 'green' ? `Bonne Réponse: ${answer}` : 'Veuillez Réessayer'}</p>}
            </div>
        </section>
    )
}
QuizCard.propTypes = {
    question: PropTypes.string,
    choices: PropTypes.array,
    answer: PropTypes.string,
}
export default QuizCard