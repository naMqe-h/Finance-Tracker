import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { useLogout } from '../hooks/useLogout'

export default function Navbar() {
    const { logout } = useLogout()

    return (
        <nav className={styles.navbar} >
            <ul>
                <li className={styles.title}>Finance tracker</li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/signup'>Signup</Link></li>
                <li><buttn className="btn" onClick={logout} >Logout</buttn></li>
            </ul>
        </nav>
    )
}
