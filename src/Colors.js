import React, { useRef, useEffect } from 'react'

const Colors = () => {
  const canvasRef = useRef(null)

  const range = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    )

  useEffect(() => {
    const RGBList = Array.from(range(0, 255, 8))
    // create a list contains discrete colors
    const colorsList = []
    RGBList.forEach(r => {
      RGBList.forEach(g => {
        RGBList.forEach(b => {
          colorsList.push({ r, g, b })
        })
      })
    })
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    let yVal = 0
    colorsList.forEach((color, index) => {
      let xVal = index % 256
      if (index % 256 === 255) {
        yVal++
      }
      context.fillStyle = `rgb(${color.r},${color.g},${color.b})`
      context.fillRect(xVal, yVal, 1, 1)
    })
  }, [])

  return <canvas ref={canvasRef} width='256px' height='128px' />
}

export default Colors
