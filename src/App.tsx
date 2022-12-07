import React from 'react';
import './App.css';
import DataFetch from './components/DataFetch';
// import User from './components/User';
// import UserDemo from './components/UserDemo';

// const user1 = {
//   name:"Ibrahim Hossain" ,
//   age:23 ,
//   isRegistered:true ,
//   lang:["Bangla", "English"]
// }

//Array of objects
/* const users =[
  {
    id:1,
    name:"Ibrahim Hossainb",
    email:"ebu@gmail.com",
    age:22
  },
  {
    id:2,
    name:"Homyra",
    email:"homyra@gmail.com",
    age:20
  },
  {
    id:3,
    name:"Homyra",
    email:"rima@gmail.com",
    age:22
  }
] */

function App() {
  return (
    <div className="App">
     <h1>User Management</h1>
     <DataFetch status="success"/>
     {/* <User user={user1} /> */}
     {/* <UserDemo users={users} /> */}
     
    </div>
  );
}

export default App;
