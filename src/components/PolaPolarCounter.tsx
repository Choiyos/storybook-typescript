/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

type Props = {
  /** 가운데 박스 안의 내용 */
  children: React.ReactNode;
  /** 양쪽 버튼의 너비 */
  bothButtonWidth?: string | number;
  /** 가운데 박스의 너비 */
  middleButtonWidth?: string | number;
  /** 왼쪽 버튼 누를 시 발생하는 이벤트 */
  leftButtonOnClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** 오른쪽 버튼 누를 시 발생하는 이벤트 */
  rightButtonOnClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};

/** 수량 등을 조절할 수 있는 컴포넌트입니다. */
const PolaPolarCounter = ({
  children,
  bothButtonWidth,
  middleButtonWidth,
  leftButtonOnClick,
  rightButtonOnClick
}: Props) => {
  return (
    <div
      css={[
        {
          display: "flex",
          flexDirection: "row"
        }
      ]}
    >
      <button
        css={[bothButtonStyle, { bothButtonWidth }]}
        onClick={leftButtonOnClick}
      >
        -
      </button>
      <div css={[
        middleStyle,
         { middleButtonWidth }         
         ]}> {children} </div>
      <button
        css={[bothButtonStyle, { bothButtonWidth }]}
        onClick={rightButtonOnClick}
      >
        +
      </button>
    </div>
  );
};

PolaPolarCounter.defaultPorps = {};

export default PolaPolarCounter;

const bothButtonStyle = css`
  width: 80px;
  height: 88px;
  border-radius: 8px;
  border: solid 2px #b3b3b3;
  background-color: #f6f6f6;
`;

const middleStyle = css`
  width: 148px;
  height: 88px;
  border: solid 2px #b3b3b3;
  background-color: #ffffff;
  font-family: NotoSansCJKkr;
  font-size: 40px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: -1px;
  text-align: center;
  color: #333333;
`;
