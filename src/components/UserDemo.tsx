import React from 'react';

type UserDemoProps = {
    users: {
        id: number;
        name: string;
        email: string;
        age: number;
    }[]
}

const UserDemo = ({users}: UserDemoProps) => {
    return (
        <div>
            {users.map((user)=>{
                return<div>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <h2>{user.age}</h2>
                    {/* <h2>{user.name}</h2> */}
                </div>
            })}
        </div>
    );
};

export default UserDemo;