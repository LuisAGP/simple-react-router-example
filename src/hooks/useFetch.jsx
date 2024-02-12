import { useCallback, useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null);

    const fetchData = useCallback(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

    useEffect(() => {
        fetchData();
    }, [])

    return {data}

}


export default useFetch;