import React from "react";
import styled from "styled-components";

const TimelineContainer = styled.ul`
  position: relative;
  width: 660px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 1em 0;
  list-style-type: none;

  @media screen and (max-width: 660px) {
    width: 100%;
    padding: 4em 0 1em 0;
  }
  &:after {
    content: "";
    position: absolute;
    height: 100%;
    border-right: 3px solid rgb(245, 245, 245);
    top: 0;
    left: calc(50% + 1px);
    z-index: 0;
  }
`;

const TimelineItem = styled.li`
  padding: 1em 0;
  overflow: hidden;
`;

const FlagWrapper = styled.div`
  position: relative;
  display: inline-block;
  text-align: center;
`;

const Flag = styled.span`
  position: relative;
  display: inline;
  background: ${(props) => props.backgroundColor};
  padding: 6px 10px;
  border-radius: 5px;
  font-weight: 600;
  text-align: left;
  z-index: 1;
`;

const DirectionWrapper = styled.div`
  position: relative;
  width: 300px;
  float: ${(props) => props.float};
  display: flex;
  justify-content: center;
  @media screen and (max-width: 660px) {
    float: none;
    width: 100%;
    text-align: center;
  }
`;

const FlagBefore = styled.div`
  position: absolute;
  top: 50%;
  right: ${(props) => (props.float === "left" ? "-39px" : "auto")};
  left: ${(props) => (props.float === "right" ? "-34px" : "auto")};
  content: " ";
  display: block;
  width: 12px;
  height: 12px;
  margin-top: -10px;
  background: #fff;
  border-radius: 10px;
  border: 4px solid ${(props) => props.flagColor};
  z-index: 10;
`;

const FlagAfter = styled.div`
  content: "";
  position: absolute;
  left: ${(props) => (props.float === "left" ? "100%" : "auto")};
  right: ${(props) => (props.float === "right" ? "100%" : "auto")};
  top: 50%;
  height: 0;
  width: 0;
  margin-top: -8px;
  border: solid transparent;
  border-${(props) => (props.float === "left" ? "left" : "right")}-color: ${(
  props
) => props.backgroundColor};
  border-width: 8px;
  pointer-events: none;
`;

const TimeWrapper = styled.span`
  display: inline;
  line-height: 1em;
  font-size: 0.66666em;
  color: ${(props) => props.timeColor};
  vertical-align: middle;

  @media screen and (max-width: 660px) {
    display: block;
    position: relative;
    margin: 4px 0 0 0;
    z-index: 14;
  }
`;

const Desc = styled.div`
  margin: 1em 0 0 0;
  font-size: 0.77777em;
  font-style: italic;
  line-height: 1.5em;
  max-width: 45%;
  z-index: 1;
  float: ${(props) => (props.float === "right" ? "left" : "right")};
  @media screen and (max-width: 660px) {
    position: relative;
    margin: 1em 0 0 0;
    padding: 1em;
    background: rgb(245, 245, 245);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
    z-index: 15;
    max-width: 100%;
  }
`;

const Timeline = ({ items }) => {
  return (
    <TimelineContainer>
      {items.map((item, index) => (
        <TimelineItem key={index}>
          <DirectionWrapper float={item.float}>
            <FlagWrapper>
              <Flag backgroundColor={item.backgroundColor}>{item.company}</Flag>
              <TimeWrapper timeColor={item.timeColor}>{item.time}</TimeWrapper>
            </FlagWrapper>
            <FlagBefore flagColor={item.flagColor} float={item.float} />
            <FlagAfter
              backgroundColor={item.backgroundColor}
              float={item.float}
            />
          </DirectionWrapper>
          <Desc float={item.float}>{item.description}</Desc>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};

export default Timeline;
