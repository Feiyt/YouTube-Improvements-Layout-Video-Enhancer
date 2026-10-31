# YouTube 改进 – 布局与视频增强

[English](readme.md)

## 项目简介

这是一个仅适用于 `youtube.com` 的用户脚本，用于优化视频详情页布局、视频播放体验和界面操作。脚本使用原生 JavaScript 实现，不依赖第三方 JavaScript 或 CSS 库。

当前版本：`1.0.5`

Greasy Fork：[YouTube 改进 – 布局与视频增强](https://greasyfork.org/scripts/595521-youtube-improvements-layout-video-enhancer)

## 原项目信息

本项目基于原项目进行二次整理和维护：

- 原作者：Thalrien.vx、CY Fung
- 原项目页面：[YouTube Improvements – Layout & Video Enhancer](https://greasyfork.org/en/scripts/560618-youtube-improvements-layout-video-enhancer)
- 原项目基础来源：[tabview-youtube/Tabview-Youtube](https://github.com/tabview-youtube/Tabview-Youtube)
- 原项目许可证：MIT

## 功能说明

1. **增强视频详情页布局**：优化视频详情、评论和推荐内容的排列方式。
2. **改进视频播放进度条**：提供更醒目的播放进度显示效果。
3. **广告标记**：对页面中的广告内容进行标记，减少误触。
4. **播放速度控制**：支持调整视频播放速度，并在播放器重建或视频源切换后保持设置。
5. **视频截图**：快速截取当前视频画面并保存。
6. **深色/浅色主题切换**：使用 YouTube 的主题机制切换显示主题。
7. **可靠的首次资讯渲染**：确保首次打开视频页面时视频介绍资讯能够正常显示。

## 快捷键

以下快捷键可切换对应功能，切换后会刷新 YouTube 以应用设置：

| 功能 | 快捷键 |
| --- | --- |
| 视频详情页界面优化 | `Ctrl + Alt + Shift + I` |
| 自动迷你播放器 | `Ctrl + Alt + Shift + M` |
| 视频播放进度条美化 | `Ctrl + Alt + Shift + P` |
| 视频播放速度控制 | `空格 + 鼠标左键` |
| 页面广告标记 | `Ctrl + Alt + Shift + A` |

开启视频播放速度控制后，在视频区域按住 `空格` 和鼠标左键，视频会临时切换为 `2x` 播放速度。松开任意一个按键即可恢复已选择的播放速度。

## 使用范围

脚本匹配地址：`*://*.youtube.com/**`

安装并运行此用户脚本需要 Tampermonkey、Violentmonkey 等用户脚本管理器。

## 许可证

本项目沿用 MIT 开源许可证。

完整协议内容请参阅 [LICENSE](LICENSE)。