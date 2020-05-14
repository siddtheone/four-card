import styled from 'styled-components';

const StyledCard = styled.section`
    border-radius: 5px;
    border-top: ${props => `5px solid ` + [
        'hsl(180, 62%, 55%)',
        'hsl(0, 78%, 62%)',
        'hsl(34, 97%, 64%)',
        'hsl(212, 86%, 64%)'][props.type]
    };
    padding: 1em;
    box-shadow: 2px 10px 15px hsl(229, 6%, 66%), -2px 10px 15px hsl(229, 6%, 66%);
    margin-bottom: 1.5em;
    background: white;
`;

export default StyledCard;