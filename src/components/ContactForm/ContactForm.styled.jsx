import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 8px;
  margin-left: 15px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  max-width: 241px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;
