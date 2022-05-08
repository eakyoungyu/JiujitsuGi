import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";

const NavBar = styled(motion.div)`
  width: 100%;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  position: fixed;
  top: 0;
  z-index: 2;
  background-color: ${(props) => props.theme.navColor};
`;
const Title = styled.h1`
  position: absolute;
  top: 15px;
  left: 10px;
  margin: auto 0;
  z-index: 3;
  width: 30px;
  font-size: 16px;
  letter-spacing: 10px;
  font-weight: 700;
  color: #e7e7e7;
  @media only screen and (max-width: 873px) {
    font-size: 14px;
    letter-spacing: 1px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 12px;
    letter-spacing: 1px;
  }
`;
const Item = styled.div`
  color: #e7e7e7;
  cursor: pointer;
  margin-right: 30px;
  font-size: 14px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:hover {
    color: white;
  }
  @media only screen and (max-width: 400px) {
    margin-right: 10px;
    font-size: 11px;
  }
`;
const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
  bottom: -10px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.white.darker};
`;
function Nav() {
  const homeMatch = useRouteMatch("/");
  const nav1Match = useRouteMatch("/nav1");
  const nav2Match = useRouteMatch("/nav2");
  return (
    <>
      <NavBar>
        <Title>DDobok</Title>
        <Item>
          <Link to={"/"}>
            {/* <FontAwesomeIcon icon={faApple} size="lg" /> */}
            브랜드
            {homeMatch?.isExact && <Circle layoutId="circle" />}
          </Link>
        </Item>
        <Item>
          <Link to={"/nav1"}>
            새도복 {nav1Match?.isExact && <Circle layoutId="circle" />}
          </Link>
        </Item>
        <Item>
          <Link to={"/nav2"}>
            내정보 {nav2Match?.isExact && <Circle layoutId="circle" />}
          </Link>
        </Item>
      </NavBar>
    </>
  );
}

export default Nav;
