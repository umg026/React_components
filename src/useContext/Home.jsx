import React, { createContext } from 'react'
import Child from './Child';
import useData from './useData';

const ContextData = createContext(null)

function Home() {
    const { data } = useData();

    return (
        <>
            <ContextData.Provider value={data}>
                <Child />
            </ContextData.Provider>
        </>
    )
}

export default Home;
export { ContextData };