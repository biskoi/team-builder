import React, {useState} from 'react';
import './App.css';
import Form from './Form.js';
import MemberList from './MemberList';

function App() {

  const [members, setMembers] = useState([{
    name: 'biskoi',
    email: 'biskoi@daydream.cafe',
    role: 'Dev'
    }]);

  const addMember = person => {
    const newMember = {
      id: Date.now(),
      name: person.name,
      email: person.email,
      role: person.role
    }

    setMembers([...members, newMember]);
  }

  return (
    <div className="App">
    <Form addMember = {addMember}/>
    <MemberList members = {members}/>
    </div>
  );
}

export default App;
