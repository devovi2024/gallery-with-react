import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const BlogSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [blogsPerPage, setBlogsPerPage] = useState(1); 

  const blogs = [
    {
      "id": 1,
      "name": "Kingdom of Solomon",
      "image": "https://i.ibb.co.com/v6GL4QZ5/Kingdom-of-Solomon.jpg",
      "category": "Religious Historical",
      "description": "A cinematic depiction of Prophet Solomon’s reign, his wisdom, and battles against dark forces.",
      "price": 11.49
    },
    {
      "id": 2,
      "name": "Yunus Emre: Aşkın Yolculuğu",
      "image": "https://i.ibb.co.com/whFhKKps/Yunus-Emre.jpg",
      "category": "Spiritual Drama",
      "description": "A poetic journey of the Sufi mystic Yunus Emre, exploring inner peace and divine love.",
      "price": 9.99
    },
    {
      "id": 3,
      "name": "Salahuddin Ayyubi",
      "image": "https://i.ibb.co.com/TMXRChTN/Salahuddin-Ayyubi.jpg",
      "category": "War & History",
      "description": "The epic tale of Salahuddin Ayyubi and his quest to reclaim Jerusalem.",
      "price": 13.99
    },
    {
      "id": 4,
      "name": "Al-Risalah",
      "image": "https://i.ibb.co.com/HDg7y51s/Al-Risalah.jpg",
      "category": "Biographical Epic",
      "description": "An alternative version of 'The Message', directed by Moustapha Akkad, capturing early Islamic history.",
      "price": 10.50
    },
    {
      "id": 5,
      "name": "Fatih",
      "image": "https://i.ibb.co.com/8zLRZ8d/fatih.jpg",
      "category": "Ottoman Historical",
      "description": "The rise of Sultan Mehmed II, the conqueror of Constantinople, in this dramatic series.",
      "price": 12.25
    },
    {
      "id": 6,
      "name": "Payitaht: Abdülhamid",
      "image": "https://i.ibb.co.com/Yj5DYfc/payitaht.jpg",
      "category": "Historical Political Drama",
      "description": "The political resistance and wisdom of Sultan Abdul Hamid II during the final days of the Ottoman Empire.",
      "price": 14.75
    }
  ]
  

  // Responsive logic
  useEffect(() => {
    const updateBlogsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setBlogsPerPage(4); 
      } else if (width >= 640) {
        setBlogsPerPage(2); 
      } else {
        setBlogsPerPage(1); 
      }
    };

    updateBlogsPerPage();
    window.addEventListener('resize', updateBlogsPerPage);
    return () => window.removeEventListener('resize', updateBlogsPerPage);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + blogsPerPage) % blogs.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - blogsPerPage + blogs.length) % blogs.length
    );
  };

  const getCurrentBlogs = () => {
    const end = currentIndex + blogsPerPage;
    if (end <= blogs.length) {
      return blogs.slice(currentIndex, end);
    } else {
      return [...blogs.slice(currentIndex), ...blogs.slice(0, end - blogs.length)];
    }
  };

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className={`grid gap-6 
              ${blogsPerPage === 1 ? 'grid-cols-1' : ''} 
              ${blogsPerPage === 2 ? 'sm:grid-cols-2' : ''} 
              ${blogsPerPage === 4 ? 'lg:grid-cols-4' : ''}`}
          >
            {getCurrentBlogs().map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{blog.title}</h2>
                  <p className="text-gray-600 text-sm mt-2">{blog.description}</p>
                  <button className="text-indigo-600 font-medium mt-2">Read More</button>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center mt-6 space-x-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={prevSlide}
            className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-600 transition"
          >
            <FaArrowLeft size={20} />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={nextSlide}
            className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-600 transition"
          >
            <FaArrowRight size={20} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;
