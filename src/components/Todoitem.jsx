function Tododitem(props){
    const activityarr = props.activityarr;
    const setactivityarr = props.setactivityarr;
    function handleDelete(deleteid){
        var temparr = activityarr.filter(function(item){
        if(item.id === deleteid){
            return false
        }
        else{
            return true
        }})
           setactivityarr(temparr)
    }
    return(
        <div className="flex justify-between">
            <p>{props.index}.{props.activity}</p>
            <button className="text-red-500 border border-r-black" onClick={()=>{handleDelete(props.id)}}>Delete</button>
        </div>
    )

}
export default Tododitem