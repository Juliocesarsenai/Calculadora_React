import Input from './components/Input';
import Button from './components/Button';
import { Container, Content } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
  };

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  };

  const handleMinusNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const result = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(result));
      setOperation('');
    }
  };

  const handleMultiplyNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    } else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setOperation('');
    }
  };

  const handleDividNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const division = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(division));
      setOperation('');
    }
  };

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '*':
          handleMultiplyNumbers();
          break;
        case '/':
          handleDividNumbers();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(5, 60px)',
            gap: '8px',
            marginTop: '20px'
          }}
        >
          <Button label="x" onClick={handleMultiplyNumbers} />
          <Button label="/" onClick={handleDividNumbers} />
          <Button label="c" onClick={handleOnClear} />
          <Button label="." onClick={() => handleAddNumber('.')} />

          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={handleMinusNumbers} />

          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={handleSumNumbers} />

          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="=" onClick={handleEquals} gridRow={2} />

          <Button label="0" onClick={() => handleAddNumber('0')} gridSpan={2} />
          <Button label="," onClick={() => handleAddNumber(',')} />
        </div>
      </Content>
    </Container>
  );
};

export default App;
