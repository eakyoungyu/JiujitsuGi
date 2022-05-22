import styled from "styled-components";

const FooterWrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundColor.grey};
  padding: 20px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  span {
    margin-bottom: 5px;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <span>Contact us 📧 great.ddobok@gmail.com</span>
      <footer>Copyright &copy; 2022 DDobok</footer>
    </FooterWrapper>
  );
}
export default Footer;
