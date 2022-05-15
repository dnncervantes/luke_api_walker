import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Error from './Error';
import { Navigate, useNavigate } from 'react-router-dom';

const Planets = () => {
    const [apiResponse, setApiResponse] = useState({})
    const {id} = useParams();
    console.log(id);
    const navigate = useNavigate();
    const [errorResponse, setErrorResponse] = useState(false);

    useEffect(() => {
        axios.get(`http://swapi.dev/api/planets/${id}`)
        .then(response=>{
            console.log(response.data);
            //set the state variable
            setApiResponse(response.data);
        })
        .catch(err => console.log(err))
            setErrorResponse(true) 
                // navigate("/error")
            }, [id])

    // const gatherAxios = () => {
    // if(errorResponse === true){
    //     <Error />
    // } else {
    return (
        <div>
            <h2>{apiResponse.name}</h2>
            <h5>Climate: {apiResponse.climate}</h5>
            <h5>Terrain: {apiResponse.terrain}</h5>
            <h5>Surface Water: {apiResponse.surface_water}</h5>
            <h5>Population: {apiResponse.population}</h5>
        </div>
        )
}


export default Planets