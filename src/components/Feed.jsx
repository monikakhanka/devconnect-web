import axios from "axios";
import {BASE_URL} from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store)=> store.feed);
 console.log(feed);

  const getFeed = async ()=>{
    if(feed) return;
    
    try{
      const res = await axios.get(BASE_URL + "/user/feed", {withCredentials: true});
      dispatch(addFeed(res.data));
    }catch(err){
      console.log("Error: "+ err);
    }
    
  }

  useEffect(()=>{
    getFeed();
  },[]);

  return (
  feed && <div className="flex justify-center my-10">
    <UserCard user={feed.data[0]}/>
  </div>
  )
}

export default Feed;