import styled from "@emotion/styled"

export const Overlay = styled.div(
  {
    position: "fixed",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 24px",
  },
  ({ theme }) => {
    return {
      zIndex: theme.zIndex.overlay,
    }
  }
)

export const Modal = styled.div({}, ({ theme }) => ({
  width: "100%",
  borderRadius: "16px",
  maxWidth: theme.maxWidth.modal,
  backgroundColor: theme.colors.white,
  padding: "16px 20px 24px 20px",
}))
