import styled from "styled-components";

const Card = styled.div`
  background-color: var(--secondary-color);
  border-radius: 6px;
  padding: 1rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 0.5rem;
`;

const Avatar = styled.img`
  width: 50px;
  border-radius: 50%;
`;

const Info = styled.div`
  margin-left: 1rem;
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  span {
    margin-right: 1rem;
    display: flex;
    align-items: center;
  }

  i {
    margin-right: 0.2rem;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: var(--text-color);
  transition: all 0.2s ease-in-out;

  &:hover {
    color: var(--primary-color);
  }
`;

export default {
  Card,
  Header,
  Avatar,
  Info,
  Stats,
  Link,
};
