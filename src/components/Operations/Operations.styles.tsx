import styled from "styled-components";

const Input = styled.input`
  display: block;
  width: 50%;
  padding: 10px;
  font-size: 20px;
  border-radius: 6px;
  border: none;
  background-color: var(--secondary-color);
  color: var(--text-color);
  transition: width 0.3s linear;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Action = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 1rem 2rem 0 0;
  gap: 0.5rem;
`;

const Select = styled.select`
  padding: 0.5rem;
  border-radius: 6px;
  border: none;
  background-color: var(--secondary-color);
  color: var(--text-color);
`;

export default {
  Input,
  Select,
  Action,
};
