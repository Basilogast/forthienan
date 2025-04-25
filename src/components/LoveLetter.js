import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoveLetter.css";

export const LoveLetter = () => {
  const [isFlapped, setIsFlapped] = useState(false);
  const navigate = useNavigate();

  const toggleFlap = () => {
    setIsFlapped(!isFlapped);
  };

  const handleClick = async (button) => {
    try {
      await fetch("/api/trackClicks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ button }),
      });
    } catch (error) {
      console.error("Error tracking click:", error);
    }

    if (button === "yes") {
      navigate("/yes");
    } else {
      navigate("/no");
    }
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
        <div className="buttons">
          <button className="btn" id="yesButton" onClick={() => handleClick("yes")}>
            Cóa
          </button>
          <button className="btn" id="noButton" onClick={() => handleClick("no")}>
            Hum
          </button>
        </div>
      </div>
    </div>
  );
};