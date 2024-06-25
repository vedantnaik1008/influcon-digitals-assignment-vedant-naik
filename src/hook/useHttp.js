import { useEffect, useState } from "react"

const useHttp = () => {
    const [data, setData] = useState([]);
    // https://sheetdb.io/api/v1/ko17sap53hk8a
    useEffect(() => {
        const post = async () => {
            await fetch('https://sheetdb.io/api/v1/eyj9paocw7v97', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((err) => console.log(err));
        };
        post();
    }, [data]);
    return { setData, data };
}

export default useHttp
