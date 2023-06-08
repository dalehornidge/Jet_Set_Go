'use client'
import React from 'react';
import styled from 'styled-components';
import { Caveat } from '@next/font/google';

const caveat = Caveat({ 
  subsets: ['latin'],
  weight: '400' 
});

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px 150px;
  padding-left: 200px;
  background-color: #FFA857;
  color: white;
  font-size: 40px;
`;

const StyledH1 = styled.h1`
  font-size: 75px;
  `;

const Menu = styled.div`
  display: flex;
  gap: 50px;
  padding: 20px;
`;

const StyledLink = styled.a`
  font-size: 20px;
`

const NavBar: React.FC = () => {
  return (
    <Nav>
      <StyledH1 className={caveat.className}>JetSetGo!</StyledH1>
      <Menu>
        <StyledLink href="/link1">Log-in</StyledLink>
        <StyledLink href="/link2">About Us</StyledLink>
      </Menu>
    </Nav>
  );
}

export default NavBar;