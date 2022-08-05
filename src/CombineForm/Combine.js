import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Combine.css';

const Combine = () => {

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
    <div>
      <div className="ui">
        <div>
          <img src="./Images/Group 7.png" id="main" alt="" height="100px" width="100px" />
          <h1>
            Gifti Global card is <span id="text">THE FIRST GLOBAL CARD</span> that can be exchanged to
            any gift card in any currency across the world
          </h1>
          <img src="../Component/Images/Group\ 5578.png" id="g" alt="" /><img src="../Component/Images/pin.png" id="p" alt="" /><img src="../Component/Images/dollar.png" id="d" alt="" />
          <button>
            Explore <img src="./Images/icon.png" id="i" alt="" />
          </button>
          <p id="main">
            To learn more about our newest product RewardsBy, please visit
            https://rewardsby.com
          </p>
        </div>
        <img src="./Images/Merit-Logo@2x.png" id="m" alt="" />
        <img src="./Images/unnamed@2x.png" id="u" alt="" />
      </div>

      <div>
        <h1>
          Merit Incentives is a proud sponsor of the GCVA Global Conference 2022
        </h1>
        <p>
          Fill in the information below to claim your <b>GBP 10</b> Gifti Global
          card
        </p>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            id="firstName"
            value={val.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            id="lastName"
            value={val.lastName}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Company Name"
            name="company"
            id="company"
            value={val.company}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Job Title"
            name="jobtitle"
            id="jobtitle"
            value={val.jobtitle}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email Address"
            value={val.email}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            id="phone"
            value={val.phone}
            onChange={handleChange}
          />

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
          <button type="submit" className="submit" onClick={changeOnSubmit}>
            Claim my Gifti Global Card
          </button>
        </form>
      </div>
    </div>
  );
};

export default Combine;
