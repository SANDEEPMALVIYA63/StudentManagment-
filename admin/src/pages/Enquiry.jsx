import React, { useState } from "react";
// import Layout from '../components/Layout';
import { useNavigate } from "react-router-dom";
import style from "../styles/Enquiry.module.css";
import toast, { Toaster } from "react-hot-toast";
function Enquiry() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [clgName, setClgName] = useState("");
  const [course, setCourse] = useState("");
  const [qualification, setQualification] = useState("");
  const [refrance, setRefrance] = useState("");
  const navigate = useNavigate();

  async function handleStudent(e) {
    e.preventDefault();
    let response = await fetch("http://localhost:5000/api/enquiry", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        clgName: clgName,
        course: course,
        qualification: qualification,
        refrance_By: refrance,
      }),
    });
    if (response.status === 201) {
      toast.success("Ragistration Successfully");
      setTimeout(() => {
        navigate("/showStudent");
      }, 2000);
    } else {
      toast.error("Failed");
    }
  }

  return (
    // <Layout>

    <center>
      <div className="Enquriy">
        {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s' className='image'/> */}
        <div
          className={style.container}
          style={{ width: "800%", marginTop: "12%", marginBottom: "12%" }}
        >
          <header style={{ textAlign: "left" }}>Registration</header>
          <form action="#" onSubmit={handleStudent}>
            <div>
              <div className="details personal">
                <span className={style.title} style={{ fontSize: "5vh" }}>
                  <b>Personal Details</b>
                </span>
                <hr />
                <div className="row">
                  <div className="col-sm-6 text-left">
                    <div className={style.inputField}>
                      <label className="fs-6">Full Name:</label>
                      <input
                        className="form-control"
                        type="text"
                        value={name}
                        placeHolder="Enter your name"
                        required
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 text-left">
                    <div className={style.inputField}>
                      <label className="fs-6">Email Address:</label>
                      <input
                        className="form-control"
                        type="text"
                        value={email}
                        placeHolder="Enter your Address"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6 text-left">
                    <div className={style.inputField}>
                      <label className="fs-6 ">Mobile Number:</label>
                      <input
                        className="form-control"
                        type="text"
                        value={phoneNumber}
                        placeHolder="Enter your Mobile Number"
                        required
                        onChange={(e) => setphoneNumber(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 text-left">
                    <div className={style.inputField}>
                      <label className="fs-6">College Name:</label>
                      <input
                        className="form-control"
                        type="text"
                        value={clgName}
                        placeHolder="Enter your College Name"
                        required
                        onChange={(e) => {
                          setClgName(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6 text-left">
                    <div className={style.inputField}>
                      <label className="fs-6">Course:</label>
                      <input
                        className="form-control"
                        type="text"
                        value={course}
                        placeHolder="Enter your Course"
                        required
                        onChange={(e) => {
                          setCourse(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 text-left">
                    <div className={style.inputField}>
                      <label className="fs-6">Qualification:</label>
                      <input
                        className="form-control"
                        type="text"
                        value={qualification}
                        placeHolder="Enter your Qualification"
                        required
                        onChange={(e) => {
                          setQualification(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h1 className="fs-5 text-left" style={{ textAlign: "left" }}>
                  Reference By:
                </h1>
                <div className="row">
                  <div className="col">
                    <div className={style.inputField}>
                      <p
                        onClick={() => {
                          setRefrance("NewsPaper");
                        }}
                        className={style.originalButton}
                      >
                        NewsPaper
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className={style.inputField}>
                      <p
                        onClick={() => {
                          setRefrance("Pamphlet");
                        }}
                        className={style.originalButton}
                      >
                        Pamphlet
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className={style.inputField}>
                      <p
                        onClick={() => {
                          setRefrance("Web site");
                        }}
                        className={style.originalButton}
                      >
                        Web site
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className={style.inputField}>
                      <p
                        onClick={() => {
                          setRefrance("Friend");
                        }}
                        className={style.originalButton}
                      >
                        Friend
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className={style.inputField}>
                      <p
                        onClick={() => {
                          setRefrance("Poster");
                        }}
                        className={style.originalButton}
                      >
                        Poster
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className={style.inputField}>
                      <p
                        onClick={() => {
                          setRefrance("Other");
                        }}
                        className={style.originalButton}
                      >
                        Other
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" style={{ marginTop: "4vh" }}>
                <span className={style.btnText}>Submit</span>
                <i className="uil uil-navigator"></i>
              </button>
            </div>
          </form>
          <Toaster />
        </div>
      </div>
    </center>

    // </Layout>
  );
}

export default Enquiry;
