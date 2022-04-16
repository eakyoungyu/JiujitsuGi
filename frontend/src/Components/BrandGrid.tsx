import styled from "styled-components";
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

function BrandGrid() {
  return (
    <GirdWrapper>
      <Brand></Brand>
      <Brand></Brand>
      <Brand></Brand>
      <Brand></Brand>
      <Brand></Brand>
      <Brand></Brand>
      <Brand></Brand>
      <Brand></Brand>
      <Brand></Brand>
      <Brand></Brand>
      <Brand></Brand>
    </GirdWrapper>
  );
}
export default BrandGrid;
