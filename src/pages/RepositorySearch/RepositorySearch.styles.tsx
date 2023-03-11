import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const H1 = styled.h1`
  font-size: 2.5rem;
  margin-top: 2rem;
`;

const Input = styled.input`
  display: block;
  width: 50%;
  padding: 10px;
  font-size: 20px;
  border-radius: 6px;
  border: none;
  background-color: var(--secondary-color);
  color: var(--text-color);
`;

const SortContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const Select = styled.select`
  padding: 0.5rem;
  border-radius: 6px;
  border: none;
  background-color: var(--secondary-color);
  color: var(--text-color);
`;

const Spinner = styled.img`
  display: block;
  width: 220px;
  margin: 0 auto;
`;

const RepositoryList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
  margin-top: 2rem;
`;

export default {
  Container,
  H1,
  Input,
  SortContainer,
  Spinner,
  Select,
  RepositoryList,
};
