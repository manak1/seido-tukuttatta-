import React from "react"
import { Hearts } from "react-loader-spinner"

type LoadingContentProps = {
  isLoading: boolean
}

const LoadingContent: React.FC<LoadingContentProps> = (props) => {
  const { isLoading, children } = props
  return (
    <>
      {!isLoading && children}
      {isLoading && (
        <Hearts
          wrapperStyle={{ justifyContent: "center" }}
          width={60}
          height={60}
          color="#7856FF"
        />
      )}
    </>
  )
}

export default LoadingContent
