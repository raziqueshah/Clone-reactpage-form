import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const InstaLogin = () => {

    const [apiData, setApiData] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/posts";

    useEffect(()=>{
        axios.get(url).then(({data})=>{
            console.log(data);
            setApiData(data);
        })
    },[])

  return (
    <div>
      <h1>Instagram</h1>
      <input type="text" name='username' id='username' placeholder='Phone number, UserName, Email Address' />
      <input type="password" name='password' id='' />
    </div>
  )
}

export default InstaLogin
