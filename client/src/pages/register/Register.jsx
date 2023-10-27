import { registerPlayer } from '../../features/fetchLocalApi';
import { Link, useNavigate } from 'react-router-dom';
import './register.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from '../../components/modal/Modal';

function Register() {
    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault()
        let registerInfos = { email, password, pseudo, confirmPassword }
        await dispatch(registerPlayer(registerInfos)).then((action) => {
            console.log(action)
            if (action.payload.body) {
                setPseudo('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setShowModal(true);
            } else {
                console.log('error')
            }
        });

    }
    return (
        <section className='register'>
            <div className={showModal ? 'blur' : ''}>
                <form className={showModal ? 'none' : ''}>
                    <div className="pseudo" >
                        <label>Pseudo</label>
                        <input
                            type="text"
                            placeholder="Entrez votre pseudo"
                            value={pseudo}
                            onChange={(e) => setPseudo(e.target.value)}
                        />
                    </div>
                    <div className="email" >
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Entrez votre email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="password" >
                        <label>Mot de passe</label>
                        <input
                            type="password"
                            placeholder="Entrer votre mot de passe"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="password" >
                        <label>Confirmer mot de passe</label>
                        <input
                            type="password"
                            placeholder="Confirmer votre mot de passe"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" onClick={handleRegister}>
                        Submit
                    </button>
                    <Link to='/login'>
                        <p>Déjà inscrit ? Connectez-vous.</p>
                    </Link>
                </form>
            </div>
            {showModal &&
                <Modal
                    action={() => {
                        setShowModal(false);
                        navigate('/login');
                    }}
                    text="Merci ! Veuillez verifier votre adresse email pour valider votre inscription"
                />
            }
        </section>
    )
}

export default Register