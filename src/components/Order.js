import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
    transition: {
      staggerChildren: 0.5
    }
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      when: 'beforeChildren'
    }
  }
};
const childVaraints = {
  hidden: {
    opacity: 0,
    x: 0
  },
  visible: {
    opacity: 1,
    x: 0
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
};

const Order = ({ pizza }) => {
  return (
    <motion.div
      className='container order'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h2>Thank you for your order :)</h2>

      <motion.div variants={childVaraints}>
        <p>You ordered a {pizza.base} pizza with:</p>
      </motion.div>

      {pizza.toppings.map((topping) => (
        <div key={topping}>{topping}</div>
      ))}
    </motion.div>
  );
};

export default Order;
