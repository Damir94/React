import styled from "styled-components";



const Container = styled.div`
  background-color: ${({theme}) =>theme.background};
  color: ${({theme}) => theme.color};
`;

Container.H1 = styled.h1`
  font-size: 4rem;
  text-align: center;
  `;

Container.Button = styled.button`
  background-color: ${({red}) => red ? 'var(--secondary-color)' : 'var(--primary-color)'};
  border: none;
  padding: 10px;
  display: block;
 
`;

Container.Paragraph = styled.p`
  text-align: center;
  background-color: var(--primary-color);
`;

export{Container }