
import { ButtonContainer } from './styles';

const Button = ({ label, onClick, gridSpan, gridRow }) => {
  return (
    <ButtonContainer onClick={onClick} gridSpan={gridSpan} gridRow={gridRow}>
      {label}
    </ButtonContainer>
  );
};

export default Button;
