import styled from "styled-components";
import BrandGrid from "../Components/BrandGrid";
import { useQuery } from "react-query";
import { GetBrandsApi, IBrands } from "../Api/Api";

const Background = styled.div`
  background-color: ${(props) => props.theme.backgroundColor.grey};
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;
const Loader = styled.div`
  height: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MsgBox = styled.div`
  margin: 20px;

  margin-bottom: 0px;
  font-size: 18px;
  text-align: center;
  span {
    margin-right: 5px;
    :nth-child(2) {
      color: ${(props) => props.theme.grey.lighter};
    }
  }
  @media only screen and (min-width: 1500px) {
    margin: 50px 10px;
    font-size: 28px;
  }
`;
function Home() {
  const { data: brands, isLoading: brandsLoading } = useQuery<IBrands[]>(
    ["brands", "brandHome"],
    GetBrandsApi
  );
  console.log(brands);
  return (
    <Background>
      <MsgBox>
        <span>DDobok 또복.</span>
        <span>당신에게 어울리는 도복을 골라보세요</span>
      </MsgBox>
      {brandsLoading ? (
        <Loader>Loading</Loader>
      ) : (
        <BrandGrid data={brands} isLoading={brandsLoading} />
      )}
    </Background>
  );
}
export default Home;
