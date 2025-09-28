import React from 'react';
import Footer from '../components/Footer';
import './TheoryPage.css';

const TheoryPage: React.FC = () => {
  return (
    <div className="theory-page">
      {/* Header Section */}
      <header className="theory-header">
        <div className="container">
          <h1>Lý thuyết về Cơ cấu xã hội và Giai cấp</h1>
          <p className="theory-subtitle">
            Trong thời kỳ quá độ lên chủ nghĩa xã hội
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="theory-content">
        <div className="container">
          {/* Theoretical Foundation */}
          <section className="theory-section">
            <h2>1. Nền tảng lý thuyết</h2>
            <div className="theory-card">
              <h3>1.1. Quan điểm của chủ nghĩa Mác-Lênin</h3>
              <div className="theory-content-text">
                <p>
                  Theo chủ nghĩa Mác-Lênin, cơ cấu xã hội trong thời kỳ quá độ lên chủ nghĩa xã hội 
                  có những đặc điểm cơ bản sau:
                </p>
                <ul>
                  <li>
                    <strong>Xóa bỏ sự phân hóa giai cấp đối kháng:</strong> 
                    Thời kỳ quá độ là giai đoạn chuyển tiếp từ xã hội có giai cấp đối kháng 
                    sang xã hội không còn giai cấp đối kháng.
                  </li>
                  <li>
                    <strong>Hình thành cơ cấu xã hội mới:</strong> 
                    Dựa trên sở hữu xã hội về tư liệu sản xuất và sự hợp tác giữa các giai cấp, tầng lớp.
                  </li>
                  <li>
                    <strong>Vai trò lãnh đạo của giai cấp công nhân:</strong> 
                    Thông qua Đảng Cộng sản, giai cấp công nhân lãnh đạo toàn bộ quá trình 
                    xây dựng chủ nghĩa xã hội.
                  </li>
                </ul>
              </div>
            </div>

            <div className="theory-card">
              <h3>1.2. Đặc điểm của thời kỳ quá độ</h3>
              <div className="theory-content-text">
                <p>Thời kỳ quá độ có những đặc điểm cơ bản:</p>
                <div className="characteristics-grid">
                  <div className="characteristic-item">
                    <h4>Tính chất chuyển tiếp</h4>
                    <p>
                      Là giai đoạn chuyển từ chế độ cũ sang chế độ mới, 
                      vừa mang tính chất của chế độ cũ vừa mang tính chất của chế độ mới.
                    </p>
                  </div>
                  <div className="characteristic-item">
                    <h4>Tính chất phức tạp</h4>
                    <p>
                      Còn tồn tại nhiều thành phần kinh tế, nhiều giai cấp, tầng lớp 
                      với lợi ích khác nhau.
                    </p>
                  </div>
                  <div className="characteristic-item">
                    <h4>Tính chất lâu dài</h4>
                    <p>
                      Là một quá trình lịch sử lâu dài, phức tạp, 
                      đòi hỏi sự kiên trì và quyết tâm cao.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Social Structure */}
          <section className="theory-section">
            <h2>2. Cơ cấu xã hội trong thời kỳ quá độ</h2>
            
            <div className="theory-card">
              <h3>2.1. Giai cấp công nhân</h3>
              <div className="theory-content-text">
                <p>
                  <strong>Định nghĩa:</strong> Giai cấp công nhân là giai cấp của những người 
                  lao động làm công ăn lương, không có tư liệu sản xuất, bán sức lao động 
                  cho các chủ sở hữu tư liệu sản xuất.
                </p>
                <div className="worker-class-details">
                  <h4>Đặc điểm của giai cấp công nhân:</h4>
                  <ul>
                    <li>Là sản phẩm của nền đại công nghiệp tư bản chủ nghĩa</li>
                    <li>Là lực lượng sản xuất tiên tiến nhất</li>
                    <li>Có tính tổ chức, kỷ luật cao</li>
                    <li>Có ý thức giai cấp rõ ràng</li>
                    <li>Là giai cấp cách mạng nhất</li>
                  </ul>
                  
                  <h4>Vai trò của giai cấp công nhân:</h4>
                  <ul>
                    <li>Là giai cấp lãnh đạo cách mạng</li>
                    <li>Là lực lượng chủ yếu xây dựng chủ nghĩa xã hội</li>
                    <li>Là đại diện cho phương thức sản xuất tiên tiến</li>
                    <li>Là hạt nhân của liên minh giai cấp</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="theory-card">
              <h3>2.2. Giai cấp nông dân</h3>
              <div className="theory-content-text">
                <p>
                  <strong>Định nghĩa:</strong> Giai cấp nông dân là giai cấp của những người 
                  lao động trong nông nghiệp, có hoặc không có tư liệu sản xuất, 
                  chủ yếu dựa vào lao động của bản thân và gia đình.
                </p>
                <div className="farmer-class-details">
                  <h4>Đặc điểm của giai cấp nông dân:</h4>
                  <ul>
                    <li>Là lực lượng lao động đông đảo nhất</li>
                    <li>Có mối liên hệ chặt chẽ với đất đai</li>
                    <li>Có tính chất phân tán, nhỏ lẻ</li>
                    <li>Có ý thức giai cấp chưa cao</li>
                    <li>Là đồng minh tự nhiên của giai cấp công nhân</li>
                  </ul>
                  
                  <h4>Vai trò của giai cấp nông dân:</h4>
                  <ul>
                    <li>Là đồng minh tin cậy của giai cấp công nhân</li>
                    <li>Là lực lượng chủ yếu trong cách mạng dân tộc dân chủ</li>
                    <li>Là nguồn cung cấp lương thực, thực phẩm</li>
                    <li>Là thị trường tiêu thụ sản phẩm công nghiệp</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="theory-card">
              <h3>2.3. Tầng lớp trí thức</h3>
              <div className="theory-content-text">
                <p>
                  <strong>Định nghĩa:</strong> Tầng lớp trí thức là tầng lớp xã hội 
                  bao gồm những người lao động trí óc, có trình độ học vấn, 
                  chuyên môn cao, tham gia vào các hoạt động sáng tạo, 
                  nghiên cứu, giảng dạy, quản lý.
                </p>
                <div className="intellectual-class-details">
                  <h4>Đặc điểm của tầng lớp trí thức:</h4>
                  <ul>
                    <li>Có trình độ học vấn, chuyên môn cao</li>
                    <li>Làm việc chủ yếu bằng trí óc</li>
                    <li>Có tính sáng tạo, đổi mới</li>
                    <li>Có ý thức xã hội cao</li>
                    <li>Là cầu nối giữa lý thuyết và thực tiễn</li>
                  </ul>
                  
                  <h4>Vai trò của tầng lớp trí thức:</h4>
                  <ul>
                    <li>Là lực lượng quan trọng trong cách mạng khoa học - kỹ thuật</li>
                    <li>Là người truyền bá tri thức, văn hóa</li>
                    <li>Là cố vấn cho các quyết định chính sách</li>
                    <li>Là lực lượng tiên phong trong đổi mới</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Class Alliance */}
          <section className="theory-section">
            <h2>3. Liên minh giai cấp và tầng lớp</h2>
            
            <div className="theory-card">
              <h3>3.1. Khái niệm liên minh giai cấp</h3>
              <div className="theory-content-text">
                <p>
                  <strong>Liên minh giai cấp</strong> là sự liên kết, hợp tác giữa các giai cấp, 
                  tầng lớp xã hội trên cơ sở những lợi ích chung, nhằm thực hiện những 
                  mục tiêu chung của cách mạng và xây dựng xã hội mới.
                </p>
                
                <h4>Đặc điểm của liên minh giai cấp:</h4>
                <ul>
                  <li>Dựa trên cơ sở lợi ích chung</li>
                  <li>Có mục tiêu chung</li>
                  <li>Có sự lãnh đạo thống nhất</li>
                  <li>Có tính chất lâu dài, bền vững</li>
                  <li>Phát triển từ thấp đến cao</li>
                </ul>
              </div>
            </div>

            <div className="theory-card">
              <h3>3.2. Liên minh công - nông - trí</h3>
              <div className="theory-content-text">
                <p>
                  Liên minh công - nông - trí là hình thức liên minh giai cấp cơ bản 
                  trong thời kỳ quá độ lên chủ nghĩa xã hội.
                </p>
                
                <div className="alliance-structure">
                  <h4>Cấu trúc của liên minh:</h4>
                  <div className="alliance-diagram">
                    <div className="alliance-center">
                      <div className="center-item">Giai cấp công nhân<br/>(Lãnh đạo)</div>
                    </div>
                    <div className="alliance-branches">
                      <div className="branch-item">Giai cấp nông dân<br/>(Đồng minh)</div>
                      <div className="branch-item">Tầng lớp trí thức<br/>(Đồng minh)</div>
                    </div>
                  </div>
                </div>

                <h4>Nguyên tắc của liên minh:</h4>
                <ul>
                  <li><strong>Nguyên tắc lãnh đạo:</strong> Giai cấp công nhân lãnh đạo liên minh</li>
                  <li><strong>Nguyên tắc tự nguyện:</strong> Dựa trên sự tự nguyện, tự giác</li>
                  <li><strong>Nguyên tắc bình đẳng:</strong> Các thành viên bình đẳng trong liên minh</li>
                  <li><strong>Nguyên tắc cùng có lợi:</strong> Đảm bảo lợi ích của tất cả thành viên</li>
                </ul>
              </div>
            </div>

            <div className="theory-card">
              <h3>3.3. Vai trò của Đảng Cộng sản</h3>
              <div className="theory-content-text">
                <p>
                  Đảng Cộng sản là lực lượng lãnh đạo, tổ chức và thực hiện liên minh giai cấp.
                </p>
                
                <h4>Vai trò của Đảng trong liên minh:</h4>
                <ul>
                  <li><strong>Lãnh đạo chính trị:</strong> Định hướng, chỉ đạo liên minh</li>
                  <li><strong>Tổ chức thực hiện:</strong> Tổ chức các hoạt động của liên minh</li>
                  <li><strong>Điều hòa lợi ích:</strong> Điều hòa lợi ích giữa các thành viên</li>
                  <li><strong>Giải quyết mâu thuẫn:</strong> Giải quyết các mâu thuẫn trong liên minh</li>
                  <li><strong>Phát triển liên minh:</strong> Mở rộng, phát triển liên minh</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Transition Period */}
          <section className="theory-section">
            <h2>4. Đặc điểm thời kỳ quá độ</h2>
            
            <div className="theory-card">
              <h3>4.1. Tính chất của thời kỳ quá độ</h3>
              <div className="theory-content-text">
                <div className="transition-characteristics">
                  <div className="characteristic-box">
                    <h4>Tính chất chuyển tiếp</h4>
                    <p>
                      Là giai đoạn chuyển từ chế độ cũ sang chế độ mới, 
                      vừa mang tính chất của chế độ cũ vừa mang tính chất của chế độ mới.
                    </p>
                  </div>
                  
                  <div className="characteristic-box">
                    <h4>Tính chất phức tạp</h4>
                    <p>
                      Còn tồn tại nhiều thành phần kinh tế, nhiều giai cấp, tầng lớp 
                      với lợi ích khác nhau, thậm chí đối lập nhau.
                    </p>
                  </div>
                  
                  <div className="characteristic-box">
                    <h4>Tính chất lâu dài</h4>
                    <p>
                      Là một quá trình lịch sử lâu dài, phức tạp, 
                      đòi hỏi sự kiên trì và quyết tâm cao.
                    </p>
                  </div>
                  
                  <div className="characteristic-box">
                    <h4>Tính chất cách mạng</h4>
                    <p>
                      Là một cuộc cách mạng sâu sắc, toàn diện, 
                      thay đổi căn bản cơ cấu xã hội.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="theory-card">
              <h3>4.2. Nhiệm vụ của thời kỳ quá độ</h3>
              <div className="theory-content-text">
                <h4>Nhiệm vụ chính trị:</h4>
                <ul>
                  <li>Xây dựng nhà nước xã hội chủ nghĩa</li>
                  <li>Thực hiện dân chủ xã hội chủ nghĩa</li>
                  <li>Đảm bảo quyền lực thuộc về nhân dân</li>
                  <li>Xây dựng hệ thống pháp luật xã hội chủ nghĩa</li>
                </ul>

                <h4>Nhiệm vụ kinh tế:</h4>
                <ul>
                  <li>Phát triển lực lượng sản xuất</li>
                  <li>Xây dựng quan hệ sản xuất xã hội chủ nghĩa</li>
                  <li>Thực hiện công nghiệp hóa, hiện đại hóa</li>
                  <li>Xây dựng nền kinh tế thị trường định hướng xã hội chủ nghĩa</li>
                </ul>

                <h4>Nhiệm vụ văn hóa - xã hội:</h4>
                <ul>
                  <li>Xây dựng nền văn hóa xã hội chủ nghĩa</li>
                  <li>Phát triển giáo dục, khoa học, kỹ thuật</li>
                  <li>Đảm bảo công bằng xã hội</li>
                  <li>Xây dựng con người mới xã hội chủ nghĩa</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="theory-section">
            <h2>5. Kết luận</h2>
            <div className="theory-card">
              <div className="theory-content-text">
                <p>
                  Cơ cấu xã hội trong thời kỳ quá độ lên chủ nghĩa xã hội có những đặc điểm 
                  và quy luật vận động riêng. Việc nghiên cứu, nắm vững những vấn đề lý luận 
                  về cơ cấu xã hội, giai cấp và liên minh giai cấp có ý nghĩa quan trọng 
                  trong việc xây dựng chủ nghĩa xã hội.
                </p>
                
                <div className="conclusion-points">
                  <h4>Những điểm cần lưu ý:</h4>
                  <ul>
                    <li>Liên minh giai cấp là động lực quan trọng của cách mạng</li>
                    <li>Giai cấp công nhân giữ vai trò lãnh đạo trong liên minh</li>
                    <li>Đảng Cộng sản là hạt nhân lãnh đạo liên minh</li>
                    <li>Thời kỳ quá độ là giai đoạn lịch sử lâu dài, phức tạp</li>
                    <li>Cần có sự kiên trì, quyết tâm cao trong quá trình xây dựng</li>
                  </ul>
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

export default TheoryPage;
