import { useEffect, useState } from 'react'
import db from '../db.json';

export default function useData() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            setData(db.items)
            console.log(db.items)
        }
        catch (error) {
            throw error
        }
    }

    return { data };

}
