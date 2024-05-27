import { useState } from 'react';
import Context from './Context';

const Store = (props) => {
    const [mode, setMode] = useState('light');

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#333';
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
        }
    };

    return <Context.Provider value={{ mode, toggleMode }}>{props.children}</Context.Provider>;
};

export default Store;
