import styled from 'styled-components';

export const HeaderStyle = styled.header`
  width: 100vw;
  height: 6rem;
  position: sticky;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border-bottom: 1px solid #dddddd;

  div {
    height: 100%;
    display: flex;
    align-items: center;

    img {
      height: 100%;
    }
  }

  @media (max-width: 950px) {
    img {
      display: none;
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;

  &::before {
    content: ' ';
    height: 3rem;
    border-left: 1px solid #999999;
    margin: 0 30px;
  }

  li a {
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: #999999;
    text-transform: uppercase;
    font-weight: bold;
  }

  li a.active {
    color: #444444;
  }

  li + li {
    margin-left: 30px;
  }

  @media (max-width: 950px) {
    &::before {
      display: none;
    }
  }
`;

export const ContentProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;

  strong {
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: #666666;
  }

  button {
    font-size: 1rem;
    line-height: 1.4rem;
    color: #de3b3b;
    border: none;
    background: none;
  }

  button:hover {
    text-decoration: underline;
  }
`;
