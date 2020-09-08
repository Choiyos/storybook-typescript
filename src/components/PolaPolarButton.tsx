/** @jsx jsx */
import { jsx, css } from "@emotion/core";

export enum ThemeTypes {
  Primary = "primary",
  Dark = "dark",
  White = "white",
  Cancel = "cancel",
  Grey = "grey",
  Selected = "selected",
};

export enum SizeTypes {
  Mininum = "minimum",
  Small = "small",
  Medium = "medium",
  Big = "big",
}

type PolaPolarButtonProps = {
  /** 버튼 텍스트 내용 */
  children: React.ReactNode;
  /** 클릭 시 호출 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** 버튼 테마 */
  theme: ThemeTypes;
  /** 버튼 크기 */
  size: SizeTypes;
  /** 버튼의 비활성화 여부 */
  disabled?: boolean;
  /** 버튼의 너비 */
  width?: string | number;
};

/** 폴라폴라에서 사용하는 버튼 목록입니다. */
const PolaPolarButton = ({
  children,
  theme,
  size,
  disabled,
  width,
  onClick
}: PolaPolarButtonProps) => {
  return (
    <button
      css={[style, themes[theme], sizes[size], { width }]}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

PolaPolarButton.defaultProps = {
  theme: "primary",
  size: "mediaum"
};

export default PolaPolarButton;

const style = css`
  width: 360px;
  height: 96px;
  border-radius: 8px;
  box-shadow: 0 0 4px 0 rgba(74, 74, 74, 0.5);
  background-blend-mode: soft-light, normal;
  font-family: NotoSansCJKkr;
  font-size: 32px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: center;
  &:disabled {
    cursor: not-allowed;
  }
`;

const themes = {
  primary: css`
    border-radius: 8px;
    background-blend-mode: soft-light, normal;
    background-image: linear-gradient(290deg, #4a4a4a, #ffffff),
      linear-gradient(to right, #0077ff, #0077ff);
    color: white;
    &:disabled {
      color: #b3b3b3;
      border-radius: 8px;
      box-shadow: 0 0 4px 0 rgba(74, 74, 74, 0.5);
      background-blend-mode: soft-light, normal;
      background-image: linear-gradient(290deg, #4a4a4a, #ffffff),
        linear-gradient(to bottom, #d9d9d9, #d9d9d9);
    }
  `,
  dark: css`
    border-radius: 8px;
    background-blend-mode: soft-light, normal;
    background-image: linear-gradient(290deg, #4a4a4a, #ffffff),
      linear-gradient(to bottom, #666666, #666666);
    color: white;
    &:disabled {
      color: #b3b3b3;
      border-radius: 8px;
      box-shadow: 0 0 4px 0 rgba(74, 74, 74, 0.5);
      background-blend-mode: soft-light, normal;
      background-image: linear-gradient(290deg, #4a4a4a, #ffffff),
        linear-gradient(to bottom, #d9d9d9, #d9d9d9);
    }
  `,
  white: css`
    background: #ffffff;
    color: #4a4a4a;
    border-radius: 8px;
    border: solid 4px #666666;
    &:disabled {
      color: #b3b3b3;
      box-shadow: 0 0 4px 0 rgba(74, 74, 74, 0.5);
      border: solid 4px #d9d9d9;
      background-color: #ffffff;
    }
  `,
  cancel: css`
    border-radius: 8px;
    border: solid 4px #ff5353;
    background-blend-mode: soft-light, normal;
    background-image: linear-gradient(290deg, #4a4a4a, #ffffff),
      linear-gradient(to bottom, #ffe9e9, #ffe9e9);
    color: #ff5353;
    &:disabled {
      color: #d9d9d9;
      border-radius: 8px;
      box-shadow: 0 0 4px 0 rgba(74, 74, 74, 0.5);
      border: solid 4px #d9d9d9;
      background: white;
    }
  `,
  grey: css`
    border-radius: 8px;
    border: solid 4px #b3b3b3;
    background-color: #f6f6f6;
    color: 666666;
  `,
  selected: css`
    border-radius: 8px;
    border: solid 4px #6687b8;
    background-color: #c6ddff;
    color: 6687b8;
  `
};

const sizes = {
  minimum: css`
    width: 161px;
    height: 56px;
    border-radius: 8px;
    border: solid 2px #bfbfbf;
    font-family: NotoSansCJKkr;
    font-size: 24px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: -0.24px;
    text-align: center;
  `,
  small: css`
    width: 304.1px;
    height: 88px;
    border-radius: 8px;
    font-family: NotoSansCJKkr;
    font-size: 32px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: center;
  `,
  medium: css`
    width: 360px;
    height: 96px;
    font-family: NotoSansCJKkr;
    font-size: 32px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: center;
  `,
  big: css`
    width: 360px;
    height: 120px;
    font-family: NotoSansCJKkr;
    font-size: 40px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: normal;
    text-align: center;
  `
};
