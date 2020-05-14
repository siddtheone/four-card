import React from 'react';
import StyledCard from './StyledCard';
import Paragraph from '../Paragraph/Paragraph';

export default function Card({src, title, desc, type}) {
    return (
        <StyledCard type={type}>
            <h2>{title}</h2>
            <Paragraph>{desc}</Paragraph>
            <Paragraph align="right"><img src={src} alt={title + 'icon'}/></Paragraph>
        </StyledCard>
    )
}