import React, { useState } from 'react';
import Footer from '../components/Footer';
import './QuizPage.css';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const QuizPage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);

  const questions: Question[] = [
    // ==== 1-10 (giữ nguyên) ====
    {
      id: 1,
      question: "Trong thời kỳ quá độ lên chủ nghĩa xã hội, giai cấp nào giữ vai trò lãnh đạo?",
      options: ["Giai cấp nông dân","Giai cấp công nhân","Tầng lớp trí thức","Giai cấp tư sản"],
      correctAnswer: 1,
      explanation: "Giai cấp công nhân giữ vai trò lãnh đạo thông qua Đảng Cộng sản."
    },
    {
      id: 2,
      question: "Liên minh giai cấp cơ bản trong thời kỳ quá độ là gì?",
      options: ["Liên minh công - nông","Liên minh công - nông - trí","Liên minh nông - trí","Liên minh tư sản - tiểu tư sản"],
      correctAnswer: 1,
      explanation: "Liên minh công - nông - trí là hình thức liên minh giai cấp cơ bản."
    },
    {
      id: 3,
      question: "Đặc điểm nào sau đây KHÔNG thuộc về giai cấp công nhân?",
      options: ["Là sản phẩm của nền đại công nghiệp","Có tính tổ chức, kỷ luật cao","Có ý thức giai cấp rõ ràng","Có tư liệu sản xuất riêng"],
      correctAnswer: 3,
      explanation: "Công nhân không sở hữu tư liệu sản xuất riêng."
    },
    {
      id: 4,
      question: "Tầng lớp trí thức có vai trò gì trong xây dựng chủ nghĩa xã hội?",
      options: ["Lãnh đạo cách mạng","Cung cấp lương thực","Truyền bá tri thức, văn hóa","Sản xuất hàng hóa công nghiệp"],
      correctAnswer: 2,
      explanation: "Trí thức truyền bá tri thức, văn hóa và thúc đẩy cách mạng khoa học - kỹ thuật."
    },
    {
      id: 5,
      question: "Thời kỳ quá độ lên chủ nghĩa xã hội có tính chất gì?",
      options: ["Tính chất chuyển tiếp","Tính chất ổn định","Tính chất tĩnh tại","Tính chất đơn giản"],
      correctAnswer: 0,
      explanation: "Đây là giai đoạn chuyển từ chế độ cũ sang chế độ mới."
    },
    {
      id: 6,
      question: "Nguyên tắc nào sau đây KHÔNG thuộc về liên minh giai cấp?",
      options: ["Nguyên tắc lãnh đạo","Nguyên tắc tự nguyện","Nguyên tắc bình đẳng","Nguyên tắc đối kháng"],
      correctAnswer: 3,
      explanation: "Liên minh dựa trên hợp tác, không phải đối kháng."
    },
    {
      id: 7,
      question: "Giai cấp nông dân có đặc điểm gì?",
      options: ["Là lực lượng lao động đông đảo nhất","Có tính chất tập trung cao","Có ý thức giai cấp rất cao","Là giai cấp lãnh đạo"],
      correctAnswer: 0,
      explanation: "Nông dân đông đảo, gắn bó với đất đai nhưng ý thức giai cấp chưa cao."
    },
    {
      id: 8,
      question: "Đảng Cộng sản có vai trò gì trong liên minh giai cấp?",
      options: ["Là thành viên bình thường","Là lực lượng lãnh đạo, tổ chức và thực hiện","Chỉ có vai trò tư vấn","Không có vai trò gì"],
      correctAnswer: 1,
      explanation: "Đảng lãnh đạo, tổ chức và điều hòa lợi ích trong liên minh."
    },
    {
      id: 9,
      question: "Nhiệm vụ chính trị của thời kỳ quá độ KHÔNG bao gồm:",
      options: ["Xây dựng nhà nước xã hội chủ nghĩa","Thực hiện dân chủ xã hội chủ nghĩa","Xây dựng hệ thống pháp luật xã hội chủ nghĩa","Phát triển kinh tế tư bản chủ nghĩa"],
      correctAnswer: 3,
      explanation: "Không nhằm phát triển kinh tế tư bản chủ nghĩa."
    },
    {
      id: 10,
      question: "Cơ cấu xã hội trong thời kỳ quá độ có đặc điểm gì?",
      options: ["Ổn định, không thay đổi","Biến đổi sâu sắc và toàn diện","Chỉ thay đổi về kinh tế","Không có đặc điểm gì"],
      correctAnswer: 1,
      explanation: "Cơ cấu xã hội biến đổi sâu sắc, toàn diện."
    },

    // ==== 11-30 bổ sung ====
    {
      id: 11,
      question: "Đặc điểm nào thể hiện tính chất phức tạp của thời kỳ quá độ?",
      options: [
        "Tồn tại nhiều thành phần kinh tế và giai cấp khác nhau",
        "Chỉ còn kinh tế nhà nước",
        "Đã xóa bỏ hoàn toàn mâu thuẫn giai cấp",
        "Không còn quan hệ sản xuất cũ"
      ],
      correctAnswer: 0,
      explanation: "Thời kỳ này còn nhiều thành phần kinh tế, lợi ích khác nhau."
    },
    {
      id: 12,
      question: "Tính chất lâu dài của thời kỳ quá độ đòi hỏi điều gì?",
      options: [
        "Chỉ cần thay đổi chính trị",
        "Kiên trì, quyết tâm cao của toàn xã hội",
        "Bỏ qua các mâu thuẫn",
        "Giải pháp quân sự"
      ],
      correctAnswer: 1,
      explanation: "Quá trình lâu dài, phức tạp nên cần sự kiên trì."
    },
    {
      id: 13,
      question: "Giai cấp công nhân là đại diện cho:",
      options: [
        "Phương thức sản xuất tiên tiến",
        "Phương thức sản xuất lạc hậu",
        "Nền nông nghiệp truyền thống",
        "Kinh tế tiểu nông"
      ],
      correctAnswer: 0,
      explanation: "Công nhân đại diện cho phương thức sản xuất tiên tiến."
    },
    {
      id: 14,
      question: "Nông dân là đồng minh tự nhiên của:",
      options: ["Tư sản dân tộc","Trí thức","Địa chủ","Giai cấp công nhân"],
      correctAnswer: 3,
      explanation: "Nông dân là đồng minh tự nhiên của công nhân."
    },
    {
      id: 15,
      question: "Nguồn cung cấp lương thực, thực phẩm chủ yếu cho xã hội đến từ:",
      options: ["Giai cấp công nhân","Giai cấp nông dân","Tầng lớp trí thức","Đảng Cộng sản"],
      correctAnswer: 1,
      explanation: "Nông dân cung cấp lương thực, thực phẩm."
    },
    {
      id: 16,
      question: "Tầng lớp trí thức chủ yếu lao động bằng:",
      options: ["Cơ bắp","Trí óc","Đất đai","Máy móc"],
      correctAnswer: 1,
      explanation: "Trí thức lao động bằng trí óc, sáng tạo."
    },
    {
      id: 17,
      question: "Vai trò của trí thức trong cách mạng khoa học - kỹ thuật là:",
      options: ["Không quan trọng","Quyết định, đi đầu","Thụ động","Chỉ tham gia khi được mời"],
      correctAnswer: 1,
      explanation: "Trí thức là lực lượng quan trọng trong cách mạng khoa học - kỹ thuật."
    },
    {
      id: 18,
      question: "Liên minh giai cấp dựa trên yếu tố nào?",
      options: ["Truyền thống lịch sử","Lợi ích chung","Địa vị quý tộc","Chủng tộc"],
      correctAnswer: 1,
      explanation: "Liên minh dựa trên lợi ích chung và mục tiêu chung."
    },
    {
      id: 19,
      question: "Trong liên minh công - nông - trí, ai giữ vai trò lãnh đạo?",
      options: ["Công nhân","Nông dân","Trí thức","Địa chủ"],
      correctAnswer: 0,
      explanation: "Công nhân lãnh đạo liên minh."
    },
    {
      id: 20,
      question: "Nguyên tắc cùng có lợi trong liên minh nhằm:",
      options: [
        "Chỉ bảo vệ công nhân",
        "Đảm bảo lợi ích của tất cả thành viên",
        "Ưu tiên trí thức",
        "Giảm vai trò nông dân"
      ],
      correctAnswer: 1,
      explanation: "Đảm bảo lợi ích cho mọi thành viên."
    },
    {
      id: 21,
      question: "Một nhiệm vụ kinh tế của thời kỳ quá độ là:",
      options: [
        "Thực hiện công nghiệp hóa, hiện đại hóa",
        "Giữ nguyên nền sản xuất nhỏ",
        "Phát triển phong kiến",
        "Giảm sản xuất công nghiệp"
      ],
      correctAnswer: 0,
      explanation: "Công nghiệp hóa, hiện đại hóa là nhiệm vụ kinh tế trọng tâm."
    },
    {
      id: 22,
      question: "Nhiệm vụ văn hóa - xã hội quan trọng là:",
      options: [
        "Xây dựng nền văn hóa xã hội chủ nghĩa",
        "Giữ nguyên phong tục lạc hậu",
        "Tách giáo dục khỏi khoa học",
        "Giảm vai trò trí thức"
      ],
      correctAnswer: 0,
      explanation: "Xây dựng nền văn hóa xã hội chủ nghĩa là nhiệm vụ trọng yếu."
    },
    {
      id: 23,
      question: "Xây dựng con người mới xã hội chủ nghĩa thuộc nhiệm vụ:",
      options: ["Kinh tế","Chính trị","Văn hóa - xã hội","Quân sự"],
      correctAnswer: 2,
      explanation: "Đây là nhiệm vụ văn hóa - xã hội."
    },
    {
      id: 24,
      question: "Đặc điểm nào KHÔNG phải của nông dân?",
      options: [
        "Có mối liên hệ chặt chẽ với đất đai",
        "Có tính phân tán, nhỏ lẻ",
        "Có ý thức giai cấp rõ rệt cao",
        "Là lực lượng lao động đông đảo"
      ],
      correctAnswer: 2,
      explanation: "Nông dân có ý thức giai cấp chưa cao."
    },
    {
      id: 25,
      question: "Đặc điểm nổi bật của công nhân so với nông dân:",
      options: [
        "Tính tổ chức, kỷ luật cao",
        "Gắn bó với đất đai",
        "Phân tán nhỏ lẻ",
        "Làm việc độc lập"
      ],
      correctAnswer: 0,
      explanation: "Công nhân có tính tổ chức, kỷ luật cao."
    },
    {
      id: 26,
      question: "Liên minh công - nông - trí phát triển từ:",
      options: [
        "Thấp đến cao",
        "Cao xuống thấp",
        "Đồng đều ngay từ đầu",
        "Không phát triển"
      ],
      correctAnswer: 0,
      explanation: "Liên minh phát triển từ thấp đến cao."
    },
    {
      id: 27,
      question: "Trong thời kỳ quá độ, Đảng Cộng sản có nhiệm vụ:",
      options: [
        "Điều hòa lợi ích và giải quyết mâu thuẫn",
        "Đứng ngoài quan sát",
        "Chỉ lãnh đạo quân sự",
        "Từ bỏ vai trò lãnh đạo"
      ],
      correctAnswer: 0,
      explanation: "Đảng điều hòa lợi ích và giải quyết mâu thuẫn trong liên minh."
    },
    {
      id: 28,
      question: "Tính chất cách mạng của thời kỳ quá độ nghĩa là:",
      options: [
        "Thay đổi sâu sắc, toàn diện cơ cấu xã hội",
        "Chỉ cải cách hành chính",
        "Giữ nguyên chế độ cũ",
        "Chỉ thay đổi kinh tế"
      ],
      correctAnswer: 0,
      explanation: "Đây là cuộc cách mạng toàn diện."
    },
    {
      id: 29,
      question: "Đặc điểm quan trọng của tầng lớp trí thức là:",
      options: [
        "Trình độ học vấn, chuyên môn cao",
        "Không cần sáng tạo",
        "Chỉ làm công việc giản đơn",
        "Phụ thuộc vào đất đai"
      ],
      correctAnswer: 0,
      explanation: "Trí thức có trình độ học vấn, chuyên môn cao."
    },
    {
      id: 30,
      question: "Liên minh giai cấp có mục tiêu chung là:",
      options: [
        "Xây dựng xã hội mới – chủ nghĩa xã hội",
        "Khôi phục chế độ phong kiến",
        "Mở rộng chủ nghĩa tư bản",
        "Phát triển kinh tế tiểu nông"
      ],
      correctAnswer: 0,
      explanation: "Mục tiêu chung là xây dựng chủ nghĩa xã hội."
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => setSelectedAnswer(answerIndex);

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = selectedAnswer;
    setUserAnswers(newUserAnswers);
    if (selectedAnswer === questions[currentQuestion].correctAnswer) setScore(score + 1);
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(userAnswers[currentQuestion + 1] || null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
    setUserAnswers([]);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return "🎯 Xuất sắc! Bạn đã nắm vững kiến thức.";
    if (percentage >= 80) return "👍 Tốt! Bạn hiểu biết khá chắc.";
    if (percentage >= 70) return "🙂 Khá! Cần ôn thêm một số phần.";
    if (percentage >= 60) return "😐 Trung bình! Nên xem lại lý thuyết.";
    return "⚠️ Cần cải thiện! Hãy đọc lại lý thuyết và làm lại quiz.";
  };

  if (quizCompleted) {
    return (
      <div className="quiz-page">
        <div className="quiz-container">
          <div className="quiz-completed">
            <h1>🎉 Hoàn thành Quiz!</h1>
            <div className="score-display">
              <h2>Kết quả của bạn</h2>
              <div className="score-circle">
                <span className="score-number">{score}</span>
                <span className="score-total">/{questions.length}</span>
              </div>
              <div className="score-percentage">
                {Math.round((score / questions.length) * 100)}%
              </div>
            </div>
            <p className="score-message">{getScoreMessage()}</p>
            <button className="restart-btn" onClick={handleRestartQuiz}>
              Làm lại Quiz
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="quiz-page">
      <div className="quiz-container">
        <div className="quiz-header">
          <h1>Quiz Trắc Nghiệm</h1>
          <p>Cơ cấu xã hội - Giai cấp và Liên minh giai cấp</p>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
          <div className="question-counter">
            Câu {currentQuestion + 1} / {questions.length}
          </div>
        </div>

        <div className="question-container">
          <div className="question-card">
            <h2 className="question-text">
              {questions[currentQuestion].question}
            </h2>
            
            <div className="options-container">
              {questions[currentQuestion].options.map((option, index) => (
                <label 
                  key={index} 
                  className={`option-item ${selectedAnswer === index ? 'selected' : ''} ${
                    showResult && index === questions[currentQuestion].correctAnswer ? 'correct' : ''
                  } ${showResult && selectedAnswer === index && index !== questions[currentQuestion].correctAnswer ? 'incorrect' : ''}`}
                >
                  <input
                    type="radio"
                    name="answer"
                    value={index}
                    checked={selectedAnswer === index}
                    onChange={() => handleAnswerSelect(index)}
                    disabled={showResult}
                  />
                  <span className="option-text">{option}</span>
                </label>
              ))}
            </div>

            {showResult && (
              <div className="result-explanation">
                <h3>Giải thích:</h3>
                <p>{questions[currentQuestion].explanation}</p>
              </div>
            )}

            <div className="quiz-actions">
              {!showResult ? (
                <button 
                  className="submit-btn"
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                >
                  Xác nhận
                </button>
              ) : (
                <button className="next-btn" onClick={handleNextQuestion}>
                  {currentQuestion < questions.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default QuizPage;