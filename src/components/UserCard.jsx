/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;
  const dispatch = useDispatch();
  const handleRequest = async (status, userId) => {
    const res = await axios.post(
      BASE_URL + "/request/send/" + status + "/" + userId,
      {},
      { withCredentials: true }
    );
    dispatch(removeUserFromFeed(userId));
  };

  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <div className="justify-center flex">
        <figure className="mt-5 px-10">
          <img src={photoUrl} alt="user photo" />
        </figure>
      </div>
      <div className="card-body px-10">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + ", " + gender}</p>}
        {about && <p>{about}</p>}
        <div className="card-actions justify-center my-4">
          <button
            className="btn btn-primary"
            onClick={() => handleRequest("ignored", _id)}>
            Ignore
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleRequest("interested", _id)}>
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
