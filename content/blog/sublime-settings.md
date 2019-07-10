---
title: Sublime 设置
date: 2019-07-01
---

注册码：
```
----- BEGIN LICENSE -----
sgbteam
Single User License
EA7E-1153259
8891CBB9 F1513E4F 1A3405C1 A865D53F
115F202E 7B91AB2D 0D2A40ED 352B269B
76E84F0B CD69BFC7 59F2DFEF E267328F
215652A3 E88F9D8F 4C38E3BA 5B2DAAE4
969624E7 DC9CD4D5 717FB40C 1B9738CF
20B3C4F1 E917B5B3 87C38D9C ACCE7DD8
5F7EF854 86B9743C FADC04AA FB0DA5C0
F913BE58 42FEA319 F954EFDD AE881E0B
------ END LICENSE ------
```

## Settings

```json
{
  "color_scheme": "Packages/Color Scheme - Default/Mariana.sublime-color-scheme",
  "font_face": "Source Code Pro",
  "font_size": 14,
  "ignored_packages": ["Vintage"],
  "tab_size": 4,
  "theme": "Adaptive.sublime-theme",
  "translate_tabs_to_spaces": true,
  "update_check": false,
  "word_wrap": true
}
```

## 插件

- Emmet
- JsPrettier
- A File Icon
- AdvancedNewFile
- MarkdownPreview

## Emmet 设置

装好 Sublime 的 Emmet 插件后，在 js 文件中默认的触发键是 `ctrl+e`，但是在 MacOS 中，该键默认动作为跳至行末，所以有了这个需求，把 Emmet 的触发键改为 `ctrl+i`。

在用户的 `Key Bindings` 设置中，添加如下代码：

```json
[
  {
    "keys": ["ctrl+i"],
    "args": {
      "action": "expand_abbreviation"
    },
    "command": "run_emmet_action"
  }
]
```

在 Emmet 的 `Settings` 设置中，添加如下代码：

```json
{
  "disabled_keymap_actions": "expand_abbreviation"
}
```

