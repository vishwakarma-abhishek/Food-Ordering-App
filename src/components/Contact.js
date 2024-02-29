import User from "./User";
import { userList } from "../util/constants";
import { useReducer } from "react";

const Contact = () => {

  const {name, email, githubAcc} = userList[0];
  {console.log(userList)}
  return (
      <div>
        <div className="contact-container">

            <h1 className="contact-header">Contact US </h1>
            <h2>List of contributers </h2>
            <div className="userCard-container">
              {userList.map((user) => { return(<User key={user.id} info={user}/>)})}
              {/* {<User info={userList[0]}/>} */}

              {/* <div >
                <h3>{name}</h3>
                <h4>{email}</h4>
                <h4>{githubAcc}</h4>

              </div> */}
            </div>
        </div>
    </div>
  );
};

export default Contact;
