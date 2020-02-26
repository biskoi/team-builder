import React from 'react';
import styled from 'styled-components';

const Member = styled.div`
border: solid black 2px;
`;

export default function MemberList(props) {


    return (
        <div>
            {props.members.map((item, index) => (
                <Member key = {index}>
                <p>{`Name: ${item.name}`}</p>
                <p>{`Email: ${item.email}`}</p>
                <p>{`Role: ${item.role}`}</p>
                </Member>
            ))}
        </div>
    )
}