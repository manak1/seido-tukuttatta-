import styled from "@emotion/styled"

export const Image = styled.img({
  width: "100%",
})

export const Form = styled.form({
  marginTop: "24px",
  "> * + *": {
    marginTop: "16px",
  },
})
