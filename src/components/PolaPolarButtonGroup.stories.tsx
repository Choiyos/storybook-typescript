import React from "react";
import PolaPolarButtonGroup from "./PolaPolarButtonGroup";
import PolaPolarButton, { ThemeTypes } from "./PolaPolarButton";
import {
  withKnobs,
  text,
  radios,
  boolean,
  array
} from "@storybook/addon-knobs";

export default {
  title: "Components/PolaPoalrButtonGroup",
  component: PolaPolarButtonGroup,
  decorators: [withKnobs]
};

export const polaPoalrButtonGroup = () => {
  const direction = radios(
    "direction",
    { Row: "row", Column: "column" },
    "row"
  );
  const rightAlign = boolean("rightAlign", false);
  const gap = text("gap", "0.5rem");

  return (
    <PolaPolarButtonGroup direction={direction} rightAlign={rightAlign} gap={gap}>
      <PolaPolarButton theme={ThemeTypes.Cancel}>취소</PolaPolarButton>
      <PolaPolarButton>확인</PolaPolarButton>
    </PolaPolarButtonGroup>
  );
};

polaPoalrButtonGroup.story = {
  name: "Default"
};

export const rightAlign = () => {
  return (
    <PolaPolarButtonGroup rightAlign>
      <PolaPolarButton theme={ThemeTypes.Cancel}>취소</PolaPolarButton>
      <PolaPolarButton>확인</PolaPolarButton>
    </PolaPolarButtonGroup>
  );
};

export const column = () => {
  return (
    <PolaPolarButtonGroup direction="column">
      <PolaPolarButton>CLICK ME</PolaPolarButton>
      <PolaPolarButton>CLICK ME</PolaPolarButton>
    </PolaPolarButtonGroup>
  );
};

export const customGap = () => {
  return (
    <PolaPolarButtonGroup gap="1rem">
      <PolaPolarButton theme={ThemeTypes.Cancel}>취소</PolaPolarButton>
      <PolaPolarButton>확인</PolaPolarButton>
    </PolaPolarButtonGroup>
  );
};

export const customGapColumn = () => {
  return (
    <PolaPolarButtonGroup direction="column" gap="1rem">
      <PolaPolarButton>CLICK ME</PolaPolarButton>
      <PolaPolarButton>CLICK ME</PolaPolarButton>
    </PolaPolarButtonGroup>
  );
};
