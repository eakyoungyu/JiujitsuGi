import styled from "styled-components";

const Background = styled.div`
  background-color: ${(props) => props.theme.backgroundColor.grey};
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
function Home() {
  return <Background>Home</Background>;
}
export default Home;
