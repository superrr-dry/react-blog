import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NavigateButtonProps {
  to: string;
  text: string;
}

const NavigateButton: React.FC<NavigateButtonProps> = ({ to, text }) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(to)}>{text}</button>
  );
}

export default NavigateButton;