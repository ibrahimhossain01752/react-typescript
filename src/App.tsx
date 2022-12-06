import React from 'react';
import './App.css';
import User from './components/User';

const user1 = {
  name:"Ibrahim Hossain" ,
  age:23 ,
  isRegistered:true ,
  lang:["Bangla", "English"]
}

function App() {
  return (
    <div className="App">
     <h1>User Management</h1>
     <User user={user1} />
     
    </div>
  );
}

export default App;
