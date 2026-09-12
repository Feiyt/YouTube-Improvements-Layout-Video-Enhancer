# YouTube Improvements – Layout & Video Enhancer

[中文](readme_zh.md)

## Overview

A userscript for `youtube.com` that improves the video details layout, playback experience, and interface controls. The script is implemented with native JavaScript and does not depend on third-party JavaScript or CSS libraries.

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

## Updates In This Version

- Removed the video-download promotion entry, referral-link marker, third-party download redirect, and related setting text.
- Removed unused download permissions, tab-opening permissions, and download icon generation code.
- Fixed an issue where the selected playback speed lasted for only about one second before returning to the original speed. The setting now remains applied after the video element is rebuilt or the video source changes.

## Compatibility

The script matches:

`*://*.youtube.com/**`

A userscript manager such as Tampermonkey or Violentmonkey is required to install and run this script.

## License

This project continues to use the MIT License.

See the full text in [LICENSE](LICENSE).
