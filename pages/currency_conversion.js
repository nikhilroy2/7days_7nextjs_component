import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';

function CurrencyConversion(props) {
    const [countryList, setCountryList] = useState([]);
    const [currencyValue, setCurrencyValue] = useState(1)
    const [dateUpdate, setDateUpdate] = useState('');
    const fromCurrency = useRef();
    const toCurrency = useRef();
    const toInputValue = useRef();

    function CurrencyFetch() {
        let fromValue = fromCurrency.current.value; // for example usd
        let toValue = toCurrency.current.value; // for example bdt
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${toValue}.json`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {

                // let newObj = Object.entries(data)[1];
                //console.log(data)
                let newObj = new Object(data[toValue])
                //console.log(Object.keys(newObj))
                let currencyResult = Object.entries(newObj).filter(v => v[0] === fromValue ? v[1] : '')
                //console.log(currencyResult[0][1])
                setDateUpdate(data.date);
                // console.log(newObj)
                //console.log(data.fromValue)
                //  let currentValue = Object.keys(data.fromValue).filter(v=> v===fromCurrency);
                //  console.log(currentValue)
                //  setCurrencyValue(currentValue)
                let calcCurrency = Number(currencyResult[0][1].toFixed(2) * Number(toInputValue.current.value).toFixed(2))
                setCurrencyValue(calcCurrency.toFixed(2))
            })
    }

    const changeCurrency = () => {
        CurrencyFetch()
        console.log('change')
    }

    useEffect(() => {
        fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                setCountryList(data);
            })
        CurrencyFetch()
    })

    return (
        <div id='CurrencyConversion'>
            <Head>


            </Head>

            <div className="wrapper_sm">
                <div className="" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h2>
                        Currency Conversion
                    </h2>
                    <h3>
                        Updated: {dateUpdate}
                    </h3>
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">
                        To
                    </label>
                    <div className="input_group">
                        <input type="text" defaultValue={1} ref={toInputValue} onChange={changeCurrency} className="form-control" />
                        <select name="" id="" ref={toCurrency} onChange={changeCurrency} >
                            {
                                Object.entries(countryList).map(v => {
                                    return (
                                        v[1] === 'United States dollar' ?
                                            <option selected={true} key={v[0]} value={v[0]}>{v[1]}</option>
                                            :
                                            <option key={v[0]} value={v[0]}>{v[1]}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">
                        From
                    </label>
                    <div className="input_group">
                        <input disabled value={currencyValue} type="text" className="form-control" />
                        <select name="" id="" ref={fromCurrency} onChange={changeCurrency}>
                            {
                                Object.entries(countryList).map(v => {
                                    return (
                                        v[1] === 'Bangladeshi taka' ?
                                            <option selected={true} key={v[0]} value={v[0]}>{v[1]}</option>
                                            :
                                            <option key={v[0]} value={v[0]}>{v[1]}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrencyConversion;