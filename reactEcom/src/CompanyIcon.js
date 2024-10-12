import React from "react";
import companyLogo from "./Images/CompanyLogo.png";
import { useNavigate } from "react-router-dom";

// ItemImage component to display the item image
const CompanyLogo = ({}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home"); // Navigate to /home page
  };

  return (
    <div className="companyLogo">
      <img
        src={companyLogo}
        alt="logo"
        style={{ width: "50px", cursor: "pointer" }}
        onClick={handleClick} // Correctly use the onClick event here
      />
    </div>
  );
};

export default CompanyLogo;
