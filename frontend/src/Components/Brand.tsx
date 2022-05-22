import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { IBrands } from "../Api/Api";
import { motion } from "framer-motion";
import { theme } from "../theme";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  width: 22vw;
  height: 22vw;
  background-color: ${(props) => props.theme.white.lighter};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 873px) {
    width: 29vw;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (max-width: 400px) {
    width: 40vw;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const InfoBox = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoThumnailBox = styled.div`
  margin: 5px 0px;
  height: 50%;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 873px) {
    margin-top: 5px;
  }
  @media only screen and (min-width: 1500px) {
    margin: 10px 0px;
  }
`;
const InfoThumnail = styled.img`
  width: 40%;
  object-fit: contain;
  @media only screen and (min-width: 1500px) {
    width: 50%;
  }
`;
const InfoTitle = styled.h1`
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 20px;
  @media only screen and (max-width: 873px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
  @media only screen and (min-width: 1500px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;
const InfoDetail = styled.div`
  font-size: 12px;
  /* width: 80%; */
  text-align: center;
  @media only screen and (min-width: 1500px) {
    font-size: 14px;
  }
`;
const LinkBox = styled(motion.div)`
  margin-top: 20px;
  padding: 10px 15px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.grey.darker};
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.white.lighter};
  @media only screen and (max-width: 873px) {
    padding: 8px 10px;
    margin-top: 15px;
  }
`;
const LinkBoxVariants = {
  initial: {},
  hover: {
    scale: 1.08,
    backgroundColor: "#0071e3",
    transition: {
      duration: 0.3,
    },
  },
};
interface IBrand {
  data: IBrands | undefined;
}
function Brand({ data }: IBrand) {
  console.log(data?.first_photo);
  return (
    <Wrapper>
      <InfoBox>
        <InfoThumnailBox>
          <InfoThumnail src={`${data?.first_photo}`}></InfoThumnail>
        </InfoThumnailBox>
        <InfoTitle>{data?.name}</InfoTitle>
        <InfoDetail>{data?.description}</InfoDetail>
      </InfoBox>
      <LinkBox variants={LinkBoxVariants} initial="initial" whileHover="hover">
        <a href={data?.link} target="_blank">
          <span>구매하러 가기</span>
        </a>
      </LinkBox>
    </Wrapper>
  );
}
export default Brand;
