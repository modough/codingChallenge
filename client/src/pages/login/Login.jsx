import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginPlayer } from '../../features/fetchLocalApi';
import { useState } from 'react';

function Login() {
    const [pseudo, setPseudo] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { error } = useSelector((state) =>
        state.playerReducer
    )
    const handleError = () => {
        if (error === 'Wrong password !') return 'Votre mot de passe ne correspond pas !'
        if (error === 'player not found !') return 'Utilisateur inconnu !'
    }
    const handleLogin = async (e) => {
        e.preventDefault()
        let loginInfos = { pseudo, password }
        await dispatch(loginPlayer(loginInfos)).then((action) => {
            console.log(action)
            if (action.payload) {
                setPseudo('');
                setPassword('');
                navigate('/home')
            } else {
                console.log('error')
            }
        });
    }
    return (
        <section className='login'>
            <form>
                <div className="pseudo" >
                    <label>Pseudo</label>
                    <input
                        type="text"
                        placeholder="Entrez votre pseudo"
                        value={pseudo}
                        onChange={(e) => setPseudo(e.target.value)}
                    />
                </div>
                <div className="password" >
                    <label>Mot de passe</label>
                    <input
                        type="password"
                        placeholder="Entrez votre mot de passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" onClick={handleLogin}>
                    Valider
                </button>
                <p className='errorMessage'>{handleError()}</p>
                <div>
                    <Link to='/register'>
                        <p>Pas de compte ? Inscrivez-vous</p>
                    </Link>
                    <Link to='/'>
                        <p>Récuperer votre mot de passe.</p>
                    </Link>
                </div>
            </form>
        </section>
    )
}

export default Login