import React from "react";
import "./loader.css"; 

const Loader: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="typing-indicator">
        <div className="typing-circle"></div>
        <div className="typing-circle"></div>
        <div className="typing-circle"></div>
        <div className="typing-shadow"></div>
        <div className="typing-shadow"></div>
        <div className="typing-shadow"></div>
      </div>
    </div>
  );
};

export default Loader;

