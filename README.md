# @ffmpeg/ffmpeg triggers --requires to get run again

Reproduction steps:

First, clone this repo locally and install deps with `npm install`.

Then run:

```
node --require ./required.js --experimental-wasm-threads .
```

Below is the output. Notice that we get the log from `required.js` the first
time as expected, but then we get it several other times while ffmpeg is
running. This is a problem.

```
**************************************************************************



THIS WAS REQUIRED!!!



**************************************************************************
[info] use ffmpeg.wasm v0.10.1
[info] load ffmpeg-core
[info] loading ffmpeg-core
[info] fetch ffmpeg.wasm-core script from @ffmpeg/core
[info] ffmpeg-core loaded
[info] run FS.writeFile test.avi <92440 bytes binary file>
[info] run ffmpeg command: -i test.avi test.mp4
**************************************************************************



THIS WAS REQUIRED!!!



**************************************************************************
[fferr] ffmpeg version v0.9.0-2-gb11e5c1495 Copyright (c) 2000-2020 the FFmpeg developers
[fferr]   built with emcc (Emscripten gcc/clang-like replacement) 2.0.8 (d059fd603d0b45b584f634dc2365bc9e9a6ec1dd)
[fferr]   configuration: --target-os=none --arch=x86_32 --enable-cross-compile --disable-x86asm --disable-inline-asm --disable-stripping --disable-programs --disable-doc --disable-debug --disable-runtime-cpudetect --disable-autodetect --extra-cflags='-s USE_PTHREADS=1 -I/src/build/include -O3 --closure 1' --extra-cxxflags='-s USE_PTHREADS=1 -I/src/build/include -O3 --closure 1' --extra-ldflags='-s USE_PTHREADS=1 -I/src/build/include -O3 --closure 1 -L/src/build/lib' --pkg-config-flags=--static --nm=llvm-nm --ar=emar --ranlib=emranlib --cc=emcc --cxx=em++ --objcc=emcc --dep-cc=emcc --enable-gpl --enable-nonfree --enable-zlib --enable-libx264 --enable-libx265 --enable-libvpx --enable-libwavpack --enable-libmp3lame --enable-libfdk-aac --enable-libtheora --enable-libvorbis --enable-libfreetype --enable-libopus --enable-libwebp --enable-libass --enable-libfribidi
[fferr]   libavutil      56. 51.100 / 56. 51.100
[fferr]   libavcodec     58. 91.100 / 58. 91.100
[fferr]   libavformat    58. 45.100 / 58. 45.100
[fferr]   libavdevice    58. 10.100 / 58. 10.100
[fferr]   libavfilter     7. 85.100 /  7. 85.100
[fferr]   libswscale      5.  7.100 /  5.  7.100
[fferr]   libswresample   3.  7.100 /  3.  7.100
[fferr]   libpostproc    55.  7.100 / 55.  7.100
[fferr] Input #0, avi, from 'test.avi':
[fferr]   Metadata:
[fferr]     encoder         : Lavf58.45.100
[fferr]   Duration: 00:00:01.00, start: 0.000000, bitrate: 739 kb/s
[fferr]     Stream #0:0: Video: indeo4 (IV41 / 0x31345649), yuv410p, 256x240, 707 kb/s, 35 fps, 35 tbr, 35 tbn, 35 tbc
[fferr] Stream mapping:
[fferr]   Stream #0:0 -> #0:0 (indeo4 (native) -> h264 (libx264))
[fferr] [libx264 @ 0x1a6bcc0] using cpu capabilities: none!
[fferr] [libx264 @ 0x1a6bcc0] profile High, level 1.3, 4:2:0, 8-bit
[fferr] [libx264 @ 0x1a6bcc0] 264 - core 160 - H.264/MPEG-4 AVC codec - Copyleft 2003-2020 - http://www.videolan.org/x264.html - options: cabac=1 ref=3 deblock=1:0:0 analyse=0x3:0x113 me=hex subme=7 psy=1 psy_rd=1.00:0.00 mixed_ref=1 me_range=16 chroma_me=1 trellis=1 8x8dct=1 cqm=0 deadzone=21,11 fast_pskip=1 chroma_qp_offset=-2 threads=6 lookahead_threads=1 sliced_threads=0 nr=0 decimate=1 interlaced=0 bluray_compat=0 constrained_intra=0 bframes=3 b_pyramid=2 b_adapt=1 b_bias=0 direct=1 weightb=1 open_gop=0 weightp=2 keyint=250 keyint_min=25 scenecut=40 intra_refresh=0 rc_lookahead=40 rc=crf mbtree=1 crf=23.0 qcomp=0.60 qpmin=0 qpmax=69 qpstep=4 ip_ratio=1.40 aq=1:1.00
[fferr] Output #0, mp4, to 'test.mp4':
[fferr]   Metadata:
[fferr]     encoder         : Lavf58.45.100
[fferr]     Stream #0:0: Video: h264 (libx264) (avc1 / 0x31637661), yuv420p, 256x240, q=-1--1, 35 fps, 17920 tbn, 35 tbc
[fferr]     Metadata:
[fferr]       encoder         : Lavc58.91.100 libx264
[fferr]     Side data:
[fferr]       cpb: bitrate max/min/avg: 0/0/0 buffer size: 0 vbv_delay: N/A
**************************************************************************



**************************************************************************



**************************************************************************



**************************************************************************



**************************************************************************



THIS WAS REQUIRED!!!



**************************************************************************
**************************************************************************



**************************************************************************



THIS WAS REQUIRED!!!



**************************************************************************
THIS WAS REQUIRED!!!



**************************************************************************
THIS WAS REQUIRED!!!



**************************************************************************
THIS WAS REQUIRED!!!



**************************************************************************
THIS WAS REQUIRED!!!



**************************************************************************
THIS WAS REQUIRED!!!



**************************************************************************
[fferr] frame=   35 fps=0.0 q=-1.0 Lsize=      37kB time=00:00:00.91 bitrate= 335.7kbits/s speed= 2.1x
[fferr] video:36kB audio:0kB subtitle:0kB other streams:0kB global headers:0kB muxing overhead: 3.345004%
[fferr] [libx264 @ 0x1a6bcc0] frame I:1     Avg QP:23.21  size:  1433
[fferr] [libx264 @ 0x1a6bcc0] frame P:11    Avg QP:24.26  size:  1517
[fferr] [libx264 @ 0x1a6bcc0] frame B:23    Avg QP:26.38  size:   797
[fferr] [libx264 @ 0x1a6bcc0] consecutive B-frames:  8.6% 11.4%  0.0% 80.0%
[fferr] [libx264 @ 0x1a6bcc0] mb I  I16..4: 14.6% 85.4%  0.0%
[fferr] [libx264 @ 0x1a6bcc0] mb P  I16..4:  5.7% 55.2%  2.0%  P16..4:  8.4%  4.1%  2.2%  0.0%  0.0%    skip:22.5%
[fferr] [libx264 @ 0x1a6bcc0] mb B  I16..4:  1.9% 15.9%  1.0%  B16..8: 18.9%  6.7%  1.7%  direct: 2.7%  skip:51.2%  L0:49.7% L1:41.1% BI: 9.2%
[fferr] [libx264 @ 0x1a6bcc0] 8x8 transform intra:86.6% inter:76.6%
[fferr] [libx264 @ 0x1a6bcc0] coded y,uvDC,uvAC intra: 69.5% 0.0% 0.0% inter: 11.9% 0.0% 0.0%
[fferr] [libx264 @ 0x1a6bcc0] i16 v,h,dc,p: 26% 44% 27%  3%
[fferr] [libx264 @ 0x1a6bcc0] i8 v,h,dc,ddl,ddr,vr,hd,vl,hu: 15% 27% 51%  2%  1%  1%  1%  1%  3%
[fferr] [libx264 @ 0x1a6bcc0] i4 v,h,dc,ddl,ddr,vr,hd,vl,hu: 23% 18% 20%  6%  6%  7%  5%  8%  6%
[fferr] [libx264 @ 0x1a6bcc0] i8c dc,h,v,p: 100%  0%  0%  0%
[fferr] [libx264 @ 0x1a6bcc0] Weighted P-Frames: Y:0.0% UV:0.0%
[fferr] [libx264 @ 0x1a6bcc0] ref P L0: 55.4% 10.6% 20.9% 13.0%
[fferr] [libx264 @ 0x1a6bcc0] ref B L0: 78.5% 16.6%  5.0%
[fferr] [libx264 @ 0x1a6bcc0] ref B L1: 90.8%  9.2%
[fferr] [libx264 @ 0x1a6bcc0] kb/s:291.64
[ffout] FFMPEG_END
[info] run FS.readFile test.mp4
```
