import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

function QrCode(props) {
    const [data, setData] = useState('No result');
    return (
        <div id='QrCode'>
            <QrReader
                onResult={(result, error) => {
                    if (!!result) {
                        setData(result?.text);
                    }

                    if (!!error) {
                        console.info(error);
                    }
                }}
                style={{ width: '100%' }}
            />
            <p>{data}</p>
        </div>
    );
}

export default QrCode;