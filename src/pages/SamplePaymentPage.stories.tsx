import React from "react";
import PolaPolarButtonGroup from "../components/PolaPolarButtonGroup";
import PolaPolarButton, { ThemeTypes } from "../components/PolaPolarButton";
import {
  withKnobs,
  text,
  radios,
  boolean,
  array
} from "@storybook/addon-knobs";
import SamplePaymentPage from "./SamplePaymentPage";

export default {
  title: "Pages/Payment",
  component: SamplePaymentPage,
  decorators: [withKnobs],
  parameters:{
    docs:{
      inlineStories: false,
    }
  }
};

export const samplePaymentPage = () => {
  const isFree = boolean("isFree",false);

  return(
    <SamplePaymentPage
  isFree = {isFree}
  >
  </SamplePaymentPage>
  );
}

samplePaymentPage.story ={
  name: "Default"
};

export const freePage = ()=>{
  return(
    <SamplePaymentPage
    isFree = {true}
    >
    </SamplePaymentPage>
  );
}