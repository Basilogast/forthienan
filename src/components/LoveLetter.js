import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./LoveLetter.css";
import loveSong from "../assets/audio/nguhoitanhy.MP3";

export const LoveLetter = () => {
  const [isFlapped, setIsFlapped] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // State to track if audio is playing
  const navigate = useNavigate();
  const audioRef = useRef(null);

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

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause(); // Pause the audio
        setIsPlaying(false); // Update state
      } else {
        audioRef.current.play(); // Play the audio
        setIsPlaying(true); // Update state
      }
    }
  };

  return (
    <div>
      <div className="container">
        {/* Add the audio player */}
        <div className="audio-player">
          <audio ref={audioRef} src={loveSong} preload="auto"></audio>
          <button className="btn" onClick={toggleAudio}>
            {isPlaying ? "Ồn quá hem" : "Nhạc nè"} {/* Toggle button text */}
          </button>
        </div>
        <div
          className={`envelope-wrapper ${isFlapped ? "flap" : ""}`}
          onClick={toggleFlap}
        >
          <div className="envelope">
            <div className="letter">
              <div className="text">
                <strong>Gửi pạn Thiên Ân,</strong>
                <p>
                  Để phần ngại ngùng tớ lo cho, cậu chỉ cần cho tớ trở thành 1 phần trong
                  tương lai của cậu là được rùi:3, nhaa?
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