import React from "react";
import { useNavigate } from "react-router-dom";

const CompanyTitle = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className="companyTitle" onClick={handleClick}>
      <p>Hanger & Bag</p>
    </div>
  );
};

export default CompanyTitle;
