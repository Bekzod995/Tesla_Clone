import React from "react";
import styled from "styled-components";
import Down from "../images/down-arrow.svg";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

function Section({
  id,
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) {
  return (
    <Wrap id={id} bgImage={backgroundImg}>
      <ItemText>
        <Fade bottom small>
          <h1>{title} </h1>
          <p>{description}</p>
        </Fade>
      </ItemText>
      <Fade bottom>
        <Buttons>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
          <DownArrow src={Down} />
        </Buttons>
      </Fade>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  align-items: center;
  background-image: url(${({ bgImage }) => bgImage});
  background-attachment: fixed;
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;
const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;
const Buttons = styled.div``;
