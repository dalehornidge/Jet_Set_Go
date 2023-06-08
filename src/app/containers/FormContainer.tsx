import styled from "styled-components";
import TripForm from "../components/Form";

const StyledFormContainer = styled.div`
    background-color: #FF6B57;
    /* width: 80%; */
    
`

const FormContainer: React.FC = () => {
    return (
        <StyledFormContainer>
            <TripForm/>
        </StyledFormContainer>
    );
}



export default FormContainer;