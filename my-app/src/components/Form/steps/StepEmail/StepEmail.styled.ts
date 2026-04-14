import styled from "styled-components";

export const FieldRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Label = styled.label`
  min-width: 80px;
  text-align: start;
  font-weight: 600;
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px 12px;
  max-width: 300px;
  border: solid 1px;
  border-radius: 8px;
`;

export const Error = styled.p`
  color: red;
`;
