import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"


function Login (props){
    const navigate = useNavigate()
    const users = props.users;
    const [euname,seteuname] = useState("")
    const [epass,setepass] = useState("")
    const [ruser,setRuser] = useState(true)

    function handleEuname(evt){
        seteuname(evt.target.value)
    }
    function handleEpass(evt){
        setepass(evt.target.value)
    }
    function handleLogin(){
       
        var userfound = false 

        users.forEach(function(item)
        {
            if(item.username === euname && item.password === epass)
            {

                console.log("Login Successfull")
                userfound = true
                navigate("/landing",{state:{user:euname}})

            }
        })

        if(userfound===false)
        {
            console.log("login Failed")
            setRuser(false)
        }


    }

        
    
    return(
        <div className="bg-black p-16">
        <div className="bg-[#EFEFEF] p-10 border rounded-md" >
        <h1 className="text-2xl font-medium">Hey Hi!..</h1>
        <p>I help you manage your activities afetr you login:)</p>
        <input value={euname} onChange={handleEuname} className="border border-black m-2"type="text" placeholder="Username"></input><br></br>
        <input value={epass} onChange={handleEpass} className="border border-black m-2" type="text" placeholder="Password"></input><br></br>
        <button onClick={handleLogin} className="ml-8 mt-4 bg-violet-600 p-2 rounded-md">Login</button>
        <p>Don't have an account? <Link to={"/signup"} className="underline">Sign Up</Link>  </p>
        </div>
        </div>
         
         
    )
}
export default Login