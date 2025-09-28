import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="vietnam-footer">
      {/* Vietnam Flag Pattern */}
      <div className="footer-flag-pattern">
        <div className="flag-stripe red"></div>
        <div className="flag-stripe gold"></div>
        <div className="flag-stripe red"></div>
      </div>
      
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo Section */}
          <div className="footer-section footer-logo">
            <div className="footer-brand">
              <span className="footer-icon">🇻🇳</span>
              <h3>Cơ cấu xã hội</h3>
            </div>
            <p className="footer-description">
              Nghiên cứu về cơ cấu xã hội, giai cấp và liên minh giai cấp 
              trong thời kỳ quá độ lên chủ nghĩa xã hội
            </p>
            <div className="footer-social">
              <span className="social-label">Theo dõi chúng tôi:</span>
              <div className="social-icons">
                <span className="social-icon">📚</span>
                <span className="social-icon">🎓</span>
                <span className="social-icon">📖</span>
                <span className="social-icon">💡</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-section footer-links">
            <h4>Điều hướng</h4>
            <ul className="footer-nav">
              <li><Link to="/" className="footer-link">🏠 Trang chủ</Link></li>
              <li><Link to="/introduction" className="footer-link">📖 Giới thiệu</Link></li>
              <li><Link to="/theory" className="footer-link">📚 Lý thuyết</Link></li>
              <li><Link to="/practice" className="footer-link">💼 Thực tiễn</Link></li>
              <li><Link to="/quiz" className="footer-link">❓ Quiz</Link></li>
            </ul>
          </div>

          {/* Content Sections */}
          <div className="footer-section footer-content-info">
            <h4>Nội dung chính</h4>
            <ul className="footer-content-list">
              <li>🌟 Lý thuyết cơ bản</li>
              <li>🔗 Liên hệ thực tiễn</li>
              <li>📝 Quiz trắc nghiệm</li>
              <li>📋 Giới thiệu tổng quan</li>
              <li>🎯 Mục tiêu học tập</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section footer-contact">
            <h4>Thông tin</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📅</span>
                <span>Năm 2025</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🎓</span>
                <span>Giáo dục chính trị</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🇻🇳</span>
                <span>Việt Nam</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📚</span>
                <span>Chủ nghĩa xã hội</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <span className="copyright-icon">©</span>
              <span>2025 - Cơ cấu xã hội và Giai cấp trong thời kỳ quá độ</span>
            </div>
            <div className="footer-motto">
              <span className="motto-text">"Đoàn kết - Phát triển - Tiến bộ"</span>
              <span className="motto-icon">🇻🇳</span>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="footer-decorations">
            <div className="decoration-star">⭐</div>
            <div className="decoration-star">⭐</div>
            <div className="decoration-star">⭐</div>
            <div className="decoration-star">⭐</div>
            <div className="decoration-star">⭐</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
