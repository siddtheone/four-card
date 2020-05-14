import styled from 'styled-components';

const Heading = styled.h1`
    color: hsl(234, 12%, 34%);
    font-weight: ${props => props.primary ? 'bold' : '200'};
    text-align: center;
    font-size: 2rem;
`;

export default Heading;