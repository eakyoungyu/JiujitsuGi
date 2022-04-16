import styled from "styled-components";
import { IBrands } from "../Api/Api";
import Brand from "./Brand";
const GirdWrapper = styled.div`
  width: 100vw;
  padding: 20px;
  background-color: ${(props) => props.theme.backgroundColor.grey};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto-fill, auto-fill);
  grid-row-gap: 1em;
  grid-column-gap: 1em;
  justify-items: center;
`;
const Loader = styled.div`
  height: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
interface IBrandGrid {
  data: IBrands[] | undefined;
  isLoading: boolean;
}
function BrandGrid({ data, isLoading }: IBrandGrid) {
  return (
    <GirdWrapper>
      {data?.map((brand) => (
        <Brand data={brand} />
      ))}
    </GirdWrapper>
  );
}
export default BrandGrid;
