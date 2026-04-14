import styled from "styled-components";

export const FieldRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Label = styled.label`
  min-width: 100px;
  font-weight: 600;
  text-align: start;
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