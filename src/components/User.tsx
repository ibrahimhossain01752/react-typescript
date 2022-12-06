import React from 'react';

type UserProps = {name: string; age: number; isRegistered:boolean}

const User = ({name,age, isRegistered}: UserProps) => {
    return (
        <div>
            <h4>{name}</h4>
            <p>{age}</p>
           {isRegistered? <p>Registered User</p>:<p>Not Registered User</p>}
        </div>
    );
};

export default User;