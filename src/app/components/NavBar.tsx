'use client'
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: blue;
  color: white;
  font-size: 40px;
`;

const Menu = styled.div`
  display: flex;
  gap: 20px;
`;

const NavBar: React.FC = () => {
  return (
    <Nav>
      <h1>JetSetGo!</h1>
      <Menu>
        <a href="/link1">Link 1</a>
        <a href="/link2">Link 2</a>
      </Menu>
    </Nav>
  );
}

export default NavBar;
