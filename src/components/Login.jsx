import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import {BASE_URL} from "../utils/constants";

const Login = () => {

    const [emailId, setEmailId] = useState("salman@gmail.com");
    const [password, setPassword] = useState("Salman@123");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleLogin = async () => {
        try{
            const res = await axios.post(BASE_URL +"/login", {
                emailId,
                password
            },{withCredentials: true}
        );

            dispatch(addUser(res.data));
            return navigate("/");
        }catch(err){
            setError(err?.response?.data || "Something went wrong");
            console.log(err);
        }
    }

  return (
    <div className="flex justify-center my-10">
        <div className="card bg-base-300 w-96 shadow-xl">
            <div className="card-body">
                <h2 className="card-title justify-center">Log in!</h2>
                <div className="">
                    <label className="form-control w-full max-w-xs my-2">
                        <div className="label">
                            <span className="label-text">Email ID {emailId}</span>
                        </div>
                        <input type="text" value={emailId} placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e) => setEmailId(e.target.value)} />    
                    </label>
                    <label className="form-control w-full max-w-xs my-2">
                        <div className="label">
                            <span className="label-text">Password</span>
                        </div>
                        <input type="text" value={password} placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e)=> setPassword(e.target.value)}/>    
                    </label>  
                </div>
                <div className="text-red-500">
                    <p>{error}</p>
                </div>
                <div className="card-actions justify-center">
                <button className="btn btn-primary m-2" onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login