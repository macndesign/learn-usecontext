import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

export default () => {
    const { value, setValue } = useContext(UserContext);
    return (
        <div>
            <h1>Home</h1>
            <div>{value}</div>
        </div>
    );
}
