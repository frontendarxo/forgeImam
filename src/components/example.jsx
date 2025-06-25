import React from "react";
import { useEffect, useLayoutEffect, useState } from 'react';

export default function TestComponent() {
    const [count, setCount] = useState(0)
    console.log('🔵 render');

    function handleClick() {
        setCount(prev => prev + 1)
    }

    useLayoutEffect(() => {
        console.log('🟡 useLayoutEffect');

        return () => { 
            console.log('🟠 cleanup useLayoutEffect');
        };
    }, [count]);

    useEffect(() => {
        console.log('🟢 useEffect');

        return () => {
            console.log('🔴 cleanup useEffect');
        };
    }, []);

    useEffect(() => {
        console.log('🟢 useEffect2');

        return () => {
            console.log('🔴 cleanup useEffect2');
        };
    }, [count]);

    return <div onClick={handleClick}>{count}</div>;
}
//🟡 useLayoutEffect 🔵 render 🟢 useEffect 🟢 useEffect2 🔴 cleanup useEffect2 🔴 cleanup useEffect 🟠 cleanup useLayoutEffect