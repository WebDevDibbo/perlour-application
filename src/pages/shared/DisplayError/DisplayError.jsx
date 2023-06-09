import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { useRouteError } from 'react-router-dom';

const DisplayError = () => {
    const {logOut} = useContext(AuthContext) ;
    const error = useRouteError();
    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error => console.error(error))
    }
    return (
        <div>
            <p className="text-red-500">something went wrong</p>
           <p className='text-red-400'>{error.statusText || error.message}</p>
           <h4 className='text-3xl'>Please <button onClick={handleLogOut}>sign Out</button> and log back in</h4>
        </div>
    );
};

export default DisplayError;