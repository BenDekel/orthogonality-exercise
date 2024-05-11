import React from 'react';
import './button.scss';

interface ButtonProps {
  onClick: () => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <div className="button" onClick={onClick}>
      {text}
    </div>
  );
}

export default Button;
