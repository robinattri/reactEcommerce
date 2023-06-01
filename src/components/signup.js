import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  console.log(user);

  const getData = (e) => {
    const { name, value } = e.target;
    setUser(() => {
      return {
        ...user,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();

    const { username, email, password } = user;

    if (username === "") {
      alert("Please Enter Username");
    } else if (email === "") {
      alert("Please Enter Email Address");
    } else if (!email.includes("@")) {
      alert("Please Enter Valid email Address");
    } else if (password === "") {
      alert("Please Enter password");
    } else {
      let key = "userData";
      // let local = JSON.parse(localStorage.getItem(key))
      //   ? JSON.parse(localStorage.getItem(key))
      //   : [];
      // local.push(user);
      // localStorage.setItem("userData", JSON.stringify(local));
      // alert("User Register Successfully");

      //   const localStorageData = JSON.parse(localStorage.getItem("userData"));
      //   console.log(localStorageData, "localStorageData");

      // if (localStorageData === ""){
      //     localStorage.setItem("userData", JSON.stringify([user]));
      //     alert("User Register Successfully");
      // }else{
      setUserList([...userList, user]);
      localStorage.setItem("userData", JSON.stringify(userList));
      //    alert("New User Register Successfully");
      // }
    }
  };

  return (
    <div className="container mt-5">
      <div className="pageTitle mb-5">
        <h1>Register</h1>
      </div>
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            name="username"
            onChange={getData}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={getData}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={getData}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <div>
          already have an account <NavLink to="/login">Login</NavLink>
        </div>
      </form>
    </div>
  );
};

export default Signup;
