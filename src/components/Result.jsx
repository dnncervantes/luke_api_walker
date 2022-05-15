import axios from 'axios';
import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';


const Result = (props) => {
    const [apiResponse, setApiResponse] = useState(null)
    const {resource, id} = useParams();
    console.log(resource, id);
    // const [errorResponse, setErrorResponse] = useState(false);

    useEffect(() => {
        gatherAxios()
    }, [resource]) 

    const gatherAxios = () => {
        axios.get(`http://swapi.dev/api/${resource}/${id}`)
        .then(response=>{
            console.log(response.data);
            //set the state variable
            setApiResponse(response.data);
        })
        .catch(err => console.log(err))
    }
    // if(errorResponse === true){
        // <Error />
    }
    return(
        <div>
            {JSON.stringify(apiResponse)}
            {
            
                apiResponse ? <h3> {apiResponse.data} </h3> : <h1>Loading</h1>
                
            }
        </div>

    )

}
export default Result;