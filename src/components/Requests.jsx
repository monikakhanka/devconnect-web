import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRequests } from '../utils/requestsSlice';

const Requests = () => {
    const requests = useSelector((store) => store.requests);
    const dispatch = useDispatch();



    const fetchRequests = async() => {
      try{
        const res = await axios.get(BASE_URL + "/user/requests/recieved", {withCredentials: true});
        console.log(res);
        dispatch(addRequests(res?.data?.data));

      }catch(err){
        console.log(err.message);
      }
    }

    useEffect(()=>{
        fetchRequests();
    },[]);

    if(!requests) return;

    if(requests.length === 0 ) return <h1>No Connections Found</h1> ;

  return (

    <div className="text-center my-10 w-9/12 mx-auto">
        <h1 className="font-bold text-2xl text-white">Connection Requests</h1>
        {
            requests.map((request) => {
                const {firstName, lastName, photoUrl, age, gender, skills, about, _id}= request.fromUserId;

                return (
                    <div key={_id} className="m-4 p-4 bg-base-300 flex justify-between items-center mx-auto">
                        <div>
                            <img src={photoUrl} alt="photo" className="w-30 h-30 rounded-full block content-center" />
                        </div>
                        <div className="w-9/12 border-red-200 border-solid text-left mx-5">
                            <h1 className="font-bold text-xl">{firstName + " "+ lastName}</h1>
                            {age || gender && <h2>{age + ", " + gender}</h2>}
                            {about && <p>{about}</p>}
                            {skills && <p>{skills.join(", ") || ""}</p>}
                        </div>
                            <button className="btn btn-primary mx-2">Reject</button>
                            <button className="btn btn-secondary mx-2">Accept</button>
                    </div>
            );})}
    </div>
  )
}

export default Requests;