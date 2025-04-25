import React from 'react';
import './YesPage.css'; // Make sure to import the CSS file where the styles live

export const YesPage = () => {
  return (
    <div>
      <div className="night"></div>
      <div className="neon-text">
        Cảm ơn bạn vì đã ở trong hiện tại và cả tương lai của mình
      </div>
      <div className="flowers">
        <div className="flower flower--1">
          <div className="flower__leafs flower__leafs--1">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`flower__leaf flower__leaf--${i}`}></div>
            ))}
            <div className="flower__white-circle"></div>
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`flower__light flower__light--${i + 1}`}></div>
            ))}
          </div>
          <div className="flower__line">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className={`flower__line__leaf flower__line__leaf--${i}`}></div>
            ))}
          </div>
        </div>

        <div className="flower flower--2">
          <div className="flower__leafs flower__leafs--2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`flower__leaf flower__leaf--${i}`}></div>
            ))}
            <div className="flower__white-circle"></div>
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`flower__light flower__light--${i + 1}`}></div>
            ))}
          </div>
          <div className="flower__line">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`flower__line__leaf flower__line__leaf--${i}`}></div>
            ))}
          </div>
        </div>

        <div className="flower flower--3">
          <div className="flower__leafs flower__leafs--3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`flower__leaf flower__leaf--${i}`}></div>
            ))}
            <div className="flower__white-circle"></div>
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`flower__light flower__light--${i + 1}`}></div>
            ))}
          </div>
          <div className="flower__line">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`flower__line__leaf flower__line__leaf--${i}`}></div>
            ))}
          </div>
        </div>

        <div className="grow-ans" style={{ "--d": "1.2s" }}>
          <div className="flower__g-long">
            <div className="flower__g-long__top"></div>
            <div className="flower__g-long__bottom"></div>
          </div>
        </div>

        {[1, 2].map((g) => (
          <div key={g} className="growing-grass">
            <div className={`flower__grass flower__grass--${g}`}>
              <div className="flower__grass--top"></div>
              <div className="flower__grass--bottom"></div>
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`flower__grass__leaf flower__grass__leaf--${i + 1}`}></div>
              ))}
              <div className="flower__grass__overlay"></div>
            </div>
          </div>
        ))}

        <div className="grow-ans" style={{ "--d": "2.4s" }}>
          <div className="flower__g-right flower__g-right--1">
            <div className="leaf"></div>
          </div>
        </div>

        <div className="grow-ans" style={{ "--d": "2.8s" }}>
          <div className="flower__g-right flower__g-right--2">
            <div className="leaf"></div>
          </div>
        </div>

        <div className="grow-ans" style={{ "--d": "2.8s" }}>
          <div className="flower__g-front">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--${i}`}
              >
                <div className="flower__g-front__leaf"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

