import React, { useState, useEffect } from 'react';
import Head from 'next/dist/shared/lib/head';
function august_4(props) {
    return (
        <div className='wrapper'>
            <Head>
                {/* <!-- Font Awesome -->c */}
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                    rel="stylesheet"
                />

                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.4.0/mdb.min.css"
                    rel="stylesheet"
                />

                {/* <!-- MDB --> */}
                <script async="true" type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.4.0/mdb.min.js"></script>
            </Head>

            <h1 className='text-center bg-primary text-white w-100 rounded-0 p-3 '>
                August 6
            </h1>
            <CountrySearch></CountrySearch>

        </div>
    );
}

export default august_4;


function CountrySearch() {
    const [country, setCountry] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                setCountry(data)
                console.log(country)
            })
    })
    return (
        <div className="country_search">
            <ul>
                {country.map(v => {
                    return <li key={v.name.common}>
                        <img style={{height: '10px'}} src={v.flags.svg} alt="flag" />   {v.name.common}
                    </li>
                })}
            </ul>
        </div>
    )
}