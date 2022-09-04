import React, { useState, useEffect } from 'react';
import Head from 'next/dist/shared/lib/head';
function AjaxTable(props) {
    const [searchResult, setSearchResult] = useState('')

    const tableSearch = event => {
        // console.log(event.target.value);
        setSearchResult(event.target.value);
    }
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
            <div className="container">
                <div className="filter_wrapper bg-dark p-2 d-flex align-items-center justify-content-end">
                    <div className="form-group">
                        <input type="text" onInput={tableSearch} placeholder='Search here...' className="form-control" />
                    </div>
                    <div className="form-group ms-3">
                        <select name="" id="" className="form-control">
                            <option value="Auto">Auto</option>
                            <option value="Accending">Accending</option>
                            <option value="Deccending">Deccending</option>
                        </select>
                    </div>
                </div>
                <CountrySearch searchResult={searchResult}></CountrySearch>
            </div>
        </div>
    );
}

export default AjaxTable;


function CountrySearch({ searchResult }) {
    const [country, setCountry] = useState([]);
    console.log(searchResult)
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                setCountry(data)
            })
    })
    return (
        <div className="country_search">
            <div className="table-responsive">
                <table className="table table-hover shadow-3 table-dark">
                    <thead className='bg-primary text-white'>
                        <tr>
                            <th className='bg-primary'>
                                No.
                            </th>
                            <th className='bg-primary'>
                                Country
                            </th>
                            <th className='bg-primary'>
                                Capital
                            </th>
                            <th className='bg-primary'>
                                Region
                            </th>
                            <th className='bg-primary'>
                                Population
                            </th>
                            <th className='bg-primary'>
                                Area
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            country.length <= 0 && (
                                <tr className='border-0'>
                                    <td colSpan={6} className="border-0">
                                        <div className="text-center py-5">
                                            <span className="spinner-border"></span>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                        {country.map((v, i) => {
                            if (true) {
                                return (
                                    <tr key={v.name.common}>
                                        <td>{i}</td>
                                        <td>
                                            <img style={{ height: '10px' }} src={v.flags.svg}
                                                alt="flag" />   {v.name.common}
                                        </td>
                                        <td>
                                            {v.capital}
                                        </td>
                                        <td>
                                            {v.region}
                                        </td>
                                        <td>
                                            {v.population}
                                        </td>
                                        <td>
                                            {v.area}
                                        </td>
                                    </tr>
                                )
                            } else {
                            }


                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}