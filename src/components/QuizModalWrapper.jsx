import React, { useState } from 'react';
import QuizComponent from './QuizComponent';
import { Brain } from 'lucide-react';

const QuizModalWrapper = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenQuiz = () => setShowModal(true);
  const handleCloseQuiz = () => setShowModal(false);

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-purple-100 to-indigo-200 flex items-center justify-center p-6 border-1 border-amber-100">
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        {/* Left Side: Quiz Intro */}
        <div className="flex-1 p-8 rounded-2xl transition hover:shadow-2xl transform hover:-translate-y-1 duration-300">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-indigo-100 rounded-full shadow-md">
              <Brain className="w-10 h-10 text-indigo-600" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-indigo-800 mb-3">Test Your Knowledge</h1>
          <p className="text-gray-700 text-lg mb-6">
            Ready to challenge yourself? Click below to begin the quiz and sharpen your mind!
          </p>

          <button
            className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition duration-300"
            onClick={handleOpenQuiz}
          >
            Start Quiz
          </button>
        </div>

        {/* Right Side: Design or Features */}
        <div className="flex-1 p-8 transition hover:shadow-xl transform hover:scale-105 duration-300">
          <h2 className="text-3xl font-bold mb-4">Interactive Features</h2>
          <p className="text-lg mb-6">
            🧠 Fun & engaging quizzes <br />
            🎯 Real-time progress tracking <br />
            💡 Learn while being rewarded <br />
            🎉 Unlock bonuses when you succeed!
          </p>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="p-8 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-3xl w-full relative">
            <button
              className="absolute top-3 right-4 text-red-600 hover:text-red-800 text-3xl font-bold"
              onClick={handleCloseQuiz}
            >
              &times;
            </button>
            <QuizComponent />
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizModalWrapper;
