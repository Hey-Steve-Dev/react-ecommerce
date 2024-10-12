import React from "react";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/shop"); // Navigate to /shop page
  };

  return (
    <button className="callToAction round-button" onClick={handleClick}>
      Shop
    </button>
  );
};

export default CallToAction;
