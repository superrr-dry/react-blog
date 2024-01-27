import { useNavigate } from 'react-router-dom';

interface NavigateButtonProps {
  to: string;
  text: string;
}

const NavigateButton = ({ to, text }: NavigateButtonProps) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(to)}>{text}</button>
  );
}

export default NavigateButton;