import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backDrop = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
};
const modalVariants = {
  hidden: {
    y: '-100vh',
    opacity: 0
  },
  visible: {
    y: '240px',
    opacity: 1,
    transition: {
      delay: 0.5
    }
  }
};
const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className='backdrop'
          variants={backDrop}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          <motion.div className='modal' variants={modalVariants}>
            <p>Want to make a New Pizza?</p>
            <Link to='/'>
              <button>Start again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Modal;
