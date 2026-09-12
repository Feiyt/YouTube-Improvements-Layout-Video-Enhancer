# YouTube 改进 – 布局与视频增强

[English](readme.md)

## 项目简介

这是一个仅适用于 `youtube.com` 的用户脚本，用于优化视频详情页布局、视频播放体验和界面操作。脚本使用原生 JavaScript 实现，不依赖第三方 JavaScript 或 CSS 库。

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

## 本次更新

- 删除视频下载推广入口、推荐链接标记、第三方下载跳转及相关设置文案。
- 删除未使用的下载权限、标签页跳转权限和下载图标生成代码。
- 修复播放速度只能保持约一秒后恢复为原速度的问题，使速度设置在视频元素重建、视频源切换后仍能保持。

## 使用范围

脚本匹配地址：`*://*.youtube.com/**`

安装并运行此用户脚本需要 Tampermonkey、Violentmonkey 等用户脚本管理器。

## 许可证

本项目沿用 MIT 开源许可证。

完整协议内容请参阅 [LICENSE](LICENSE)。