/** @jsx jsx */
import PolaPolarButton, { ThemeTypes, SizeTypes } from "./PolaPolarButton";
import { jsx, css } from "@emotion/core";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/PolaPolarButton",
  component: PolaPolarButton,
  decorators: [withKnobs]
};

export const polaPolarButton = () => {
  const label = text("children", "BUTTON");
  const size = select("size", SizeTypes, SizeTypes.Medium);
  const theme = select(
    "theme",
    ThemeTypes,
    ThemeTypes.Primary
  );
  const disabled = boolean("disabled", false);
  const width = text("width", "");

  return (
    <PolaPolarButton
      size={size}
      theme={theme}
      disabled={disabled}
      width={width}
      onClick={action("onClick")}
    >
      {label}
    </PolaPolarButton>
  );
};

polaPolarButton.story = {
  name: "Default"
};

export const primaryButton = () =>{
  return <PolaPolarButton>PRIMARY</PolaPolarButton>;
}

export const darkButton = () =>{
  return <PolaPolarButton theme={ThemeTypes.Dark}>DARK</PolaPolarButton>;
}

export const whiteButton = () =>{
return <PolaPolarButton theme={ThemeTypes.White}>WHITE</PolaPolarButton>;
}

export const cancelButton = () =>{
  return <PolaPolarButton theme={ThemeTypes.Cancel}>CANCEL</PolaPolarButton>;
}

export const greyButton = () =>{
  return <PolaPolarButton theme={ThemeTypes.Grey}>GREY</PolaPolarButton>;
}

export const selectedButton = () =>{
  return <PolaPolarButton theme={ThemeTypes.Selected}>SELECTED</PolaPolarButton>;
}

const buttonWrapper = css`
  .description {
    margin-bottom: 0.5rem;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;

export const sizes = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <div className="description">Minimum</div>
        <PolaPolarButton size={SizeTypes.Mininum}>MINIMUM</PolaPolarButton>
      </div>      
      <div>
        <div className="description">Small</div>
        <PolaPolarButton size={SizeTypes.Small}>BUTTON</PolaPolarButton>
      </div>
      <div>
        <div className="description">Medium</div>
        <PolaPolarButton size={SizeTypes.Medium}>BUTTON</PolaPolarButton>
      </div>
      <div>
        <div className="description">Big</div>
        <PolaPolarButton size={SizeTypes.Big}>BUTTON</PolaPolarButton>
      </div>
    </div>
  );
};

export const disabled = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <PolaPolarButton disabled>PRIMARY</PolaPolarButton>
      </div>
      <div>
        <PolaPolarButton disabled theme={ThemeTypes.Dark}>
          DARK
        </PolaPolarButton>
      </div>
      <div>
        <PolaPolarButton disabled theme={ThemeTypes.White}>
          WHITE
        </PolaPolarButton>
      </div>
      <div>
        <PolaPolarButton disabled theme={ThemeTypes.Cancel}>
          CANCEL
        </PolaPolarButton>
      </div>
    </div>
  );
};