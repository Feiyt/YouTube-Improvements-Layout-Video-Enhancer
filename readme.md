# YouTube Improvements – Layout & Video Enhancer

[中文](readme_zh.md)

## Overview

A userscript for `youtube.com` that improves the video details layout, playback experience, and interface controls. The script is implemented with native JavaScript and does not depend on third-party JavaScript or CSS libraries.

Current version: `1.0.5`

Greasy Fork: [YouTube Improvements – Layout & Video Enhancer](https://greasyfork.org/scripts/595521-youtube-improvements-layout-video-enhancer)

## Original Project

This project is based on and maintained from the original project:

- Original authors: Thalrien.vx and CY Fung
- Original project page: [YouTube Improvements – Layout & Video Enhancer](https://greasyfork.org/en/scripts/560618-youtube-improvements-layout-video-enhancer)
- Original upstream source: [tabview-youtube/Tabview-Youtube](https://github.com/tabview-youtube/Tabview-Youtube)
- Original license: MIT

## Features

1. **Enhanced video details layout**: Improves the arrangement of video details, comments, and recommendations.
2. **Improved playback progress bar**: Provides a clearer and more visible playback progress display.
3. **Ad marking**: Marks advertising content on the page to help reduce accidental clicks.
4. **Playback speed control**: Adjusts video playback speed and preserves the selected speed when the player or video source is rebuilt or changed.
5. **Video screenshots**: Quickly captures and saves the current video frame.
6. **Dark/light theme toggle**: Switches the display theme through YouTube's native theme mechanism.
7. **Reliable initial info rendering**: Ensures video information is displayed when first opening a watch page.

## Keyboard Shortcuts

The following shortcuts toggle the corresponding settings and reload YouTube to apply the change:

| Feature | Shortcut |
| --- | --- |
| Video details layout optimization | `Ctrl + Alt + Shift + I` |
| Automatic mini player | `Ctrl + Alt + Shift + M` |
| Playback progress bar enhancement | `Ctrl + Alt + Shift + P` |
| Playback speed control | `Space + Left Click` |
| Page ad marking | `Ctrl + Alt + Shift + A` |

When playback speed control is enabled, hold `Space` and the left mouse button over the video to temporarily switch to `2x` playback speed. Release either one to restore the selected speed.

## Compatibility

The script matches:

`*://*.youtube.com/**`

A userscript manager such as Tampermonkey or Violentmonkey is required to install and run this script.

## License

This project continues to use the MIT License.

See the full text in [LICENSE](LICENSE).
