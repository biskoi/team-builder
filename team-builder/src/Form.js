import React, {useState} from 'react';
import styled from 'styled-components';

const SForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-bottom: 3%;
`;

export default function Form(props) {

    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    });

    const textHandler = e => {
        setMember({...member, [e.target.name]: e.target.value});
        console.log(member);
    }

    const submitHandler = e => {
        e.preventDefault();
        props.addMember(member);
        setMember({
            name: '',
            email: '',
            role: ''
        });
        console.log(`Submitted ${member.name}`);
    }


    return (
        <SForm onSubmit = {submitHandler}>
            <p>Add Member</p>
            <label htmlFor = 'name'>Name</label>
            <input htmlFor = 'name' value = {member.name} onChange = {textHandler} name = 'name'></input>
            <label htmlFor = 'email'>Email</label>
            <input htmlFor = 'email' value = {member.email} onChange = {textHandler} name = 'email'></input>
            <label htmlFor = 'role'>Role</label>
            <input htmlFor = 'role' value = {member.role} onChange = {textHandler} name = 'role'></input>
            <button type = 'submit'>Submit</button>
        </SForm>
    )
}