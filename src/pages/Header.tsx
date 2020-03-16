import React from 'react';
import styled from 'styled-components';

const HeaderTag = styled.header`
  display: flex;
`;

const Header: React.FC = () => {
  return (
    <HeaderTag/>
  );
}

export default Header;