import styled from "styled-components";

const Bot = styled.div`
    background-color: #8f8585;
    border-radius: 20px;
    padding: 40px;
    `

const Image = styled.img`
    width: 500%;
    border-radius: 100%;
    `


const BotFace: React.FC = () => {
    return (
        <Bot>
            <h1>Hi I'm Ada!</h1>
            <Image src="/img/Ada.jpg" alt="Ada face"/>
        </Bot>
    );
}

export default BotFace;