import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './contexts/UserContext';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    // console.log(user);

    const handleSignout = () => {
        logOut()
        .then( () => {

        })
        .catch(error => {
            console.error(error);
        })
    }



    return (
        <div>
         
                <div className="navbar bg-primary text-primary-content">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Awesome UI</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='home'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                {
                    user?.email ?
                    <button onClick={handleSignout} className='btn btn-sm'>Log Out</button>
                    : <Link to='/login'>Log In</Link>
                }
                {user?.email && <span>Welcome, {user.email}</span>}
                </div>
               
        </div>
    );
};

export default Header;