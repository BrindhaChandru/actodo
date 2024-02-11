import { useState } from "react";

function Addtodoform(props){
  const activityarr = props.activityarr;
  const setactivityarr = props.setactivityarr;
  const [newactivity,setnewactivity] = useState("")
  function handlechange(evt){
    setnewactivity(evt.target.value)
  }
  function handleAdd(){
     setactivityarr([...activityarr,{id:activityarr.length+1,activity:newactivity}])
     setnewactivity("")
  }
      return(
        <div>
            <div>
                    <h1 className="text-2xl font-medium">Manage Activities</h1>
                    <input value={newactivity} onChange={handlechange} className="border border-black p-1" type="text" placeholder="Next Activity?"></input>
                    <button onClick={handleAdd} className="bg-black border border-black text-white p-1">Add</button>
                </div>
        </div>
      )
}
export default Addtodoform