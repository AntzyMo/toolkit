const waterMarkStyle = (url: string) => {
  const common =
    'display: inline-block;overflow: hidden;position: absolute;left: 0;top: 0;width: 100%;height: 100%;pointer-events: none;'
  const bg = `background:url(${url}) repeat`
  return common + bg
}

class WaterMark {
  #flag = 0
  el: HTMLElement
  text: string
  fontSize: number | string
  url: string
  constructor({ el = document.body, text = '', fontSize }) {
    this.el = el
    this.text = text
    this.fontSize = fontSize
    this.url = this.createWaterMarkCanvas()
  }

  createWaterMarkCanvas() {
    const canvasEl = document.createElement('canvas')
    // 设置生成单个水印画布的大小
    canvasEl.width = 200
    canvasEl.height = 200

    const ctx = canvasEl.getContext('2d')!
    ctx.rotate((-15 * Math.PI) / 180) // 旋转角度
    ctx.font = `${this.fontSize}px normal`
    ctx.fillStyle = 'red'

    // 文字显示的坐标
    ctx.fillText(this.text, canvasEl.width / 100, canvasEl.height / 2)
    return canvasEl.toDataURL('image/png')
  }

  render() {
    const waterMark = document.createElement('div')
    const parentEl = this.el.parentNode || this.el
    waterMark.setAttribute('style', waterMarkStyle(this.url))
    // @ts-expect-error
    parentEl.setAttribute('style', 'position:relative')
    if (!this.#flag) parentEl.appendChild(waterMark)
    this.#flag++
  }
}

export default WaterMark
