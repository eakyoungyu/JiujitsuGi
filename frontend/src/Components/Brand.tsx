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
  font-size: 18px;
`;
const InfoDetail = styled.h2`
  font-size: 14px;
`;
const LinkBox = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.pointColor.red};
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
          <span>Go to website</span>
        </a>
      </LinkBox>
    </Wrapper>
  );
}
export default Brand;
