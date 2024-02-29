import User from "./User";
import { userList } from "../util/constants";
import { useReducer } from "react";

const Contact = () => {

  {console.log(userList)}
  return (
      <div>
        <div className="contact-container">

            <h1 className="contact-header">Contact US </h1>
            <h2>List of contributers </h2>
            <div className="userCard-container">
              {userList.map((user) => { return(<User key={user.id} info={user}/>)})}
            </div>
        </div>
    </div>
  );
};

export default Contact;
