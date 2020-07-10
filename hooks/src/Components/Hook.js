import React, { useState, useEffect } from 'react';

const Hook = () => {

    const [name, setName] = useState('Tanvir');
    const [count, setCount] =useState(0);

    useEffect(()=>{
        console.log('hello')
    }, [count, name])

    return (
        <div>
            <p>{ name }</p>
            <button onClick={ () => setName('moon') }>click me</button>

            <p>{ count }</p>
            <button onClick={ () => setCount(count + 1)}> click me to increament count</button>

        </div>
    );
}

export default Hook;