import React from 'react';
import Head from 'next/head';
function Test(props) {
    const [myTitle, setMyTitle] = useState(1);
    setInterval(() => {
        setMyTitle(myTitle++)
    }, [1000])
    return (
        <div id='test'>
            <h1>
                Thi is testing app
            </h1>
            <Head>
                <title>Hello Title {myTitle}</title>
            </Head>
        </div>
    );
}

export default Test;