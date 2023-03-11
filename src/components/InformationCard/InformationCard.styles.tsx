import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid var(--secondary-color);
  background-color: var(--bg-card-color);
  border-radius: 6px;
  padding: 1rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 0.5rem;
  height: 100px;
`;

const Avatar = styled.img`
  width: 50px;
  border-radius: 50%;
`;

const Info = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1rem;
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .stars {
    transform: translateY(10%);
  }
`;

const Title = styled.h2`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-word;
`;

const Link = styled.a`
  text-decoration: none;
  color: var(--text-color);
  transition: all 0.2s ease-in-out;

  &:hover {
    color: var(--primary-color);
  }
`;

const Description = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
`;

const ImageIcon = styled.img`
  width: 20px;
  height: auto;
`;

export default {
  Card,
  Header,
  Avatar,
  Info,
  Stats,
  Title,
  Description,
  ImageIcon,
  Link,
};
