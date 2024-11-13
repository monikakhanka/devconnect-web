/* eslint-disable react/prop-types */

const UserCard = ({user}) => {
const {firstName, lastName, photoUrl, age, gender, about} = user;
  return (
    <div className="card bg-base-300 w-96 shadow-xl">
       <div className="justify-center flex">
            <figure className="mt-5 px-10">
                    <img
                    src={photoUrl}
                    alt="user photo" />
            </figure>
       </div>
        <div className="card-body px-10">
            <h2 className="card-title">{firstName + " "+ lastName}</h2>
            {age && gender &&  <p>{age + ", "+ gender}</p>}
            {about &&<p>{about}</p>}
            <div className="card-actions justify-center my-4">
                <button className="btn btn-primary">Ignore</button> 
                <button className="btn btn-secondary">Ineterested</button>
            </div>
        </div>
    </div>
  );
}

export default UserCard