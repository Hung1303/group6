import React from 'react';
import Footer from '../components/Footer';
import './PracticePage.css';

const PracticePage: React.FC = () => {
  return (
    <div className="practice-page">
      {/* Header Section */}
      <header className="practice-header">
        <div className="container">
          <h1>Liên hệ thực tiễn</h1>
          <p className="practice-subtitle">
            Cơ cấu xã hội - Giai cấp và Liên minh giai cấp trong thực tế
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="practice-content">
        <div className="container">
          {/* Vietnam Case Study */}
          <section className="practice-section">
            <h2>1. Thực tiễn tại Việt Nam</h2>
            
            <div className="case-study-card">
              <h3>1.1. Liên minh công - nông - trí trong cách mạng Việt Nam</h3>
              <div className="case-content">
                <p>
                  Trong lịch sử cách mạng Việt Nam, liên minh công - nông - trí đã được 
                  hình thành và phát triển qua các giai đoạn lịch sử khác nhau.
                </p>
                
                <div className="historical-timeline">
                  <div className="timeline-item">
                    <div className="timeline-year">1930-1945</div>
                    <div className="timeline-content">
                      <h4>Giai đoạn thành lập Đảng</h4>
                      <p>
                        Đảng Cộng sản Việt Nam được thành lập (1930) với sự tham gia của 
                        trí thức yêu nước, công nhân và nông dân. Liên minh được hình thành 
                        trong cuộc đấu tranh chống thực dân Pháp.
                      </p>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-year">1945-1954</div>
                    <div className="timeline-content">
                      <h4>Cách mạng Tháng Tám và kháng chiến chống Pháp</h4>
                      <p>
                        Liên minh công - nông - trí được củng cố và phát triển mạnh mẽ. 
                        Trí thức tham gia tích cực vào việc xây dựng chính quyền cách mạng, 
                        công nhân và nông dân là lực lượng chủ yếu của kháng chiến.
                      </p>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-year">1954-1975</div>
                    <div className="timeline-content">
                      <h4>Kháng chiến chống Mỹ</h4>
                      <p>
                        Liên minh được mở rộng và phát triển sâu rộng. Trí thức miền Nam 
                        tham gia tích cực vào cuộc kháng chiến, công nhân và nông dân 
                        là lực lượng nòng cốt của cách mạng.
                      </p>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-year">1975-nay</div>
                    <div className="timeline-content">
                      <h4>Thời kỳ xây dựng chủ nghĩa xã hội</h4>
                      <p>
                        Liên minh tiếp tục được củng cố và phát triển trong điều kiện mới. 
                        Trí thức đóng vai trò quan trọng trong công cuộc đổi mới, công nhân 
                        và nông dân là lực lượng chủ yếu xây dựng đất nước.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-study-card">
              <h3>1.2. Vai trò của các giai cấp, tầng lớp trong xây dựng đất nước</h3>
              <div className="case-content">
                <div className="role-analysis">
                  <div className="role-card">
                    <h4>Giai cấp công nhân</h4>
                    <div className="role-examples">
                      <h5>Ví dụ thực tế:</h5>
                      <ul>
                        <li>
                          <strong>Công nhân dầu khí:</strong> Đóng góp quan trọng vào 
                          nguồn thu ngân sách quốc gia, phát triển kinh tế biển.
                        </li>
                        <li>
                          <strong>Công nhân công nghiệp:</strong> Tham gia tích cực 
                          vào quá trình công nghiệp hóa, hiện đại hóa đất nước.
                        </li>
                        <li>
                          <strong>Công nhân xây dựng:</strong> Góp phần xây dựng 
                          cơ sở hạ tầng, phát triển đô thị.
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="role-card">
                    <h4>Giai cấp nông dân</h4>
                    <div className="role-examples">
                      <h5>Ví dụ thực tế:</h5>
                      <ul>
                        <li>
                          <strong>Nông dân Đồng bằng sông Cửu Long:</strong> 
                          Đảm bảo an ninh lương thực quốc gia, xuất khẩu gạo.
                        </li>
                        <li>
                          <strong>Nông dân Tây Nguyên:</strong> Phát triển cây công nghiệp, 
                          góp phần tăng trưởng kinh tế.
                        </li>
                        <li>
                          <strong>Nông dân miền núi:</strong> Bảo vệ rừng, 
                          phát triển du lịch sinh thái.
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="role-card">
                    <h4>Tầng lớp trí thức</h4>
                    <div className="role-examples">
                      <h5>Ví dụ thực tế:</h5>
                      <ul>
                        <li>
                          <strong>Trí thức khoa học:</strong> Nghiên cứu, ứng dụng 
                          khoa học công nghệ, đổi mới sáng tạo.
                        </li>
                        <li>
                          <strong>Trí thức giáo dục:</strong> Đào tạo nhân lực chất lượng cao, 
                          nâng cao dân trí.
                        </li>
                        <li>
                          <strong>Trí thức văn hóa:</strong> Bảo tồn, phát huy 
                          giá trị văn hóa dân tộc.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* International Examples */}
          <section className="practice-section">
            <h2>2. Kinh nghiệm quốc tế</h2>
            
            <div className="case-study-card">
              <h3>2.1. Trung Quốc - Mô hình liên minh giai cấp</h3>
              <div className="case-content">
                <p>
                  Trung Quốc đã xây dựng thành công mô hình liên minh giai cấp trong 
                  thời kỳ quá độ lên chủ nghĩa xã hội với những đặc điểm:
                </p>
                
                <div className="international-examples">
                  <div className="example-item">
                    <h4>Liên minh công - nông - trí</h4>
                    <p>
                      Trung Quốc đã xây dựng liên minh vững chắc giữa giai cấp công nhân, 
                      nông dân và tầng lớp trí thức dưới sự lãnh đạo của Đảng Cộng sản Trung Quốc.
                    </p>
                    <div className="example-details">
                      <strong>Kết quả:</strong> Đạt được tăng trưởng kinh tế cao, 
                      nâng cao đời sống nhân dân, ổn định chính trị - xã hội.
                    </div>
                  </div>
                  
                  <div className="example-item">
                    <h4>Chính sách đối ngoại</h4>
                    <p>
                      Trung Quốc đã tận dụng liên minh giai cấp để thực hiện chính sách 
                      đối ngoại độc lập, tự chủ, hòa bình, hữu nghị.
                    </p>
                    <div className="example-details">
                      <strong>Kết quả:</strong> Nâng cao vị thế quốc tế, 
                      tham gia tích cực vào các tổ chức quốc tế.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-study-card">
              <h3>2.2. Cuba - Xây dựng xã hội xã hội chủ nghĩa</h3>
              <div className="case-content">
                <p>
                  Cuba là một ví dụ điển hình về việc xây dựng thành công chủ nghĩa xã hội 
                  trong điều kiện khó khăn, với sự đoàn kết của toàn dân tộc.
                </p>
                
                <div className="cuba-examples">
                  <div className="cuba-achievement">
                    <h4>Thành tựu giáo dục</h4>
                    <p>
                      Cuba đã đạt được tỷ lệ biết chữ 99.8%, xây dựng hệ thống giáo dục 
                      miễn phí từ mẫu giáo đến đại học.
                    </p>
                  </div>
                  
                  <div className="cuba-achievement">
                    <h4>Thành tựu y tế</h4>
                    <p>
                      Cuba có hệ thống y tế miễn phí, tuổi thọ trung bình cao, 
                      tỷ lệ tử vong trẻ em thấp.
                    </p>
                  </div>
                  
                  <div className="cuba-achievement">
                    <h4>Đoàn kết dân tộc</h4>
                    <p>
                      Cuba đã xây dựng được khối đại đoàn kết toàn dân tộc, 
                      vượt qua mọi khó khăn, thách thức.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Current Challenges */}
          <section className="practice-section">
            <h2>3. Thách thức hiện tại và giải pháp</h2>
            
            <div className="case-study-card">
              <h3>3.1. Thách thức trong thời đại mới</h3>
              <div className="case-content">
                <div className="challenges-grid">
                  <div className="challenge-item">
                    <h4>Toàn cầu hóa</h4>
                    <p>
                      Toàn cầu hóa tạo ra cả cơ hội và thách thức cho việc xây dựng 
                      liên minh giai cấp trong nước.
                    </p>
                    <div className="challenge-solutions">
                      <strong>Giải pháp:</strong>
                      <ul>
                        <li>Tăng cường giáo dục ý thức giai cấp</li>
                        <li>Bảo vệ lợi ích quốc gia</li>
                        <li>Phát triển kinh tế độc lập, tự chủ</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="challenge-item">
                    <h4>Cách mạng 4.0</h4>
                    <p>
                      Cuộc cách mạng công nghiệp 4.0 thay đổi cơ cấu lao động, 
                      tạo ra những thách thức mới.
                    </p>
                    <div className="challenge-solutions">
                      <strong>Giải pháp:</strong>
                      <ul>
                        <li>Đào tạo, nâng cao trình độ lao động</li>
                        <li>Phát triển khoa học - công nghệ</li>
                        <li>Đảm bảo việc làm cho người lao động</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="challenge-item">
                    <h4>Biến đổi khí hậu</h4>
                    <p>
                      Biến đổi khí hậu ảnh hưởng đến đời sống của nông dân và 
                      các tầng lớp lao động.
                    </p>
                    <div className="challenge-solutions">
                      <strong>Giải pháp:</strong>
                      <ul>
                        <li>Phát triển nông nghiệp bền vững</li>
                        <li>Ứng phó với biến đổi khí hậu</li>
                        <li>Bảo vệ môi trường</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Success Stories */}
          <section className="practice-section">
            <h2>4. Câu chuyện thành công</h2>
            
            <div className="case-study-card">
              <h3>4.1. Phong trào "Cả nước chung sức xây dựng nông thôn mới"</h3>
              <div className="case-content">
                <p>
                  Đây là một ví dụ điển hình về sự phối hợp giữa các giai cấp, tầng lớp 
                  trong xây dựng đất nước.
                </p>
                
                <div className="success-story">
                  <div className="story-highlights">
                    <h4>Những thành tựu nổi bật:</h4>
                    <ul>
                      <li>
                        <strong>Hạ tầng nông thôn:</strong> Đường giao thông, điện, nước, 
                        trường học, trạm y tế được xây dựng khang trang.
                      </li>
                      <li>
                        <strong>Kinh tế nông thôn:</strong> Phát triển sản xuất, 
                        tăng thu nhập cho nông dân.
                      </li>
                      <li>
                        <strong>Văn hóa - xã hội:</strong> Nâng cao đời sống tinh thần, 
                        bảo tồn văn hóa truyền thống.
                      </li>
                    </ul>
                  </div>
                  
                  <div className="story-participants">
                    <h4>Sự tham gia của các giai cấp, tầng lớp:</h4>
                    <div className="participant-role">
                      <strong>Nông dân:</strong> Chủ thể, tham gia tích cực vào xây dựng
                    </div>
                    <div className="participant-role">
                      <strong>Công nhân:</strong> Hỗ trợ kỹ thuật, vật tư, thiết bị
                    </div>
                    <div className="participant-role">
                      <strong>Trí thức:</strong> Tư vấn, thiết kế, giám sát
                    </div>
                    <div className="participant-role">
                      <strong>Doanh nghiệp:</strong> Đầu tư, phát triển sản xuất
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-study-card">
              <h3>4.2. Chương trình "Đổi mới sáng tạo"</h3>
              <div className="case-content">
                <p>
                  Chương trình khuyến khích đổi mới sáng tạo trong toàn xã hội, 
                  tạo động lực phát triển kinh tế - xã hội.
                </p>
                
                <div className="innovation-examples">
                  <div className="innovation-item">
                    <h4>Startup và doanh nghiệp khởi nghiệp</h4>
                    <p>
                      Hàng nghìn startup được thành lập, tạo việc làm cho hàng triệu người, 
                      đóng góp vào tăng trưởng kinh tế.
                    </p>
                  </div>
                  
                  <div className="innovation-item">
                    <h4>Ứng dụng công nghệ trong nông nghiệp</h4>
                    <p>
                      Nông dân ứng dụng công nghệ cao, tăng năng suất, chất lượng sản phẩm, 
                      bảo vệ môi trường.
                    </p>
                  </div>
                  
                  <div className="innovation-item">
                    <h4>Phát triển kinh tế số</h4>
                    <p>
                      Kinh tế số phát triển mạnh mẽ, tạo ra nhiều cơ hội việc làm mới, 
                      nâng cao hiệu quả sản xuất.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Lessons Learned */}
          <section className="practice-section">
            <h2>5. Bài học kinh nghiệm</h2>
            
            <div className="case-study-card">
              <h3>5.1. Những bài học quan trọng</h3>
              <div className="case-content">
                <div className="lessons-learned">
                  <div className="lesson-item">
                    <h4>Đoàn kết là sức mạnh</h4>
                    <p>
                      Liên minh giai cấp chỉ có thể thành công khi có sự đoàn kết thực sự 
                      giữa các giai cấp, tầng lớp trên cơ sở lợi ích chung.
                    </p>
                  </div>
                  
                  <div className="lesson-item">
                    <h4>Lãnh đạo của Đảng là yếu tố quyết định</h4>
                    <p>
                      Đảng Cộng sản phải thực sự là hạt nhân lãnh đạo, tổ chức và 
                      thực hiện liên minh giai cấp.
                    </p>
                  </div>
                  
                  <div className="lesson-item">
                    <h4>Phát triển kinh tế là nền tảng</h4>
                    <p>
                      Liên minh giai cấp chỉ bền vững khi đảm bảo lợi ích kinh tế 
                      cho tất cả các thành viên.
                    </p>
                  </div>
                  
                  <div className="lesson-item">
                    <h4>Giáo dục ý thức là quan trọng</h4>
                    <p>
                      Cần thường xuyên giáo dục, nâng cao ý thức giai cấp, 
                      tinh thần đoàn kết cho các thành viên.
                    </p>
                  </div>
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

export default PracticePage;
