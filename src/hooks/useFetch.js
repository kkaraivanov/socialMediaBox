import { useEffect, useState, useCallback } from 'react';
const uri = 'http://localhost:5000/api';

export const useFetch = (url = '/', method = 'GET', sendData = null) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    const getData = useCallback( async () => {
        const options = {
            method,
            headers: {
                "Content-type": "application/json;charset=UTF-8"
            }
        };
        
        try {
            const req = await fetch(uri + url, options);
            //console.log(req.status)
            if(req.status == 204) {
                setLoading(false);
            }

            if(req.status == 200) {
                const res = await req.json();
                setLoading(false);
                setData(res);
            }
            
        } catch (error) {
            
        }

        // fetch(uri + url, options)
        //     .then(res => {
        //         return res.json()
        //     })
        //     .then(data => {
        //         setLoading(false);
        //         setData(data);
        //     })
    }, [url]);

    useEffect(() => {
        getData()
    }, [url, getData])

    return { loading, data }
}