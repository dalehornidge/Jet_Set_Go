import styled from "styled-components";

const Bot = styled.div`
  flex: 1;
  max-height: 40%;
  display: flex;
  align-items: center; /* added this line */

  background-color: #FF99FF;
  border-radius: 20px;
  /* justify-content: space-between; */
  padding: 0px 10px;
  height: 60%;


`

const StyledH1 = styled.h1`
  flex: 1;
  text-align: center; /* optional, to center the text */
  font-size: 30px;
  color: white;
`

const StyledImage = styled.img`
  flex: 1;
  /* object-fit: cover; This will make the image cover the available space without distorting */
  height: 100%;
  width: 50%;
  padding-top: 30px;
  
  /* padding: 20px; */
`

const BotTop: React.FC = () => {
    return (
        <Bot>
            <StyledH1>Hi I'm Ada!</StyledH1>
            <StyledImage src="/img/Ada.png" alt="Ada face"/>
        </Bot>
    );
}

export default BotTop;
