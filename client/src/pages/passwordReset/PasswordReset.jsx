import { useState } from 'react';
import './passwordReset.css';
import { updatePlayer } from '../../features/fetchLocalApi';
import { useNavigate } from 'react-router-dom';
function PasswordReset() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleUpdate = async (e) => {
        e.preventDefault();
        let updateInfos = { email, password, confirmPassword }
        await updatePlayer(updateInfos).then((action) => {
            console.log(action)
            if (action) {
                setEmail('')
                setPassword('')
                setConfirmPassword('')
                navigate('/login')
            } else {
                console.log('error')
            }
        });
    }
    return (
        <section className='passwordReset'>
            <form>
                <h2>Récupérer votre mot de passe</h2>
                <div className="pseudo" >
                    <label>Email</label>
                    <input
                        type="text"
                        placeholder="Entrez votre pseudo"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="password" >
                    <label>Nouveau mot de passe</label>
                    <input
                        type="password"
                        placeholder="Entrez votre mot de passe"
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
                <button type="submit" onClick={handleUpdate}>
                    Changer
                </button>
            </form>
        </section>
    )
}

export default PasswordReset