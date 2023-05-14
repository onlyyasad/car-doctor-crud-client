import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { BsHandbag, BsSearch } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { FiPower } from "react-icons/fi";
import { IoMdLogIn } from "react-icons/io";
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () =>{
        logOut()
        .then()
        .catch()
    }

    const navitems = <>
        <li><Link>Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Blog</Link></li>
        <li><Link>Services</Link></li>
        <li><Link>Contact</Link></li>
        {user && <li><Link to='/bookings'>My Bookings</Link></li>}

    </>
    return (
        <div className="navbar max-w-6xl mx-auto px-4 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navitems}
                    </ul>
                </div>
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navitems}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='flex justify-between items-center gap-6'>
                    {user? <>
                        <Link><FaRegUserCircle title={user?.displayName} className='text-orange-600'/></Link>
                        <Link><FiPower onClick={handleLogout} title='Logout' className='text-orange-600'/></Link>
                    </> : <Link to="/login"><IoMdLogIn title='Login'/></Link>}
                    <Link><BsHandbag /></Link>
                    <Link><BsSearch /></Link>
                    <button className="btn btn-outline normal-case border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:border-orange-600">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;