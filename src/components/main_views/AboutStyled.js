import styled from 'styled-components';
import { colors, device } from '../shared/templateStyles';

export const Wrapper = styled.div`
  background-color: ${colors.bgMain};
  margin: 30px auto 100px auto;
  outline: 10px solid grey;
  // overflow: auto;
  padding: 40px 0px 45px 0px;
  position: relative;
  width: 800px;
  z-index: 2;

  @media ${device.mobileL} {
    margin: 40px auto 60px auto;
    outline: none;
    padding-top: 20px;
    width: 90vw;
  }
`;
export const Title = styled.h1`
  padding: 0px 0 10px 0;
  text-align: center;
  width: 90%;
`;
export const Unit = styled.div`
  margin-bottom: 15px;
  width: 80%;

  @media ${device.mobileL} {
    width: 85%;
  }
`;
export const Topic = styled.h3`
  margin: auto auto 5px -10px;
  text-align: left;
  @media ${device.mobileL} {
    margin-left: 0;
  }
  &::before {
    background-image: url("../../assets/r_arrow_pink.svg");
    background-repeat: no-repeat;
    content: "";
    height: 1em; width: 1em;
    margin-left: -1.7em;
    position: absolute;

    @media ${device.mobileL} {
      height: 1.2em; width: 1.2em;
      margin-left: -1.5em;
    }
  }
`;
export const Text = styled.p`
  line-height: 1.5;
  text-align: left;
`;
export const Skill = styled.li`
  font-family: "Baskerville", Helvetica, Arial, sans-serif;
`;