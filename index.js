const fs = require('fs')
const {createFFmpeg, fetchFile} = require('@ffmpeg/ffmpeg')

const ffmpeg = createFFmpeg({log: true})

;(async () => {
  await ffmpeg.load()
  ffmpeg.FS('writeFile', 'test.avi', await fetchFile('./test.avi'))
  await ffmpeg.run('-i', 'test.avi', 'test.mp4')
  await fs.promises.writeFile('./test.mp4', ffmpeg.FS('readFile', 'test.mp4'))
  process.exit(0)
})()
