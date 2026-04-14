import styled from "styled-components";

export const Indicator = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Step = styled.div<{ $active: boolean }>`
  font-weight: ${(p) => (p.$active ? "bold" : "normal")};
`;