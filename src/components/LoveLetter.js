import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoveLetter.css"; // Ensure you create a CSS file for styling

export const LoveLetter = () => {
  const [isFlapped, setIsFlapped] = useState(false);
  const navigate = useNavigate();

  const toggleFlap = () => {
    setIsFlapped(!isFlapped);
  };

  return (
    <div>
      <div className="container">
        <div
          className={`envelope-wrapper ${isFlapped ? "flap" : ""}`}
          onClick={toggleFlap}
        >
          <div className="envelope">
            <div className="letter">
              <div className="text">
                <strong>Gửi pạn Thiên Ân,</strong>
                <p>
                  Lâu rùi mới làm web kiểu này :"3, hem biết t đoán có đúng hong, nhưng hì, cậu có thể
                  đồng ý làm tương lai của tớ hem?
                </p>
              </div>
            </div>
          </div>
          <div className="heart"></div>
        </div>
        <div className ="buttons">
          <button className ="btn" id="yesButton" onClick={() => navigate("/yes")}>
            Cóa
          </button>
          <button className ="btn" id="noButton" onClick={() => navigate("/no")}>
            Hum
          </button>
        </div>
      </div>
    </div>
  );
};
