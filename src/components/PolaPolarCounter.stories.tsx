import PolaPolarCounter from "./PolaPolarCounter";
import { withKnobs } from "@storybook/addon-knobs";
import React, { Children } from "react";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/PolaPolarCoutner",
  component: PolaPolarCounter,
  decorators: [withKnobs]
};

export const polaPolarCounter = () => {
  let counter:number = 1;
  return (
  <PolaPolarCounter
    leftButtonOnClick={()=>{
      action("-1").call(Children);
    }}
    rightButtonOnClick={()=>{
      action("+1").call(counter=counter+1);
    }}
  >
    {counter}
  </PolaPolarCounter>);
};

polaPolarCounter.story = {
  name: "Default"
};
