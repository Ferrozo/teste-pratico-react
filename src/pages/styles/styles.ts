import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
`;

export const LoginBox = styled.div`
  background-color: white;
  padding: 32px 24px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 320px;
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 24px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Input = styled.input<{ hasError?: boolean }>`
  padding: 12px;
  border-radius: 6px;
  border: 1px solid ${({ hasError }) => (hasError ? "#e74c3c" : "#ccc")};
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: ${({ hasError }) => (hasError ? "#e74c3c" : "#666")};
  }
`;

export const Button = styled.button`
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 12px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #357bd8;
  }
`;

export const ErrorText = styled.span`
  color: #e74c3c;
  font-size: 13px;
  text-align: left;
  margin-top: -10px;
`;
