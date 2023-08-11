import React from "react";
import {Container} from './style.js';

const StyledTest = () => {
    return (
      <Container>
        <Container.H1>Styled Components</Container.H1>
        <Container.H1 hey>Styled Components</Container.H1>
        <Container.Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, obcaecati?</Container.Paragraph>
        <Container.Button>Click me</Container.Button>
        <Container.Button red >Click me</Container.Button>
      </Container>
    )
}

export default StyledTest;