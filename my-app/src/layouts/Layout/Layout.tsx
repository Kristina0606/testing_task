import { Outlet } from "react-router-dom";
import { Content, Nav, StyledLink, Wrapper } from "./Layout.styled";

export const Layout = () => {
  return (
    <Wrapper>
      <Nav>
        <StyledLink to="/" end>
          Task 1
        </StyledLink>
        <StyledLink to="/second">
          Task 2
        </StyledLink>
        <StyledLink to="/third">
          Task 3
        </StyledLink>
      </Nav>

      <Content>
        <Outlet />
      </Content>
    </Wrapper>
  );
};