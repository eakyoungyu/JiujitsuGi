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
function Home() {
  const { data: brands, isLoading: brandsLoading } = useQuery<IBrands[]>(
    ["brands", "brandHome"],
    GetBrandsApi
  );
  console.log(brands);
  return (
    <Background>
      {/* {brandsLoading ? (
        <span>Loading</span>
      ) : (
        brands?.map((item) => <div>{item.name}</div>)
      )} */}
      {brandsLoading ? (
        <Loader>Loading</Loader>
      ) : (
        <BrandGrid data={brands} isLoading={brandsLoading} />
      )}
    </Background>
  );
}
export default Home;
