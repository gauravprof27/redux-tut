import React from 'react';

const User = (props) => {
    console.warn(props.data.name);
    const {data} = props;
    return (
        <div>
            <h1>User Component</h1>
            <p>{data.name}</p>
            <p>{data.age}</p>
        </div>
    )
} 

export default User;