import React from 'react';
import Footer from '../components/Footer';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Cơ cấu xã hội - Giai cấp và Liên minh giai cấp, tầng lớp
          </h1>
          <p className="hero-subtitle">
            Trong thời kỳ quá độ lên chủ nghĩa xã hội
          </p>
          <div className="hero-description">
            <p>
              Nghiên cứu về sự biến đổi cơ cấu xã hội, mối quan hệ giai cấp và 
              sự hình thành liên minh giai cấp trong quá trình xây dựng chủ nghĩa xã hội
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Introduction Section */}
        <section className="intro-section">
          <div className="container">
            <h2>Giới thiệu</h2>
            <div className="intro-content">
              <p>
                Trong thời kỳ quá độ lên chủ nghĩa xã hội, cơ cấu xã hội có những biến đổi 
                sâu sắc và toàn diện. Sự phân hóa giai cấp cũ dần được xóa bỏ, đồng thời 
                hình thành những giai cấp, tầng lớp mới phù hợp với yêu cầu phát triển 
                của chủ nghĩa xã hội.
              </p>
            </div>
          </div>
        </section>

        {/* Social Structure Section */}
        <section className="structure-section">
          <div className="container">
            <h2>Cơ cấu xã hội trong thời kỳ quá độ</h2>
            <div className="structure-grid">
              <div className="structure-card">
                <h3>Giai cấp công nhân</h3>
                <p>
                  Là giai cấp lãnh đạo cách mạng, đại diện cho lực lượng sản xuất tiên tiến, 
                  có vai trò quyết định trong việc xây dựng chủ nghĩa xã hội.
                </p>
                <ul>
                  <li>Đội ngũ công nhân kỹ thuật</li>
                  <li>Công nhân sản xuất</li>
                  <li>Công nhân dịch vụ</li>
                </ul>
              </div>

              <div className="structure-card">
                <h3>Giai cấp nông dân</h3>
                <p>
                  Là đồng minh tin cậy của giai cấp công nhân, có vai trò quan trọng 
                  trong phát triển nông nghiệp và nông thôn.
                </p>
                <ul>
                  <li>Nông dân tập thể</li>
                  <li>Nông dân cá thể</li>
                  <li>Nông dân hợp tác xã</li>
                </ul>
              </div>

              <div className="structure-card">
                <h3>Tầng lớp trí thức</h3>
                <p>
                  Là lực lượng quan trọng trong sự nghiệp xây dựng chủ nghĩa xã hội, 
                  đóng góp tri thức và kỹ thuật.
                </p>
                <ul>
                  <li>Trí thức khoa học</li>
                  <li>Trí thức văn hóa</li>
                  <li>Trí thức kỹ thuật</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Class Alliance Section */}
        <section className="alliance-section">
          <div className="container">
            <h2>Liên minh giai cấp và tầng lớp</h2>
            <div className="alliance-content">
              <div className="alliance-principles">
                <h3>Nguyên tắc liên minh</h3>
                <div className="principles-grid">
                  <div className="principle-item">
                    <h4>Liên minh công - nông - trí</h4>
                    <p>
                      Liên minh giữa giai cấp công nhân, nông dân và tầng lớp trí thức 
                      dưới sự lãnh đạo của Đảng Cộng sản.
                    </p>
                  </div>
                  <div className="principle-item">
                    <h4>Đoàn kết dân tộc</h4>
                    <p>
                      Xây dựng khối đại đoàn kết toàn dân tộc trên cơ sở liên minh 
                      giai cấp vững chắc.
                    </p>
                  </div>
                  <div className="principle-item">
                    <h4>Đồng thuận xã hội</h4>
                    <p>
                      Tạo sự đồng thuận trong xã hội về mục tiêu xây dựng chủ nghĩa xã hội.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transition Period Section */}
        <section className="transition-section">
          <div className="container">
            <h2>Đặc điểm thời kỳ quá độ</h2>
            <div className="transition-features">
              <div className="feature-item">
                <div className="feature-icon">🔄</div>
                <h3>Biến đổi cơ cấu</h3>
                <p>
                  Chuyển từ cơ cấu xã hội cũ sang cơ cấu xã hội mới, 
                  xóa bỏ sự phân hóa giai cấp đối kháng.
                </p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🤝</div>
                <h3>Hợp tác giai cấp</h3>
                <p>
                  Xây dựng mối quan hệ hợp tác, hỗ trợ lẫn nhau giữa 
                  các giai cấp và tầng lớp trong xã hội.
                </p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📈</div>
                <h3>Phát triển bền vững</h3>
                <p>
                  Đảm bảo sự phát triển hài hòa, bền vững của toàn xã hội 
                  trong quá trình xây dựng chủ nghĩa xã hội.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="challenges-section">
          <div className="container">
            <h2>Thách thức và giải pháp</h2>
            <div className="challenges-content">
              <div className="challenge-item">
                <h3>Thách thức</h3>
                <ul>
                  <li>Xóa bỏ tàn dư của chế độ cũ</li>
                  <li>Xây dựng ý thức xã hội chủ nghĩa</li>
                  <li>Phát triển lực lượng sản xuất</li>
                  <li>Đảm bảo công bằng xã hội</li>
                </ul>
              </div>
              <div className="challenge-item">
                <h3>Giải pháp</h3>
                <ul>
                  <li>Đẩy mạnh giáo dục và tuyên truyền</li>
                  <li>Phát triển kinh tế - xã hội toàn diện</li>
                  <li>Xây dựng nhà nước pháp quyền</li>
                  <li>Tăng cường đoàn kết dân tộc</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;