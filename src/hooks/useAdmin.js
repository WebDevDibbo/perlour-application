import React, { useEffect, useState } from 'react';

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [isAdminLoading,setAdminLoading] = useState(true);
    useEffect(()=>{
if(email){
    fetch(`https://perlour-app-server.vercel.app/users/admin/${email}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    setIsAdmin(data.isAdmin)
    })
}
    },[email])
    return [isAdmin,isAdminLoading]
};

export default useAdmin;