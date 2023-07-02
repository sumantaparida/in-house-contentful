import styled from 'styled-components';

const NavItemStyle = styled.header`
  .link {
    color: #cfd9e0;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .active {
    padding-bottom: 2px;
    border-bottom: 2px solid #fff;
    color: #fff;
  }

  .icon {
    width: 14px;
  }
`;

export default NavItemStyle;
