import {Link} from 'react-router-dom'
import './index.css'

const Navbar=()=>(
    <nav className="navContainer">
        <ul className='navList'>
            <Link to='/'  className='navLink'><li className='navItem'>Random Jokes</li></Link>
            <Link to='/userprofile' className='navLink'><li className='navItem'>User profile</li></Link>
            <Link to='/clock' className='navLink'><li className='navItem'>Clock</li></Link>
        </ul>
    </nav>
)

export default Navbar