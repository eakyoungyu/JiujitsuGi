import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer } from "@fortawesome/free-solid-svg-icons";
const Background = styled.div`
  background-color: ${(props) => props.theme.backgroundColor.grey};
  width: 100%;
  height: 100vh;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;

const MsgBox = styled.div`
  margin: 20px;

  margin-bottom: 0px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  text-align: center;

  span {
    :nth-child(1) {
      color: ${(props) => props.theme.grey.lighter};
    }
  }
  @media only screen and (min-width: 1500px) {
    margin: 50px 10px;
    font-size: 28px;
  }
`;
function NewGi() {
  return (
    <Background>
      <MsgBox>
        <span>다음 업데이트를 기다려주세요</span>
      </MsgBox>
    </Background>
  );
}
export default NewGi;
