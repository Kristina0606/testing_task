import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f6f7fb;
`;

export const Card = styled.div`
  width: 420px;
  background: white;
  padding: 28px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
`;

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 6px;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

export const Button = styled.button<{ $variant?: "primary" | "ghost" }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: 0.2s ease;

  background: ${({ $variant }) =>
    $variant === "ghost" ? "transparent" : "#D3D3D3"};
  color: ${({ $variant }) =>
    $variant === "ghost" ? "#D3D3D3" : "#fff"};
  border: ${({ $variant }) =>
    $variant === "ghost" ? "1px solid #ddd" : "none"};

  &:hover {
    opacity: 0.85;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const Img = styled.img`
  width: 18px;
  height: 18px;
`;
