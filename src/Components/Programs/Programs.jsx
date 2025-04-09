import React from "react";
import { useNavigate } from "react-router-dom";
import "./Programs.css";
import program_1 from "../../assets/valve_main.png";
import program_2 from "../../assets/shower_main.png";
import program_3 from "../../assets/Faucet_main.png";
import program_4 from "../../assets/Connection_Main.png"
import program_5 from "../../assets/CP5.jpg"
import program_6 from "../../assets/Allied14.jpg"
import program_7 from "../../assets/MS1-Main.png"
import program_8 from "../../assets/BF1.jpg"
import Footer from "../../Components/Footer/Footer.jsx";
import Heading from "./Heading.jsx"; 

const programsData = [
  { img: program_1, title: "Valves", path: "/Valves" },
  { img: program_2, title: "Showers", path: "/Showers" },
  { img: program_3, title: "Health Faucets", path: "/Health_Faucets" },
  { img: program_4, title: "Connections", path: "/Connections" },
  { img: program_5, title: "CP Bath Accessories", path: "/CP_Bath_Accessories" },
  { img: program_6, title: "Allied Items", path: "/Allied_Items" },
  { img: program_7, title: "MS | GI and other fittings", path: "/MS_GI" },
  { img: program_8, title: "CP Bathroom Fittings", path: "/CP_Bath_Fittings" },
];

const Programs = () => {
  const navigate = useNavigate();

  const handleProgramClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Heading title="What We Offer" />
      <div className="programs">
      {programsData.map((program, index) => (
          <div
            className="program"
            key={index}
            onClick={() => handleProgramClick(program.path)}
          >
            <img src={program.img} alt={program.title} />
            <div className="caption">
              <p>{program.title}</p>
            </div>
            <div className="program-title">
              {program.title}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Programs;
