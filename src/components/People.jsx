import React from 'react'
import axios from 'axios';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Error from './Error';
import { Navigate, useNavigate } from 'react-router-dom';

const People = () => {
    const [apiResponse, setApiResponse] = useState({})
    const {id} = useParams();
    console.log(id);
    const navigate = useNavigate();
    const [errorResponse, setErrorResponse] = useState(false);
    
    useEffect(() => {
        axios.get(`http://swapi.dev/api/people/${id}`)
        .then(response=>{
            console.log(response.data);
            //set the state variable
            setApiResponse(response.data);
        })
        .catch(err => console.log(err))
            setErrorResponse(true) 
                // navigate("/error")
            }, [id])
    
    return (
        <div>
            <h2>{apiResponse.name}</h2>
            <h5>Height: {apiResponse.height}</h5>
            <h5>Mass: {apiResponse.mass}</h5>
            <h5>Hair Color: {apiResponse.hair_color}</h5>
            <h5>Skin Color: {apiResponse.skin_color}</h5>
        </div>
    )
}

export default People