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
    {
      id: 1,
      question: "Trong thời kỳ quá độ lên chủ nghĩa xã hội, giai cấp nào giữ vai trò lãnh đạo?",
      options: [
        "Giai cấp nông dân",
        "Giai cấp công nhân", 
        "Tầng lớp trí thức",
        "Giai cấp tư sản"
      ],
      correctAnswer: 1,
      explanation: "Giai cấp công nhân giữ vai trò lãnh đạo trong thời kỳ quá độ lên chủ nghĩa xã hội thông qua Đảng Cộng sản."
    },
    {
      id: 2,
      question: "Liên minh giai cấp cơ bản trong thời kỳ quá độ là gì?",
      options: [
        "Liên minh công - nông",
        "Liên minh công - nông - trí",
        "Liên minh nông - trí",
        "Liên minh tư sản - tiểu tư sản"
      ],
      correctAnswer: 1,
      explanation: "Liên minh công - nông - trí là liên minh giai cấp cơ bản trong thời kỳ quá độ lên chủ nghĩa xã hội."
    },
    {
      id: 3,
      question: "Đặc điểm nào sau đây KHÔNG thuộc về giai cấp công nhân?",
      options: [
        "Là sản phẩm của nền đại công nghiệp",
        "Có tính tổ chức, kỷ luật cao",
        "Có ý thức giai cấp rõ ràng",
        "Có tư liệu sản xuất riêng"
      ],
      correctAnswer: 3,
      explanation: "Giai cấp công nhân không có tư liệu sản xuất riêng, họ bán sức lao động cho chủ sở hữu tư liệu sản xuất."
    },
    {
      id: 4,
      question: "Tầng lớp trí thức có vai trò gì trong xây dựng chủ nghĩa xã hội?",
      options: [
        "Lãnh đạo cách mạng",
        "Cung cấp lương thực, thực phẩm",
        "Truyền bá tri thức, văn hóa",
        "Sản xuất hàng hóa công nghiệp"
      ],
      correctAnswer: 2,
      explanation: "Tầng lớp trí thức có vai trò truyền bá tri thức, văn hóa và là lực lượng quan trọng trong cách mạng khoa học - kỹ thuật."
    },
    {
      id: 5,
      question: "Thời kỳ quá độ lên chủ nghĩa xã hội có tính chất gì?",
      options: [
        "Tính chất chuyển tiếp",
        "Tính chất ổn định",
        "Tính chất tĩnh tại",
        "Tính chất đơn giản"
      ],
      correctAnswer: 0,
      explanation: "Thời kỳ quá độ có tính chất chuyển tiếp từ chế độ cũ sang chế độ mới, vừa mang tính chất của chế độ cũ vừa mang tính chất của chế độ mới."
    },
    {
      id: 6,
      question: "Nguyên tắc nào sau đây KHÔNG thuộc về liên minh giai cấp?",
      options: [
        "Nguyên tắc lãnh đạo",
        "Nguyên tắc tự nguyện",
        "Nguyên tắc bình đẳng",
        "Nguyên tắc đối kháng"
      ],
      correctAnswer: 3,
      explanation: "Liên minh giai cấp dựa trên sự hợp tác, không phải đối kháng. Các nguyên tắc cơ bản là lãnh đạo, tự nguyện, bình đẳng và cùng có lợi."
    },
    {
      id: 7,
      question: "Giai cấp nông dân có đặc điểm gì?",
      options: [
        "Là lực lượng lao động đông đảo nhất",
        "Có tính chất tập trung cao",
        "Có ý thức giai cấp rất cao",
        "Là giai cấp lãnh đạo"
      ],
      correctAnswer: 0,
      explanation: "Giai cấp nông dân là lực lượng lao động đông đảo nhất, có mối liên hệ chặt chẽ với đất đai và là đồng minh tự nhiên của giai cấp công nhân."
    },
    {
      id: 8,
      question: "Đảng Cộng sản có vai trò gì trong liên minh giai cấp?",
      options: [
        "Là thành viên bình thường",
        "Là lực lượng lãnh đạo, tổ chức và thực hiện",
        "Chỉ có vai trò tư vấn",
        "Không có vai trò gì"
      ],
      correctAnswer: 1,
      explanation: "Đảng Cộng sản là lực lượng lãnh đạo, tổ chức và thực hiện liên minh giai cấp, điều hòa lợi ích và giải quyết mâu thuẫn."
    },
    {
      id: 9,
      question: "Nhiệm vụ chính trị của thời kỳ quá độ KHÔNG bao gồm:",
      options: [
        "Xây dựng nhà nước xã hội chủ nghĩa",
        "Thực hiện dân chủ xã hội chủ nghĩa",
        "Xây dựng hệ thống pháp luật xã hội chủ nghĩa",
        "Phát triển kinh tế tư bản chủ nghĩa"
      ],
      correctAnswer: 3,
      explanation: "Phát triển kinh tế tư bản chủ nghĩa không phải là nhiệm vụ của thời kỳ quá độ. Nhiệm vụ là xây dựng nền kinh tế thị trường định hướng xã hội chủ nghĩa."
    },
    {
      id: 10,
      question: "Cơ cấu xã hội trong thời kỳ quá độ có đặc điểm gì?",
      options: [
        "Ổn định, không thay đổi",
        "Biến đổi sâu sắc và toàn diện",
        "Chỉ thay đổi về kinh tế",
        "Không có đặc điểm gì"
      ],
      correctAnswer: 1,
      explanation: "Cơ cấu xã hội trong thời kỳ quá độ có sự biến đổi sâu sắc và toàn diện, từ cơ cấu cũ sang cơ cấu mới phù hợp với chủ nghĩa xã hội."
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = selectedAnswer;
    setUserAnswers(newUserAnswers);

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

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
    if (percentage >= 90) return "Xuất sắc! Bạn đã nắm vững kiến thức về chủ đề này.";
    if (percentage >= 80) return "Tốt! Bạn có hiểu biết tốt về chủ đề.";
    if (percentage >= 70) return "Khá! Bạn cần ôn tập thêm một số phần.";
    if (percentage >= 60) return "Trung bình! Bạn nên xem lại lý thuyết.";
    return "Cần cải thiện! Hãy đọc lại lý thuyết và làm lại quiz.";
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
        
        {/* Footer */}
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