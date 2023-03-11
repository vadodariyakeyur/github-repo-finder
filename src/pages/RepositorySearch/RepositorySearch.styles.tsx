import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-top: 2rem;
`;

const Spinner = styled.img`
  display: block;
  width: 220px;
  margin: 0 auto;
`;

const Message = styled.div`
  font-size: 1.5rem;
  margin-top: 10rem;
  text-align: center;
`;

const RepositoryList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
  margin-top: 2rem;
`;

export default {
  Container,
  Heading,
  Message,
  Spinner,
  RepositoryList,
};
