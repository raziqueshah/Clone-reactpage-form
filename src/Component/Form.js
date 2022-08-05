import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Form.css';

const Form = () => {
    const navigate = useNavigate();

    const [val, setVal] = useState({firstName: "",
    lastName: "", company:"", jobtitle:"",email:"", phone:""});

    function handleChange(evt) {
        const value = evt.target.value;
        setVal({
          ...val,
          [evt.target.name]: value
        }); 
      }

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    const changeOnSubmit = ()=>{
        navigate('/formsubmit');
    }
    
  return (
    <div className="flot">
        <h1>
          Merit Incentives is a proud sponsor of the GCVA Global Conference 2022
        </h1>
        <p>
          Fill in the information below to claim your <b>GBP 10</b> Gifti Global card
        </p>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" name="firstName" id="firstName" value={val.firstName} onChange={handleChange} />
        <input type="text" placeholder="Last Name"name="lastName" id="lastName" value={val.lastName} onChange={handleChange} />
        <input type="text" placeholder="Company Name" name="company" id="company" value={val.company} onChange={handleChange} />
        <input type="text" placeholder="Job Title" name="jobtitle" id="jobtitle" value={val.jobtitle} onChange={handleChange} />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email Address" value={val.email} onChange={handleChange}
        />
        <input type="text" placeholder="Phone Number" name="phone" id="phone" value={val.phone} onChange={handleChange} />

        <select id="country" name="country">
          <option>Country</option>
          <option value="AF">Afghanistan</option>
          <option value="AX">Aland Islands</option>
          <option value="AL">Albania</option>
          <option value="DZ">Algeria</option>
          <option value="AS">American Samoa</option>
          <option value="AD">Andorra</option>
          <option value="AO">Angola</option>
        </select>
        <br />
        <br />
        <button type="submit" className='submit' onClick={changeOnSubmit}>Claim my Gifti Global Card</button>
      </form>
    </div>
  )
}

export default Form;
