import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
// import { useNavigate } from "react-router-dom";
import "./Landingpage.css";

const Landingpage = () => {
  const buttonData = {
    btn1: { short: "DS", expanded: "Data Structure" },
    btn2: { short: "Algorithm", expanded: "Algorithm & Design" },
    btn3: { short: "OOP", expanded: "Object Oriented Programming" },
    btn4: { short: "DBMS", expanded: "Database Management System" },
    btn5: { short: "OS", expanded: "Operating System" },
    btn6: { short: "CN", expanded: "Computer Networks" },
    btn7: { short: "SE", expanded: "Software Engineering" },
    btn8: { short: "SAD", expanded: "System Analysis & Design" },
    btn9: { short: "HCI", expanded: "Human Computer Interaction" },
    btn10: { short: "TOC", expanded: "Theory of Computation" },
    btn11: { short: "AI", expanded: "Articifial Intelligence" },
    btn12: { short: "Web", expanded: "Web Programming" },
    btn13: { short: "CA", expanded: "Computer Architecture" },
    btn14: { short: "SPL", expanded: "Structured Programming Language" },
    btn15: { short: "Micro", expanded: "Microprocessors and Microcontrollers	" },
    btn16: { short: "DLD", expanded: "Digital Logic Design" },
    btn17: { short: "BGT", expanded: "Basic Graph Theory" },
    btn18: { short: "Compiler", expanded: "Compiler Design" },
  };

  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1 });
  }, [controls]);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleButtonClick = () => {
    window.open("https://green-roxane-91.tiiny.site/");
  };

  return (
    <div>
      {" "}
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <div className="container1">
          <div className="navbar">
            <div>
              <button className="btn1">About</button>
            </div>
            <div style={{ marginLeft: "20px" }}>
              <div className="vertical-line"></div>
            </div>
            <Link to={"/others"}>
              {" "}
              <div style={{ marginLeft: "20px" }}>
                <button className="btn1">Others</button>
              </div>
            </Link>
            <div style={{ marginLeft: "20px" }}>
              <div className="vertical-line"></div>
            </div>
            <div style={{ marginLeft: "20px" }}>
              <button onClick={handleButtonClick} className="btn1">
                Résumé
              </button>
            </div>
          </div>
          <div className="container2">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
              }}
            >
              <p
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "#002147",
                }}
              >
                Amit Datta
              </p>
              <p
                className="p-container"
                style={{
                  color: "#8c9dad",
                  marginTop: "-25px",
                  display: "flex",
                  flexWrap: "wrap",
                  maxWidth: "370px",
                }}
              >
                <span>Web Developer, </span> &nbsp; <span>Programmer, </span>
                &nbsp;<span> UI/UX Designer</span>
              </p>
              <div style={{ display: "flex", marginTop: "-10px" }}>
                <img
                  style={{ marginTop: "-3px" }}
                  src="./location.svg"
                  alt=""
                />{" "}
                &nbsp;{" "}
                <span style={{ color: "#8c9dad" }}>Dhaka, Bangladesh</span>{" "}
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  maxWidth: "300px",
                  marginTop: "5px",
                  flexWrap: "wrap",
                }}
              >
                <button className="btn2">facebook</button>
                <button className="btn7">Github</button>
                <button className="btn4">linkedin</button>
              </div>{" "}
              <br />
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  maxWidth: "350px",
                  marginTop: "-15px",
                  flexWrap: "wrap",
                }}
              >
                <button className="btn3">instagram</button>
                <button className="btn5">twitter</button>
                <button className="btn6">whatsapp</button>
                <button className="btn8">email</button>
              </div>
            </div>
            <div>
              <img src="./img2.jpg" alt="" className="container-img" />
            </div>
          </div>
          <div>
            <p
              style={{ fontSize: "20px", fontWeight: "bold", color: "#002147" }}
            >
              About
            </p>
            <p
              style={{
                color: "#8c9dad",
                marginTop: "-20px",
                textAlign: "justify",
              }}
            >
              Enthusiastic and aspiring MERN Stack Developer with a passion for
              developing engaging web applications. Currently in the early
              stages of building a foundation inweb development and eager to
              contribute skills inMongoDB, ExpressJS, React, and NodeJS to
              dynamicprojects. Striving to become a proficient web developerin
              the upcoming years through continuous learningand growth. I enjoy
              making UI designs too
            </p>
          </div>
          <div className="container-ed">
            <p
              style={{ fontSize: "20px", fontWeight: "bold", color: "#002147" }}
            >
              Education
            </p>
            <div>
              {" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "-35px",
                }}
              >
                {" "}
                <button className="btn-uiu">
                  United Internation University
                </button>{" "}
                <p style={{ color: "#8c9dad" }}>2019-2024</p>
              </div>
              <p style={{ color: "#8c9dad", marginTop: "-12px" }}>
                Bachelor's Degree in Computer Science & Engineering
              </p>
              <div
                style={{
                  gap: "10px",
                  display: "flex",
                  flexWrap: "wrap",
                  maxWidth: "1600px",
                  marginTop: "-12px",
                }}
              >
                {Object.keys(buttonData).map((buttonId) => (
                  <button
                    key={buttonId}
                    className="sub-btn1"
                    // onMouseEnter={() => handleMouseEnter(buttonId)}
                    // onMouseLeave={handleMouseLeave}
                  >
                    {buttonData[buttonId].expanded}
                  </button>
                ))}
              </div>
            </div>{" "}
            <br /> <br />
            <div>
              {" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "-35px",
                }}
              >
                {" "}
                <button className="btn-uiu">
                  Bangladesh Navy College
                </button>{" "}
                <p style={{ color: "#8c9dad" }}>2016-2018</p>
              </div>
              <p style={{ color: "#8c9dad", marginTop: "-12px" }}>
                Higher Secondary Certificate {"(Science)"}
              </p>
            </div>
            <br />
            <div>
              {" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "-35px",
                }}
              >
                {" "}
                <button disabled className="btn-uiu">
                  Badda Alatunnesa Higher Secondary School
                </button>{" "}
                <p style={{ color: "#8c9dad" }}>2014-2016</p>
              </div>
              <p style={{ color: "#8c9dad", marginTop: "-12px" }}>
                Secondary School Certificate {"(Science)"}
              </p>
            </div>
          </div>{" "}
          <br />
          <motion.div className="container-in">
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#002147",
                marginTop: "-10px",
              }}
            >
              Interests
            </p>
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "-12px",
                flexWrap: "wrap",
              }}
            >
              <button className="sub-btn1">Full Stack Web Development</button>
              <button className="sub-btn1">Problem Solving</button>
              <button className="sub-btn1">UI/UX Design</button>
              <button className="sub-btn1">Human Computer Interaction</button>
              <button className="sub-btn1">Machine Learning</button>
            </div>
          </motion.div>
          <br />
          <motion.div className="container-sk">
            <p
              style={{ fontSize: "20px", fontWeight: "bold", color: "#002147" }}
            >
              Technical Skills
            </p>
            <div>
              {" "}
              <p className="skill-btn">Programming Languages</p>{" "}
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "-12px",
                  flexWrap: "wrap",
                }}
              >
                <button className="sub-btn1">Javascript</button>
                <button className="sub-btn1">C</button>
                <button className="sub-btn1">C++</button>
                <button className="sub-btn1">Java</button>
                <button className="sub-btn1">Python</button>
                <button className="sub-btn1">PHP</button>
              </div>{" "}
              <br />
              <p className="skill-btn">Web Technologies</p>{" "}
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "-12px",
                  flexWrap: "wrap",
                }}
              >
                <button className="sub-btn1">React</button>
                <button className="sub-btn1">ExpressJS</button>
                <button className="sub-btn1">NodeJS</button>
                <button className="sub-btn1">HTML</button>
                <button className="sub-btn1">CSS</button>
                <button className="sub-btn1">TailwindCSS</button>
                <button className="sub-btn1">DaisyUI</button>
              </div>
              <br />
              <p className="skill-btn">Database</p>{" "}
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "-12px",
                  flexWrap: "wrap",
                }}
              >
                <button className="sub-btn1">MongoDB</button>
                <button className="sub-btn1">MySQL</button>
              </div>
              <br />
              <p className="skill-btn">Other Technologies</p>{" "}
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "-12px",
                  flexWrap: "wrap",
                }}
              >
                <button className="sub-btn1">Git</button>
                <button className="sub-btn1">NPM</button>
                <button className="sub-btn1">Figma</button>
                <button className="sub-btn1">Photoshop</button>
              </div>
            </div>
          </motion.div>
          <br />
          <motion.div className="container-p">
            <p
              style={{ fontSize: "20px", fontWeight: "bold", color: "#002147" }}
            >
              Projects
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
                gap: "20px",
              }}
            >
              <div className="container-p2">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {" "}
                  <p className="p1">NeighborServe</p>{" "}
                  <Link
                    to={"https://github.com/AmitDattaShuvo119/NeighborServe"}
                  >
                    {" "}
                    <img
                      src="./git.svg"
                      style={{
                        height: "10px",
                        width: "auto",
                        marginTop: "17px",
                        marginRight: "12px",
                      }}
                      alt=""
                    />
                  </Link>
                </div>

                <p style={{ marginTop: "-10px", marginLeft: "12px" }}>
                  Neighborserve is a smart web application and a local service
                  marketplace that optimizes connections between providers and
                  seekers . Offering smart recommendations based on location and
                  other attributes , the platform ensures a secure and
                  interactive environment . Verified badges enhance trust ,
                  while features like reminders and quick service provider
                  responsiveness streamline the hiring process
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    marginLeft: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <button className="sub-btn1">react</button>
                  <button className="sub-btn1">expressJS</button>
                  <button className="sub-btn1">nodeJS</button>
                  <button className="sub-btn1">mongoDB</button>
                  <button className="sub-btn1">tailwindCSS</button>
                  <button className="sub-btn1">flask</button>
                  <button className="sub-btn1">sckit-learn</button>
                  <button className="sub-btn1">python</button>
                  <button className="sub-btn1">daisyUI</button>
                </div>
              </div>
              <div className="container-p2">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {" "}
                  <p className="p1">A2Z wholesale e-commerce</p>{" "}
                  <Link
                    to={
                      "https://github.com/AmitDattaShuvo119/A2Z-Wholesale-E-commerce"
                    }
                  >
                    {" "}
                    <img
                      src="./git.svg"
                      style={{
                        height: "10px",
                        width: "auto",
                        marginTop: "17px",
                        marginRight: "12px",
                      }}
                      alt=""
                    />
                  </Link>
                </div>

                <p
                  style={{
                    marginTop: "-10px",
                    marginLeft: "12px",
                  }}
                >
                  A2Z is an innovative eCommerce site designed for a seamless
                  shopping experience . It comes with basic eCommerce features
                  like product browsing , cart , payment gateway , order
                  tracking etc
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    marginLeft: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <button className="sub-btn1">javascript</button>
                  <button className="sub-btn1">expressJS</button>
                  <button className="sub-btn1">nodeJS</button>
                  <button className="sub-btn1">tailwindCSS</button>
                  <button className="sub-btn1">mysql</button>
                </div>
              </div>
              <div className="container-p2">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {" "}
                  <p className="p1">UIU Room Finder</p>{" "}
                  <Link
                    to={"https://github.com/AmitDattaShuvo119/UIU-RoomFinder"}
                  >
                    {" "}
                    <img
                      src="./git.svg"
                      style={{
                        height: "10px",
                        width: "auto",
                        marginTop: "17px",
                        marginRight: "12px",
                      }}
                      alt=""
                    />
                  </Link>
                </div>

                <p style={{ marginTop: "-10px", marginLeft: "12px" }}>
                  UIU Room Finder , a microcontroller project, streamlines
                  campus navigation . Users effortlessly locate room location ,
                  serving as a directional guide from any floor within the
                  university campus . This innovative solution enhances the
                  overall user experience by providing efficient room
                  identification and guidance
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    marginLeft: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <button className="sub-btn1">c++</button>
                  <button className="sub-btn1">arduino</button>
                  <button className="sub-btn1">barometer</button>
                  <button className="sub-btn1">accelerometer</button>
                  <button className="sub-btn1">compass</button>
                  <button className="sub-btn1">lcd</button>
                  <button className="sub-btn1">keypads</button>
                </div>
              </div>
            </div>
          </motion.div>{" "}
          <br />
          <button
            style={{
              height: "70px",
              width: "100%",
              border: "none",
              borderRadius: "15px",
              fontSize: "22px",
            }}
            className="container-pq"
            onClick={scrollToTop}
          >
            Click to scroll up ↑
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Landingpage;
