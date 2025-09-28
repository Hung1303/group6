import React from 'react';
import './VietnamTheme.css';

const VietnamTheme: React.FC = () => {
  return (
    <div className="vietnam-theme">
      {/* Vietnam Flag Pattern Background */}
      <div className="flag-pattern">
        <div className="flag-stripe red"></div>
        <div className="flag-stripe gold"></div>
        <div className="flag-stripe red"></div>
      </div>
      
      {/* Floating Vietnam Elements */}
      <div className="floating-elements">
        <div className="floating-star">⭐</div>
        <div className="floating-star">⭐</div>
        <div className="floating-star">⭐</div>
        <div className="floating-star">⭐</div>
        <div className="floating-star">⭐</div>
      </div>
      
      {/* Vietnam Cultural Elements */}
      <div className="cultural-elements">
        <div className="cultural-icon">🏮</div>
        <div className="cultural-icon">🎋</div>
        <div className="cultural-icon">🌸</div>
        <div className="cultural-icon">🌺</div>
      </div>
    </div>
  );
};

export default VietnamTheme;
