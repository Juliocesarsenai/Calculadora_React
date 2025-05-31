import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background-color: #444;
  color: white;
  font-size: 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;

  /* Grid support */
  grid-column: ${({ gridSpan }) => gridSpan && `span ${gridSpan}`};
  grid-row: ${({ gridRow }) => gridRow && `span ${gridRow}`};

  &:hover {
    background-color: #555;
  }
`;
