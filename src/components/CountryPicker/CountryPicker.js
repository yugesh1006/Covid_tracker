import React, { useEffect, useState } from 'react';
import{NativeSelect,FormControl} from '@material-ui/core';
import "./counrtypicker.css"
import {fetchCountry} from "../../api/api"

function CountryPicker({handleCountryChange}) {
    const [fetchedCountries,setFetchedCountries]=useState([]);

    useEffect(() => {
        const fetchCountriesAPI= async ()=>{
            setFetchedCountries(await fetchCountry());
        }
        fetchCountriesAPI();
    }, [setFetchedCountries]);

    return (
        <FormControl className="formcontrol">
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl> 
    )
}

export default CountryPicker
