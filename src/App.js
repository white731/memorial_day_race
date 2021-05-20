import axios from 'axios';
import { useState } from 'react';
import './App.css';

const modeOfTransport = ["Running","Bicycling","Scooter","Roller Blades","Skate Board", "Motorcycle", "Golf Cart", "4-Wheeler/Side x Side"]

function App() {

  const [name, setName] = useState("");
  const [mode, setMode] = useState(modeOfTransport[0]);

  const handleSubmit = async (event) =>{
    event.preventDefault()
    const data = {
      "records": [
        {
          "fields": {
            "Name": name,
            "Mode": mode,
          }
        }
      ]
    }
    let app_key="keyF7soBPtQvclNID"
    let app_id ="app7olcBEbBelIJyW"
    let view = "memorial_day_sign_up"
    let url = "https://api.airtable.com/v0/" + app_id + "/" + view
    let axiosConfig = { headers: { Authorization: "Bearer " + app_key , 'Content-Type': 'application/json' } }


    let res = await axios.post(url,data,axiosConfig)
    console.log(res.data.records.fields)
  }

  return (
    <>
        <a href="#sign-up">
          <div class="sign-up-button">
            <p>Sign Up Now!</p>
          </div>
        </a>
    <div class="container">



      <div>
        <h1>1st Annual Whitesides Memorial Day 10K</h1>
        <h2>May 31st, 2021</h2>
        <h2>Start Time: 11:00 AM</h2>
      </div>

      <hr></hr>

      <div>
        <h1>Race Description</h1>

        <p>I usually do this run every year alone on Memorial day but I've decided to open it up to the world this year.</p> 

          <p>Show up at my house at 10:30ish. I'll be giving out these little flags this year to run with since it's Memorial day.
          The race will start at 11:00 am.</p>

          <img src="https://mcusercontent.com/b61bde706ca219f6690032ed4/images/763a148e-e238-1620-d439-164f86baad4c.jpg" alt="picture of little flag"></img>
          
          <p>We'll run straight down 100 West to 400 North, then turn right for a mile, then up Meridian for the last 3/4 mile or so.
            <br/>
            <a href="https://www.google.com/maps/d/u/0/edit?mid=1OIl8cYbFJz1bpZUM_HXsQN56am-sVhJw&usp=sharing" target="_blank">Click Here for Directions.</a>
          </p>
         
          <p>Its not a true 10k, its more like 5.7 miles, but if you run far enough back in the cemetary you can make it to 6 miles.</p> 
          
          <p>Note that this is not a loop so you'll need to arrange for someone to pick you up at the Cemetary whenever you finish. 
          I usually just meet my family out there and we visit my grandparents graves together. </p>
        

        <h1>Non-Runners/Walkers</h1>
        <p id="sign-up">If you don't want to run, that's completely ok. This race is open to any and all modes of transportation (except cars).
          This includes bicycles, scooters, roller blades, motorcycles, golf carts, side x sides, 4-wheelers or anything else you 
          can think of that's not a car... 
        </p>
      </div>  

      <div class="sign-up-div">
        <h1>Sign up!</h1>
        <form class="sign-up-form" onSubmit={handleSubmit}>
          <label class="form-element">Name</label>
          <input class="form-element" onChange={(e)=>{setName(e.target.value)}}value={name}/>
          <label class="form-element custom-select">Select your Mode of transportation:</label>
          <select
              class = "form-element" 
              onChange={(e)=>{
              setMode(e.target.value)
              console.log(e.target.value)}} 
              name="mode"
          >
            {modeOfTransport.map(mode => {
              return (
                <option key={mode} value={mode}>{mode}</option>
              )
            })}
          </select>
          <button class="form-element" type="submit">Submit</button>
        </form>
      </div>

      <hr/>

      <div>     
        <h2>Start Address</h2>
        <p><b>My House</b></p>
        <p>216 Countryside Dr.</p>
        <p>Rupert, ID 83350</p>

        <h2>End Address</h2>
        <p><b>The Rupert Cemetary</b></p>
        <p>450 N. Meridian</p>
        <p>Rupert, ID 83350</p>

        <h2>Route</h2>
          <iframe src="https://www.google.com/maps/d/embed?mid=1OIl8cYbFJz1bpZUM_HXsQN56am-sVhJw" width="100%" height="480"></iframe>
      </div> 
     
    </div>
    </>
  );
}

export default App;
