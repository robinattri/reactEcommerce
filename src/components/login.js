import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
const navigate = useNavigate();
const [userList, setUserList] = useState([]);

const [user, setUser] = useState({
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

  const localData = localStorage.getItem("userData");
  console.log("localData", localData);

  const {email, password } = user;
 if (email === "") {
    alert("Please Enter Email Address");
  } else if (!email.includes("@")) {
    alert("Please Enter Valid email Address");
  } else if (password === "") {
    alert("Please Enter password");
  } else {
      if(localData && localData.length){
        const userDetails = JSON.parse(localData);
        const userLogin = userDetails.filter((item,index)=>{
          return item.email === email && item.password === password;
        })
        if (userLogin.length === 0) {
          alert("user detail invalid");
        } else {
          navigate("/");
        }
      }
  }
};

  return (
    <div className="container mt-5">
      <div className="pageTitle mb-5">
        <h1>Login</h1>
      </div>
      <form onSubmit={formSubmit}>
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
          Login
        </button>
        <div>
          Don't have an account <NavLink to="/signup">Sign up</NavLink>
        </div>
      </form>
    </div>
  );
}

export default Login