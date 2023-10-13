
import { Link } from 'react-router-dom';
import './register.css';

function Register() {
    return (
        <section className='register'>
            <form>
                <div className="email" >
                    <label>Email</label>
                    <input type="email" placeholder="Entrez votre email" />
                </div>
                <div className="password" >
                    <label>Mot de passe</label>
                    <input type="password" placeholder="Entrer votre mot de passe" />
                </div>
                <div className="password" >
                    <label>Confirmer mot de passe</label>
                    <input type="password" placeholder="Enter password" />
                </div>
                <button type="submit">
                    Submit
                </button>
                <Link to='/login'>
                    <p>Déjà inscrit ? Connectez-vous.</p>
                </Link>
            </form>
        </section>
    )
}

export default Register