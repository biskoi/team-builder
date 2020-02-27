import React from 'react';
import styled from 'styled-components';

const Member = styled.div`
border: solid black 2px;
margin: 2%;
`;

export default function MemberList(props) {

    const click = (item) => {
        props.setEdit(item);
    }


    return (
        <div>
            {props.members.map((item, index) => (
                <Member key = {index}>
                <p>{`Name: ${item.name}`}</p>
                <p>{`Email: ${item.email}`}</p>
                <p>{`Role: ${item.role}`}</p>
                <p>{`ID: ${index}`}</p>
                <button onClick = {() => click(item)}>Edit</button>
                </Member>
            ))}
        </div>
    )
}