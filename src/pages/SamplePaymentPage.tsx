import React from "react";
import PolaPolarButtonGroup from "../components/PolaPolarButtonGroup";
import PolaPolarDialog from "../components/PolaPolarDialog";
import PolaPolarButton, {
  ThemeTypes,
  SizeTypes
} from "../components/PolaPolarButton";
import { action } from "@storybook/addon-actions";
import { css, jsx } from "@emotion/core";

type Props = {
  /** 무료 모드 활성화 여부 */
  isFree?: boolean;
}

interface State {
  /** 취소 확인 창 */
  modal: boolean;
  /** 클릭했을 때 바뀔 테마 (동작안함) */
  select: ThemeTypes;
}

/** 결제 예시 페이지입니다. */
export default class SamplePaymentPage extends React.Component<Props, State> {
  state: State = {
    modal: false,
    select: ThemeTypes.Grey
  };

  render() {
    const { modal: cancelModal, select: select } = this.state;
    const { isFree: isFree } = this.props;

    const title = "돌아가기";
    const description = "취소하시겠습니까?";
    const visible = true;
    const confirmText = "확인";
    const cancelText = "취소";
    const cancellable = true;

    return (
      <React.Fragment>
        {cancelModal && (
          <PolaPolarDialog
            title={title}
            description={description}
            visible={visible}
            confirmText={confirmText}
            cancelText={cancelText}
            cancellable={cancellable}
            onCancel={() => this.setState({ modal: false })}
            onConfirm={() => {
              action("이전 페이지로 이동").call(
                this.setState({ modal: false })
              );
            }}
          />
        )}
        {!isFree ? (
          <PolaPolarButtonGroup gap="7.65rem">
            <PolaPolarButton
              theme={select}
              onClick={() => {
                action("신용카드 선택").call(() => {
                  this.setState({ select: ThemeTypes.Selected });
                  this.render();
                });
              }}
              size={SizeTypes.Mininum}
            >
              체크/신용카드
            </PolaPolarButton>
            <PolaPolarButton
              theme={ThemeTypes.Grey}
              onClick={action("현금 선택")}
              size={SizeTypes.Mininum}
            >
              현금
            </PolaPolarButton>
            <PolaPolarButton
              theme={ThemeTypes.Grey}
              onClick={action("삼성페이 선택")}
              size={SizeTypes.Mininum}
            >
              SAMSUNG pay
            </PolaPolarButton>
          </PolaPolarButtonGroup>
        ) : (
          <PolaPolarButton
            theme={ThemeTypes.Selected}
            onClick={action("무료 선택")}
            size={SizeTypes.Mininum}
            width="100%"
          >
            무료
          </PolaPolarButton>
        )}
        <PolaPolarButtonGroup>
          <PolaPolarButton
            theme={ThemeTypes.Cancel}
            onClick={() => {
              this.setState({ modal: true });
            }}
          >
            취소
          </PolaPolarButton>
          <PolaPolarButton
            onClick={() => {
              action("결제 시도").call(() => {});
            }}
          >
            확인
          </PolaPolarButton>
        </PolaPolarButtonGroup>
      </React.Fragment>
    );
  }
}
