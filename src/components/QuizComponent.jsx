import React, { useState, useEffect } from 'react';

const QuizComponent = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which language is used for web apps?",
      options: ["PHP", "Python", "JavaScript", "All of the above"],
      answer: "All of the above",
    },
    {
      question: "Who developed React?",
      options: ["Google", "Facebook", "Twitter", "Microsoft"],
      answer: "Facebook",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [couponCode, setCouponCode] = useState('');

  const generateCoupon = () => {
    const code = 'WIN-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    localStorage.setItem('quizCoupon', code);
    setCouponCode(code);
  };

  useEffect(() => {
    if (showResult && score === questions.length) {
      generateCoupon();
    }
  }, [showResult]);

  const handleOptionClick = (option) => {
    if (!isAnswered) {
      setSelectedOption(option);
      setIsAnswered(true);
      if (option === questions[currentIndex].answer) {
        setScore(score + 1);
      }
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
    setIsAnswered(false);
    setCouponCode('');
    localStorage.removeItem('quizCoupon');
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 p-4 ">
      <div className="w-full max-w-xl bg-white shadow-md rounded-xl p-6">
        {showResult ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-600 mb-4">
              ✅ You scored {score} out of {questions.length}
            </h2>
            {score === questions.length && (
              <div className="mt-4">
                <p className="text-lg font-medium text-blue-700">🎁 Your Coupon Code:</p>
                <div className="mt-2 px-4 py-2 inline-block bg-yellow-200 rounded-lg text-lg font-bold text-black">
                  {couponCode}
                </div>
              </div>
            )}
            <button
              onClick={handleRestart}
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div>
            <div className="flex justify-between mb-4 text-sm text-gray-500">
              <span>Question {currentIndex + 1} of {questions.length}</span>
              <span>Score: {score}</span>
            </div>

            <h3 className="text-xl font-semibold mb-6 text-gray-800">
              {questions[currentIndex].question}
            </h3>

            <ul className="space-y-3">
              {questions[currentIndex].options.map((option, index) => {
                const isCorrect = option === questions[currentIndex].answer;
                const isWrong = selectedOption === option && option !== questions[currentIndex].answer;

                return (
                  <li key={index}>
                    <button
                      onClick={() => handleOptionClick(option)}
                      className={`w-full text-left px-5 py-3 rounded-lg border transition duration-300
                        ${isAnswered && isCorrect ? 'bg-green-500 text-white border-green-600' : ''}
                        ${isAnswered && isWrong ? 'bg-red-500 text-white border-red-600' : ''}
                        ${
                          !isAnswered
                            ? 'bg-gray-100 text-gray-800 hover:bg-blue-100 border-gray-300'
                            : ''
                        }
                      `}
                      disabled={isAnswered}
                    >
                      {option}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 text-right">
              <button
                onClick={handleNext}
                disabled={!isAnswered}
                className={`px-6 py-2 rounded-lg text-white transition ${
                  !isAnswered
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {currentIndex === questions.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizComponent;
