import React from "react";
import { InsertUsers } from "../Service/UserService";
import "./Sighup.css";

export default function SignUp() {
  const [data, setData] = React.useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const HandleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const HandleForm = async (e) => {
    e.preventDefault();
    if (data.email && data.password) {
      const response = await InsertUsers(data);
      if (response.status === 201 || response.status === 200) {
        alert("Data Inserted");
        window.location.reload();
      } else {
        alert("something is wrong");
      }
    } else {
      alert("Please Fill Data");
    }
  };

  return (
    <>
      <form className="adjust-signup" action="/headlines" onSubmit={HandleForm}>
        <div className="text-center mt-4 signup-heading"></div>
        <div className="signup-left-side">
          <label className="signup-name-label signup-parent">
            Enter Your Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            id="signup-name"
            name="name"
            onChange={HandleChange}
          />

          <label className="signup-phone-lebel signup-parent">
            Enter Phone Number
          </label>
          <input
            type="number"
            id="signup-phone"
            placeholder="Your Phone"
            name="phone"
            onChange={HandleChange}
          />
        </div>

        <div className="signup-right-side">
          <label className="signup-email-lebel signup-parent">
            Enter Email Id
          </label>
          <input
            type="text"
            id="signup-email"
            placeholder="Email Id"
            name="email"
            onChange={HandleChange}
          />

          <label className="signup-password-lebel signup-parent">
            Enter Password
          </label>
          <input
            type="password"
            id="signup-password"
            placeholder="Password"
            name="password"
            onChange={HandleChange}
          />
        </div>

        <div>
          <button className="signup-btn">Submit</button>
        </div>
      </form>
    </>
  );
}

// import React, { Component } from 'react'
// import { InsertUsers } from '../Service/UserService'

// export default class SignUp extends Component {
//     constructor() {
//         super()
//         this.state = {
//             name: "",
//             email: "",
//             phone: "",
//             password: "",
//         }
//     }

//     HandleChange = (e) => {
//         this.setState({ [e.target.name]: e.target.value })
//     }

//     HandleForm = async (e) => {
//         e.preventDefault()
//         const response = await InsertUsers(this.state)
//         console.log(response);
//     }
//     render() {
//         return (
//             <div>
//                 <form action="" onSubmit={this.HandleForm}>
//                     <div className="name" id="name">Enter Your Name  </div>
//                     <input type="text" placeholder="Enter Name" name="name" className="name" onChange={this.HandleChange} />
//                     <div className="email" id="email">Enter Your Email </div>
//                     <input type="text" className="email" placeholder="Enter Email" name="email" onChange={this.HandleChange} />
//                     <div className="phone" id="phone">Enter Your Phone</div>
//                     <input type="text" className="phone" placeholder="Enter Phone" name="phone" onChange={this.HandleChange} />
//                     <div className="password" id="password">Enter Password  </div>
//                     <input type="text" className="password" placeholder="Enter Password" name="password " onChange={this.HandleChange} /><br />
//                     <input type="submit" value={'Submit'} className='submit' />
//                 </form>
//             </div>
//         )
//     }
// }
