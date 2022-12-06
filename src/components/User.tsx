import React from 'react';

type UserProps = {
     user: {
        name: string;
        age: number;
        isRegistered: boolean;
        lang: string[];
    }
}

const User = ({user}: UserProps) => {
    return (
        <div>
            <h4>{user.name}</h4>
            <p>{user.age}</p>
           {user.isRegistered? <p>Registered User</p>:<p>Not Registered User</p>}
           <p>
            {user.lang.map((language, index)=>{
                return <span key={index}>{language} </span>
            })}
           </p>
        </div>
    );
};

export default User;