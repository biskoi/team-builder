import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Form.js';
import MemberList from './MemberList';

function App() {

  const [members, setMembers] = useState([{
    name: 'biskoi',
    email: 'biskoi@daydream.cafe',
    role: 'Dev'
    }]);

  const [memberEdit, setMemberEdit] = useState({});

useEffect(() => {
  console.log(`Editing ${memberEdit.name}`);
}, [memberEdit]);

  const addMember = person => {
    const newMember = {
      id: Date.now(),
      name: person.name,
      email: person.email,
      role: person.role
    }

    setMembers([...members, newMember]);
  }

  const setEdit = item => {
    setMemberEdit(item);
  }

  return (
    <div className="App">
    <Form addMember = {addMember} toEdit = {memberEdit}/>
    <MemberList members = {members} setEdit = {setEdit}/>
    </div>
  );
}

export default App;
