import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";

const NavBar = styled(motion.div)`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  position: fixed;
  top: 0;
  z-index: 2;
  background-color: ${(props) => props.theme.navColor};
`;

const Item = styled.div`
  color: #e7e7e7;
  cursor: pointer;
  margin-right: 30px;
  font-size: 14px;
  &:hover {
    color: white;
  }
`;
function Nav() {
  return (
    <NavBar>
      <Item>
        <Link to={"/"}>
          {/* <FontAwesomeIcon icon={faApple} size="lg" /> */}
          Main Icon
        </Link>
      </Item>
      <Item>
        <Link to={"/projects"}>Nav1</Link>
      </Item>
      <Item>
        <Link to={"/profile"}>Nav2</Link>
      </Item>
    </NavBar>
  );
}

export default Nav;
