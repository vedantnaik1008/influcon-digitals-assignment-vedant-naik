import { useEffect, useState } from 'react';

const useHttp = () => {
    const [data, setData] = useState([]);
    // https://sheetdb.io/api/v1/ko17sap53hk8a   \\https://sheetdb.io/api/v1/eyj9paocw7v97
    useEffect(() => {
        const post = async () => {
            await fetch(
                'https://script.google.com/macros/s/AKfycbxtdP1hDUlX3OxeSYL21yp6QHIZDFG_8VR3jCry_dLH0X-P8M9iC-VoH1G82ZBxYjTp3A/exec',
                {
                    method: 'POST',
                    body: data,
                    muteHttpExceptions: true
                }
            )
                .then((response) => response.status)
                .catch((err) => console.log(err));
        };
        post();
    }, [data]);
    return { setData, data };
};

export default useHttp;
