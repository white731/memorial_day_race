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
    <div>
      <div>
        <h1>1st Annual Whitesides Memorial Day 10K.</h1>
        <h2>May 31st, 2021</h2>
        <h2>Start Time: 11:00</h2>
      </div>

      <div>
        <h1>Race Description</h1>

        <p>I usually do this run every year alone on Memorial day but I've decided to open it up to the world this year. 
          Show up at my house at 10:30ish. I'll be giving out these little flags this year to run with since it's Memorial day.
          The race will start at 11:00 am. We'll run straight down 100 West to 400 North, then 
          turn right for a mile, then up Meridian for the last 3/4 mile or so. Its not a true 10k, its more like 5.7 miles, but
          if you run far enough back in the cemetary you can make it to 6 miles. Note that this is not a loop so you'll need to arrange
          for someone to pick you up at the Cemetary whenever you finish. I usually just meet my family out there and we visit 
          my grandparents graves together. 
        </p>

        <h1>Non-Runners/Walkers</h1>
        <p>If you don't want to run, that's completely ok. This race is open to any and all modes of transportation (except cars).
          This includes bicycles, scooters, roller blades, motorcycles, golf carts, side x sides, 4-wheelers or anything else you 
          can think of that's not a car... 
        </p>

        <h2>Start Address</h2>
        <p>My House</p>
        <p>216 Countryside Dr.</p>
        <p>Rupert, ID 83350</p>

        <h2>End Address</h2>
        <p>The Rupert Cemetary</p>
        <p>450 N. Meridian</p>
        <p>Rupert, ID 83350</p>

        <h2>Route</h2>
        <div>Map goes here</div>

      </div>

      <div>
        <h1>Sign up!</h1>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input onChange={(e)=>{setName(e.target.value)}}value={name}/>
          <label>Select your Mode of transportation:</label>
          <select 
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
          <button type="submit">Submit</button>
        </form>
      </div>
     
    </div>
  );
}

export default App;
