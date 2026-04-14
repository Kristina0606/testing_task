import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 80px;
  border-bottom: 1px solid #e5e5e5;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-bottom: 2px solid transparent;
  text-decoration: none;
  color: black;
  transition: all 0.2s ease;

  &.active {
    border-bottom: 2px solid black;
    font-weight: bold;
  }

  &:hover {
    border-bottom: 2px solid #999;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 16px;
`;