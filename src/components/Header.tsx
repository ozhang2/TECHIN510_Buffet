import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #745E58;
  padding: 16px 40px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
  object-fit: contain;
`;

const Nav = styled.nav`
  display: flex;
  gap: 24px;
  align-items: center;
  margin-left: 40px;
`;

const NavRight = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #FBF4EE;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

const SignUpButton = styled.button`
  background-color: #FBF4EE;
  color: #000000;
  border: none;
  padding: 8px 18px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #ECE5DF;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">
          <Logo>
            <LogoImage src={process.env.PUBLIC_URL + '/images/nunu-logo.png'} alt="NUNU Logo" />
          </Logo>
        </Link>
        <Nav>
          <NavLink to="/ai-generate/category">AI Generate</NavLink>
          <NavLink to="/customized-services">Customized Services</NavLink>
          <NavLink to="/template-reference">Template Reference</NavLink>
          <NavLink to="/community">Community</NavLink>
        </Nav>
        <NavRight>
          <NavLink to="/login">Log in</NavLink>
          <SignUpButton>Sign up</SignUpButton>
        </NavRight>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
