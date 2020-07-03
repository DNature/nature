import React from 'react';
import PropTypes from 'prop-types';

interface B {
  children: React.ReactNode;
}

const Button: React.FC<B> = ({ children }) => (
  <>
    <button className='px-2 py-5'>{children}</button>
  </>
);

Button.propTypes = { children: PropTypes.node.isRequired };

export default Button;
