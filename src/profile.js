import React from 'react';
import './profile.css'

export default function MyProfile(){

    const user = {
        firstName: 'Rozs Raven',
        lastName: 'Tio'
    }
    return(

        <>
            <h1>Name: {user.firstName + " " + user.lastName}</h1>
        </>
        
    );
}
