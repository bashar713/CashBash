import React from "react";
import { Link} from "react-router-dom";
import "../utils/Home.css"


function Home (){
  return (
      <div className="container">
      <h2 className="display-4 fw-bold mb-5">Keep Track of Your Income & Expenses</h2>
      <p>View all your income and expense flow from your team in one dashboard.</p>
      <br/>
      <Link to="/profile" className="btn btn-primary me-2 mb-2 mb-sm-0">
          Track your performance
      </Link>
      <br/><br/>
      <a className="btn btn-secondary mb-2 mb-sm-0" href="https://www.youtube.com/channel/UCvu6J9q1AM6q4xysGqAvVyw">
        Video Tutorial
      </a>
      <br/><br/>      
      <h1 className="text-danger">Admin Login</h1>
      <p>User name : admin@gmail.com</p>
      <p>Password : 12345 </p>
      <h6>Home Page</h6>
      </div>
    );
  };
  
  export default Home;
