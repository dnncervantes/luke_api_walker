
import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




const Home = (props) => {
    const [input, setInput] = useState("people")
    const [id, setId] = useState(0);
    const navigate = useNavigate();
    
    const submitForm = (e) => {
        e.preventDefault();
        navigate(`/${input}/${id}`)
    }


    return(
        
        <div>
            {
                <form onSubmit={submitForm}>
                    <label>Search for:</label>
                    <select onChange={(e) => setInput(e.target.value)} value={input}> 
                    <option value={"people"}>People</option>
                    <option value={"planets"}>Planets</option>
                    </select> 
                    <label>Id: </label>
                    <input type="number" value={id} onChange={(e) => {setId(e.target.value)}}></input>
                    <button type="input">Search</button>
                </form> 
            }
        </div>
    )

}
export default Home;