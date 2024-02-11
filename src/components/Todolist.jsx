
import Tododitem from "./Todoitem"

function Todolist (props){
    const activityarr = props.activityarr;
const setactivityarr = props.setactivityarr;
    
    return(
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
                    <h1 className="text-2xl font-medium ">Today's Activities </h1>
                    
                    {activityarr.length === 0 ? <p>You haven't add anything..</p>:""}
                    {activityarr.map(function(item,index){
                        return <Tododitem  activity={item.activity} id={item.id} index={index+1} activityarr={activityarr} setactivityarr={setactivityarr}/>
                    }
                    
                    )}
                </div>
    )
}
export default Todolist