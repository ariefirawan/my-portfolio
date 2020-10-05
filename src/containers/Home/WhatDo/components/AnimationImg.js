/** @jsx jsx */
import { jsx } from "theme-ui"
import { useRef, useEffect } from "react"
import lottie from "lottie-web"
import sampleCom from "../../../../json/lf30_editor_l9vp0D.json"

const AnimationImg = () => {
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: sampleCom,
    })
    return () => {}
  }, [])

  return (
    <div
      sx={{
        maxWidth: 400,
        mx: "auto",
        overflowX: "hidden",
        "@media screen and (min-width: 40em)": {
          mt: 0,
        },
      }}
      ref={container}
    ></div>
  )
}

export default AnimationImg
