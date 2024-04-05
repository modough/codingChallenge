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
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleError = () => {
        if (error === 'Player already exists') return 'Utilisateur déjà existant !'
        if (error === 'Must be a valid email...') return "Renseigner un valide email !"
        if (error === 'all fields are required...') return 'Veuillez remplir tous les champs !'
        if (error === 'Must be a strong password...') return "Ce mot de passe doit avoir plus de 8 caractéres, une majuscule, un caractère spécial (@*$'%) et des chiffres."
        if (error === 'password and confirm password does not match') return 'Veuillez confirmer le mot de passe !'
    }
    const handleRegister = async (e) => {
        e.preventDefault()
        let registerInfos = { email, password, pseudo, confirmPassword }
        await dispatch(registerPlayer(registerInfos))
            .then((action) => {
                console.log(action)
                setError(action.payload.error)
                if (action.payload.body) {
                    setPseudo('');
                    setEmail('');
                    setPassword('');
                    setConfirmPassword('');
                    setShowModal(true);
                }
            })
            .catch((err) => {
                console.log(err)

            });

    }
    return (
        <section className='register'>
            <div className={showModal ? 'blur' : ''}>
                <form className={showModal ? 'none' : ''}>
                    <h2>Inscription</h2>
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
                    <p className='errorMessage'>{handleError()}</p>
                    <button type="submit" onClick={handleRegister}>
                        Valider
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