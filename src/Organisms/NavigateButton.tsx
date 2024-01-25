import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigateButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/blog')}>ブログ投稿画面へ</button>
  );
}

export default NavigateButton;