import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { IBrands } from "../Api/Api";
import { theme } from "../theme";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  width: 22vw;
  height: 22vw;
  background-color: ${(props) => props.theme.backgroundColor.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InfoBox = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const InfoThumnailBox = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
`;
const InfoThumnail = styled.img`
  width: 40%;
  object-fit: contain;
`;
const InfoTitle = styled.h1`
  font-weight: 600;
  font-size: 22px;
`;
const InfoDetail = styled.h2`
  font-size: 12px;
`;
const LinkBox = styled.div`
  margin-top: 40px;
  width: 40%;
  height: 25px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.grey.darker};
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.white.lighter};
`;
interface IBrand {
  data: IBrands | undefined;
}
function Brand({ data }: IBrand) {
  console.log(data?.first_photo);
  return (
    <Wrapper>
      <InfoBox>
        <InfoThumnailBox>
          <InfoThumnail
            src={`http://127.0.0.1:8000${data?.first_photo}`}
          ></InfoThumnail>
        </InfoThumnailBox>
        <InfoTitle>{data?.name}</InfoTitle>
        <InfoDetail>{data?.description}</InfoDetail>
      </InfoBox>
      <LinkBox>
        <a href={data?.link} target="_blank">
          <span>구매하러 가기</span>
        </a>
      </LinkBox>
    </Wrapper>
  );
}
export default Brand;
