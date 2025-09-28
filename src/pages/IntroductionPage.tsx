import React from 'react';
import Footer from '../components/Footer';
import './IntroductionPage.css';

const IntroductionPage: React.FC = () => {
  return (
    <div className="introduction-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                Cơ cấu xã hội - Giai cấp và Liên minh giai cấp
              </h1>
              <p className="hero-subtitle">
                Trong thời kỳ quá độ lên chủ nghĩa xã hội
              </p>
              <div className="hero-description">
                <p>
                  Khám phá sự biến đổi sâu sắc của cơ cấu xã hội, mối quan hệ giai cấp 
                  và sự hình thành liên minh giai cấp trong quá trình xây dựng chủ nghĩa xã hội
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {/* Overview Section */}
          <section className="overview-section">
            <h2>Tổng quan về chủ đề</h2>
            <div className="overview-content">
              <div className="overview-text">
                <p>
                  Cơ cấu xã hội trong thời kỳ quá độ lên chủ nghĩa xã hội là một vấn đề 
                  lý luận và thực tiễn quan trọng, có ý nghĩa sâu sắc đối với việc 
                  xây dựng chủ nghĩa xã hội. Đây là giai đoạn chuyển tiếp từ xã hội 
                  có giai cấp đối kháng sang xã hội không còn giai cấp đối kháng.
                </p>
                <p>
                  Trong thời kỳ này, cơ cấu xã hội có những biến đổi sâu sắc và toàn diện, 
                  hình thành những giai cấp, tầng lớp mới phù hợp với yêu cầu phát triển 
                  của chủ nghĩa xã hội.
                </p>
              </div>
              <div className="overview-image">
                <div className="image-placeholder">
                  <div className="placeholder-icon">🏛️</div>
                  <p>Cơ cấu xã hội mới</p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Concepts */}
          <section className="concepts-section">
            <h2>Khái niệm cơ bản</h2>
            <div className="concepts-grid">
              <div className="concept-card">
                <div className="concept-icon">👥</div>
                <h3>Cơ cấu xã hội</h3>
                <p>
                  Là tổng thể các giai cấp, tầng lớp xã hội và mối quan hệ giữa chúng 
                  trong một xã hội nhất định.
                </p>
              </div>
              
              <div className="concept-card">
                <div className="concept-icon">⚖️</div>
                <h3>Giai cấp</h3>
                <p>
                  Là những tập đoàn người lớn, khác nhau về địa vị của họ trong một 
                  hệ thống sản xuất xã hội nhất định.
                </p>
              </div>
              
              <div className="concept-card">
                <div className="concept-icon">🤝</div>
                <h3>Liên minh giai cấp</h3>
                <p>
                  Là sự liên kết, hợp tác giữa các giai cấp, tầng lớp xã hội 
                  trên cơ sở lợi ích chung.
                </p>
              </div>
              
              <div className="concept-card">
                <div className="concept-icon">🔄</div>
                <h3>Thời kỳ quá độ</h3>
                <p>
                  Là giai đoạn chuyển tiếp từ chế độ cũ sang chế độ mới, 
                  mang tính chất của cả hai chế độ.
                </p>
              </div>
            </div>
          </section>

          {/* Main Classes */}
          <section className="classes-section">
            <h2>Các giai cấp, tầng lớp chính</h2>
            <div className="classes-container">
              <div className="class-card primary">
                <div className="class-header">
                  <div className="class-icon">👷</div>
                  <h3>Giai cấp công nhân</h3>
                </div>
                <div className="class-content">
                  <h4>Đặc điểm:</h4>
                  <ul>
                    <li>Là sản phẩm của nền đại công nghiệp</li>
                    <li>Là lực lượng sản xuất tiên tiến nhất</li>
                    <li>Có tính tổ chức, kỷ luật cao</li>
                    <li>Có ý thức giai cấp rõ ràng</li>
                  </ul>
                  <h4>Vai trò:</h4>
                  <p>Là giai cấp lãnh đạo cách mạng, đại diện cho phương thức sản xuất tiên tiến.</p>
                </div>
              </div>

              <div className="class-card secondary">
                <div className="class-header">
                  <div className="class-icon">🌾</div>
                  <h3>Giai cấp nông dân</h3>
                </div>
                <div className="class-content">
                  <h4>Đặc điểm:</h4>
                  <ul>
                    <li>Là lực lượng lao động đông đảo nhất</li>
                    <li>Có mối liên hệ chặt chẽ với đất đai</li>
                    <li>Có tính chất phân tán, nhỏ lẻ</li>
                    <li>Là đồng minh tự nhiên của giai cấp công nhân</li>
                  </ul>
                  <h4>Vai trò:</h4>
                  <p>Là đồng minh tin cậy của giai cấp công nhân, đóng góp quan trọng vào phát triển kinh tế.</p>
                </div>
              </div>

              <div className="class-card tertiary">
                <div className="class-header">
                  <div className="class-icon">🎓</div>
                  <h3>Tầng lớp trí thức</h3>
                </div>
                <div className="class-content">
                  <h4>Đặc điểm:</h4>
                  <ul>
                    <li>Có trình độ học vấn, chuyên môn cao</li>
                    <li>Làm việc chủ yếu bằng trí óc</li>
                    <li>Có tính sáng tạo, đổi mới</li>
                    <li>Có ý thức xã hội cao</li>
                  </ul>
                  <h4>Vai trò:</h4>
                  <p>Là lực lượng quan trọng trong cách mạng khoa học - kỹ thuật, truyền bá tri thức.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Alliance Section */}
          <section className="alliance-section">
            <h2>Liên minh giai cấp</h2>
            <div className="alliance-content">
              <div className="alliance-intro">
                <p>
                  Liên minh công - nông - trí là hình thức liên minh giai cấp cơ bản 
                  trong thời kỳ quá độ lên chủ nghĩa xã hội, dưới sự lãnh đạo của Đảng Cộng sản.
                </p>
              </div>
              
              <div className="alliance-structure">
                <div className="alliance-center">
                  <div className="center-item">
                    <div className="center-icon">👷</div>
                    <h4>Giai cấp công nhân</h4>
                    <p>Lãnh đạo</p>
                  </div>
                </div>
                
                <div className="alliance-branches">
                  <div className="branch-item">
                    <div className="branch-icon">🌾</div>
                    <h4>Giai cấp nông dân</h4>
                    <p>Đồng minh</p>
                  </div>
                  
                  <div className="branch-item">
                    <div className="branch-icon">🎓</div>
                    <h4>Tầng lớp trí thức</h4>
                    <p>Đồng minh</p>
                  </div>
                </div>
              </div>
              
              <div className="alliance-principles">
                <h3>Nguyên tắc liên minh</h3>
                <div className="principles-grid">
                  <div className="principle-item">
                    <h4>Nguyên tắc lãnh đạo</h4>
                    <p>Giai cấp công nhân lãnh đạo liên minh thông qua Đảng Cộng sản</p>
                  </div>
                  
                  <div className="principle-item">
                    <h4>Nguyên tắc tự nguyện</h4>
                    <p>Dựa trên sự tự nguyện, tự giác của các thành viên</p>
                  </div>
                  
                  <div className="principle-item">
                    <h4>Nguyên tắc bình đẳng</h4>
                    <p>Các thành viên bình đẳng trong liên minh</p>
                  </div>
                  
                  <div className="principle-item">
                    <h4>Nguyên tắc cùng có lợi</h4>
                    <p>Đảm bảo lợi ích của tất cả thành viên</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Transition Period */}
          <section className="transition-section">
            <h2>Đặc điểm thời kỳ quá độ</h2>
            <div className="transition-content">
              <div className="transition-intro">
                <p>
                  Thời kỳ quá độ lên chủ nghĩa xã hội có những đặc điểm riêng biệt, 
                  khác với các giai đoạn lịch sử khác.
                </p>
              </div>
              
              <div className="transition-features">
                <div className="feature-item">
                  <div className="feature-icon">🔄</div>
                  <h3>Tính chất chuyển tiếp</h3>
                  <p>
                    Là giai đoạn chuyển từ chế độ cũ sang chế độ mới, 
                    vừa mang tính chất của chế độ cũ vừa mang tính chất của chế độ mới.
                  </p>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">🧩</div>
                  <h3>Tính chất phức tạp</h3>
                  <p>
                    Còn tồn tại nhiều thành phần kinh tế, nhiều giai cấp, tầng lớp 
                    với lợi ích khác nhau.
                  </p>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">⏳</div>
                  <h3>Tính chất lâu dài</h3>
                  <p>
                    Là một quá trình lịch sử lâu dài, phức tạp, 
                    đòi hỏi sự kiên trì và quyết tâm cao.
                  </p>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">⚡</div>
                  <h3>Tính chất cách mạng</h3>
                  <p>
                    Là một cuộc cách mạng sâu sắc, toàn diện, 
                    thay đổi căn bản cơ cấu xã hội.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Importance Section */}
          <section className="importance-section">
            <h2>Tầm quan trọng của chủ đề</h2>
            <div className="importance-content">
              <div className="importance-intro">
                <p>
                  Nghiên cứu về cơ cấu xã hội, giai cấp và liên minh giai cấp có ý nghĩa 
                  lý luận và thực tiễn quan trọng trong việc xây dựng chủ nghĩa xã hội.
                </p>
              </div>
              
              <div className="importance-points">
                <div className="point-item">
                  <div className="point-icon">🎯</div>
                  <h3>Định hướng phát triển</h3>
                  <p>
                    Giúp xác định đúng hướng phát triển của xã hội, 
                    đảm bảo tính ổn định và bền vững.
                  </p>
                </div>
                
                <div className="point-item">
                  <div className="point-icon">🤝</div>
                  <h3>Đoàn kết xã hội</h3>
                  <p>
                    Tạo cơ sở cho việc xây dựng khối đại đoàn kết toàn dân tộc, 
                    phát huy sức mạnh tổng hợp.
                  </p>
                </div>
                
                <div className="point-item">
                  <div className="point-icon">⚖️</div>
                  <h3>Công bằng xã hội</h3>
                  <p>
                    Đảm bảo sự công bằng trong phân phối lợi ích, 
                    tạo động lực phát triển cho tất cả các giai cấp, tầng lớp.
                  </p>
                </div>
                
                <div className="point-item">
                  <div className="point-icon">🚀</div>
                  <h3>Phát triển bền vững</h3>
                  <p>
                    Tạo điều kiện cho sự phát triển hài hòa, bền vững 
                    của toàn xã hội trong quá trình xây dựng chủ nghĩa xã hội.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Learning Path */}
          <section className="learning-section">
            <h2>Lộ trình học tập</h2>
            <div className="learning-path">
              <div className="path-item">
                <div className="path-number">1</div>
                <div className="path-content">
                  <h3>Lý thuyết cơ bản</h3>
                  <p>Nắm vững các khái niệm, nguyên lý cơ bản về cơ cấu xã hội và giai cấp</p>
                </div>
              </div>
              
              <div className="path-item">
                <div className="path-number">2</div>
                <div className="path-content">
                  <h3>Liên hệ thực tiễn</h3>
                  <p>Áp dụng lý thuyết vào thực tế, học hỏi kinh nghiệm từ các nước</p>
                </div>
              </div>
              
              <div className="path-item">
                <div className="path-number">3</div>
                <div className="path-content">
                  <h3>Kiểm tra kiến thức</h3>
                  <p>Đánh giá mức độ hiểu biết thông qua các bài quiz và câu hỏi</p>
                </div>
              </div>
              
              <div className="path-item">
                <div className="path-number">4</div>
                <div className="path-content">
                  <h3>Ứng dụng thực tế</h3>
                  <p>Vận dụng kiến thức vào công việc và cuộc sống hàng ngày</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default IntroductionPage;
