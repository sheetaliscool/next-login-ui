import React, { useState } from "react";
import PropTypes from "prop-types";
import swal from "sweetalert";

async function loginUser(credentials) {
  return fetch("http://127.0.0.1:8000/api/method/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [usr, setUserName] = useState();
  const [pwd, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      usr,
      pwd,
    });
    setToken(token);
    

    if ("full_name" in token) {
      swal("Success", token.message, "success", {
        buttons: false,
        timer: 2000,
      }).then((value) => {
        localStorage.setItem("accessToken", token["accessToken"]);
        localStorage.setItem("user", JSON.stringify(token["user"]));
      });
    } else {
      swal("Failed", token.message, "error");
    }
  };   return(
    <section className="text-center">
        <div className="p-5 bg-image" style={{backgroundImage: "url('https://www.iitb.ac.in/sites/www.iitb.ac.in/files/styles/gallery_item/public/MainBldg%20grey.jpg')" ,
         backgroundSize: 'cover', height: '100vh', position: 'relative'}}>
        </div>
        
        <div className='d-flex justify-content-center'>  
        <div className="card mx-auto mx-md-5 shadow-5-strong" style={{marginTop: "-500px", marginBottom: "100px", background:"hsla(0, 0%, 100%, 0.5)",
        backdropFilter: "blur(30px)", maxWidth: '600px'}}>
    <div className="card-body py-5 px-md-5">

        <div className="col-lg-12">
          <h2 className="fw-bold mb-5">Login</h2>
          <form onSubmit={handleSubmit}>

            <div className="form-outline mb-4">
              <input onChange={e => setUserName(e.target.value)} id="form3Example3" className="form-control" placeholder='Email Address' />
            </div>

            <div className="form-outline mb-4">
              <input type="password" onChange={e => setPassword(e.target.value)} id="form3Example4" className="form-control" placeholder='Password'/>
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-4">
              Login
            </button>
          </form>
        </div>
    </div>
  </div>
  </div>
</section>
   );
}

