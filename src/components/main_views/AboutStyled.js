import styled from 'styled-components';
import { colors } from '../shared/colorsStyled.js';

export const Wrapper = styled.div`
  background-color: ${colors.bgMain};
  border: 4px double #FED5F2; outline: 10px solid white;
  margin: 50px auto 100px auto;
  overflow: hidden;
  padding: 20px 0px 35px 0px;
  width: 80%;
  z-index: 2;
`;
export const Title = styled.h1`
  padding: 0px 0 10px 0;
  text-align: center;
  width: 90%;
`;
export const Unit = styled.div`
  margin-bottom: 15px;
  width: 80%;
`;
export const Topic = styled.h3`
  margin: auto auto 5px -10px;
  text-align: left;
  &::before {
    background-image: url("../../assets/r_arrow_pink.svg");
    background-repeat: no-repeat;
    content: "";
    height: 1em; width: 1em;
    margin-left: -1.7em;
    position: absolute;
  }
`;
export const Text = styled.p`
  line-height: 1.5;
  text-align: left;
`;
// export const Skills = styled.ul`
// `;
export const Skill = styled.li`
color:rgb(105, 105, 105);
font-family: "Baskerville", Helvetica, Arial, sans-serif;
`;