import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connection);
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;

  if (connections.length === 0) return <h1>No Connections Found</h1>;

  return (
    <div className="text-center my-10 w-6/12 mx-auto font-sans">
      <h1 className="font-bold text-2xl text-white">Connections</h1>
      {connections.map((connection) => {
        const {
          firstName,
          lastName,
          photoUrl,
          age,
          gender,
          skills,
          about,
          _id,
        } = connection;

        return (
          <div key={_id} className="m-4 p-4 bg-base-300 flex mx-auto w-10/12">
            <div>
              <img
                src={photoUrl}
                alt="photo"
                className="rounded-full w-40 h-40 mr-5"
              />
            </div>
            <div className="text-left w-8/12">
              <h1 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h1>
              {age && gender && <h2>{age + ", " + gender}</h2>}
              {about && <p>{about}</p>}
              {skills && <p>{skills.join(", ") || ""}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
