# Windows 开发踩坑记：SettingsNav 的开发历程

## 起源

每次调整 Windows 设置都要在层层菜单中翻找，浪费时间。如果能像 macOS 的 Spotlight 一样，搜索即达该多好。

## Windows 设置 URI 方案

Windows 10/11 提供了 `ms-settings:` URI 协议，可以直接打开指定设置页面。

### 发现的问题
不同版本的 Windows 支持的 URI 不同：
- `ms-settings:display` — 通用
- `ms-settings:taskbar` — Win11 新增
- `ms-settings:storage-sense` — 版本差异

解决方案：维护兼容性映射表，在运行时检测系统版本动态适配。

## 搜索实现

### 模糊搜索
使用拼音匹配 + 关键词联想，即使输入不完整也能找到目标。

### 性能优化
本地索引缓存，毫秒级响应。

## 托盘开发

Windows 系统托盘开发需要注意：
1. 图标资源要适配高 DPI
2. 右键菜单要处理多显示器场景
3. 退出时需要清理托盘图标残留

## 国际化

中英文双语支持的实现：
- 外部化字符串资源
- 自动检测系统语言
- 支持运行时切换
