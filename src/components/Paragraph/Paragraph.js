import styled from 'styled-components';

const Paragraph = styled.p`
    color: hsl(229, 6%, 66%);
    text-align: ${props => props.align ? props.align : 'initial'};
    
`;

export default Paragraph;