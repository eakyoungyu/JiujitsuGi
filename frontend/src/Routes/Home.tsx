import styled from "styled-components";
import BrandGrid from "../Components/BrandGrid";

const Background = styled.div`
  background-color: ${(props) => props.theme.backgroundColor.grey};
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;
function Home() {
  return (
    <Background>
      Gi Brands
      <BrandGrid />
    </Background>
  );
}
export default Home;
