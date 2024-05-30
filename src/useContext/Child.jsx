import React, { useContext } from 'react'
import { ContextData } from './Home'
import Table from './Table'



function Child() {
    const data = useContext(ContextData)

    return (
        <div>
            <Table data={data} />
        </div>
    )
}

export default Child