// interface IBrandComponent {
//   brand?: string;
//   { brand }: IBrandComponent

import styled from "styled-components";
import { theme } from "../theme";

// }
const Wrapper = styled.div`
  width: 22vw;
  height: 22vw;
  background-color: ${(props) => props.theme.backgroundColor.white};
`;
const InfoBox = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const InfoThumnail = styled.img`
  width: 40%;
  /* height: 50%; */
  border-radius: 50%;
`;
const InfoTitle = styled.h1`
  font-weight: 600;
  font-size: 16px;
`;
const InfoDetail = styled.h2`
  font-size: 12px;
`;
const LinkBox = styled.div``;
function Brand() {
  return (
    <Wrapper>
      <InfoBox>
        <InfoThumnail
          src={`https://cdn.shopify.com/s/files/1/0066/6468/3635/collections/hyperfly_350x350.jpg?v=1542634798`}
        ></InfoThumnail>
        <InfoTitle>Hyperfly</InfoTitle>
        <InfoDetail>The best gi in the world</InfoDetail>
        <InfoDetail>By seokyoung</InfoDetail>
      </InfoBox>
      <LinkBox></LinkBox>
    </Wrapper>
  );
}
export default Brand;
