import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';

export default () => {
    const { value, setValue } = useContext(UserContext);
    return (
        <div>
            <h1>About</h1>
            <div>{value}</div>
            <button onClick={() => setValue('Hey')}>change value</button>
        </div>
    );
};
