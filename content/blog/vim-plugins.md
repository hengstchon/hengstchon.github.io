---
title: Vim Plugins
date: 2019-07-06
---

# Vim Plugins

## 插件安装

插件安装方法，用 `VimPlug`，以 `mhinz/vim-startify` 为例。

添加至 `.vimrc`：

```shell
plug 'mhinz/vim-startify'
```

然后执行：

```Shell
:so %
:PlugInstall
```

`so` 是 `source` 简写，`%` 表示当前文件。

### mhinz/vim-startify

[GitHub repo](https://github.com/mhinz/vim-startify)

在 Vim 或打开界面显示最近使用的文件，无需设置，开箱即用。

### skielbasa/vim-material-monokai

[GitHub repo](https://github.com/skielbasa/vim-material-monokai)

之前一直在用的主题，综合了 monokai 和 material 的特点，色彩鲜艳，对比度高，安装完成后，添加代码开启主题。

```shell
set background=dark
set termguicolors
colorscheme material-monokai
```

### lifepillar/vim-solarized8

[GitHub repo](https://github.com/lifepillar/vim-solarized8)

现在在用的主题，更沉稳护眼。

### itchyny/lightline.vim

[GitHub repo](https://github.com/itchyny/lightline.vim)

状态栏插件，简洁美观。配合`solarized8` 主题使用时可调整相应配色：

```shell
let g:lightline = {'colorscheme': 'solarized'}
```

### scrooloose/nerdtree

[GitHub repo](https://github.com/scrooloose/nerdtree)

系统文件浏览插件，更改开关快捷键为`<C-n>`：

```shell
noremap <C-n> :NERDTreeToggle<CR>
```

快捷键：

|              | File node mappings  |
| ------------ | ------------------- |
| `o` / `<CR>` | open in prev window |
| `go`         | preview             |
| `i`          | open split          |
| `s`          | open vsplit         |

|              | Directory node mappings                           |
| ------------ | ------------------------------------------------- |
| `o` / `<CR>` | open & close node                                 |
| `x`          | close parent of node                              |
| `X`          | close all child nodes of current node recursively |

|              | Bookmark table mappings         |
| ------------ | ------------------------------- |
| `o` / `<CR>` | open bookmark                   |
| `go`         | preview file / find dir in tree |
| `D`          | delete bookmark                 |

|         | Tree navigation mappings |
| ------- | ------------------------ |
| `P`     | go to root               |
| `p`     | go to parent             |
| `<C-j>` | go to next sibling       |
| `<C-k>` | go to prev sibling       |

|      | Filesystem mappings                  |
| ---- | ------------------------------------ |
| `C`  | change tree root to the selected dir |
| `u`  | move tree root up a dir              |
| `r`  | refresh cursor dir                   |
| `R`  | refresh current root                 |
| `cd` | change the CWD to the selected dir   |

|     | Tree filtering mappings |
| --- | ----------------------- |
| `I` | hidden files            |
| `B` | bookmarks               |

### Yggdroot/LeaderF

[GitHub repo](https://github.com/Yggdroot/LeaderF)

文件搜索插件：The plugin is mainly used for locating files, buffers, mrus, ctags, gtags, etc in large project.

`.vimrc` 中添加：

```shell
let g:Lf_ShortcutB = '<leader><leader>b'
let g:Lf_DefaultMode = 'NameOnly'
```

Default launch LeaderF: `<Leader>f`.

Once LeaderF is launched:

| Command          | Description                                                    |
| ---------------- | -------------------------------------------------------------- |
| `<C-r>`          | switch between fuzzy search mode and regex mode                |
| `<C-f>`          | switch between full path search mode and name only search mode |
| `<C-j>`          | move the cursor downward                                       |
| `<C-k>`          | move the cursor upward                                         |
| `<Up>`/`<Down>`  | recall last/next history                                       |
| `<C-x>`          | open in horizontal split                                       |
| `<C-]>`          | open in vertical split                                         |
| `<C-s>`          | select multiple files                                          |
| `<!-- <C-l> -->` | clear all selections                                           |

### mattn/emmet-vim

[GitHub repo](https://github.com/mattn/emmet-vim)

Settings in `.vimrc`:

```shell
let g:user_emmet_leader_key = ';'
let g:user_emmet_settings = {
\    'javascript': {
\        'extends': 'html',
\        'empty_element_suffix': ' />',
\        'snippets': {
\            're': "import React from \"react\"",
\            'f1' : "(|) => {\n\t|\n}",
\            'f2' : "(|) => (\n\t|\n)",
\        }
\    },
\}
```

Now, the leader key is `,`.

| Command      | Description                              |
| ------------ | ---------------------------------------- |
| `;,`         | expand an abbreviation                   |
| `;d`         | select in tag(include tag)               |
| `vit`        | select in tag(exclude tag)               |
| `;n`         | go to the next edit point                |
| `;N`         | go to the previous edit point            |
| `;i`         | update an `<img>`'s size(only local img) |
| `;m`         | merge lines                              |
| `;k`         | remove a tag                             |
| `;j`         | split/join tag                           |
| `;a`         | make an anchor from a url                |
| `lorem;;`    | lorem ipsum(a paragraph)                 |
| `lorem{n};;` | {n} words                                |

Attribute operators:

| Operator | Attribute                   |
| -------- | --------------------------- |
| `.`      | class                       |
| `#`      | id                          |
| `[]`     | custom attributes           |
| `@`      | number origin and direction |

Offitial tutorial:

```shell
mvim ~/.vim/plugged/emmet-vim/TUTORIAL.mkd
```

### scrooloose/nerdcommenter

[GitHub repo](https://github.com/scrooloose/nerdcommenter)

Setting in `.vimrc`:

```shell
let g:NERDSpaceDelims = 1
```

| Command                   | Description                     |
| ------------------------- | ------------------------------- |
| `[count]<leader>cc`       | comment                         |
| `[count]<leader>cu`       | uncomment                       |
| `[count]<leader>c<space>` | toggle the comment state        |
| `[count]<leader>cy`       | comment, but yank line(s) first |

### tpope/vim-surround

[GitHub repo](https://github.com/tpope/vim-surround)

Surround.vim is all about "surroundings": parentheses, brackets, quotes, XML tags, and more. The plugin provides mappings to easily delete, change and add such surroundings in pairs.

Command structure:

```shell
<command><surround object>[count]<surround target>[replacement]
```

| Command         | Description                                  |
| --------------- | -------------------------------------------- |
| command         | y, d, c, v                                   |
| surround object | s, S                                         |
| surround target | (, )/b, [, ], {, }/b, <, >, ", ', t, w, s, p |

`([{` with extra space.

Tutorial with more detail: [Vim surround plugin tutorial](http://www.futurile.net/2016/03/19/vim-surround-plugin-tutorial/)

### jiangmiao/auto-pairs

[GitHub repo](https://github.com/jiangmiao/auto-pairs)

`<C-v>(`: insert paren "(" without trigger the plugin.

### luochen1990/rainbow

[GitHub repo](https://github.com/luochen1990/rainbow)

Setting in `.vimrc`:

```shell
let g:rainbow_active = 1
```

### bounceme/poppy.vim

[GitHub repo](https://github.com/bounceme/poppy.vim)

括号高亮插件，因为 vim-javascript 与 rainbow 在js文件中冲突，导致rainbow在js的函数中失效，可以用这个插件来稍微弥补一下。

Setting in `.vimrc`:

```shell
au! cursormoved *.js call PoppyInit()
```

### iamcco/markdown-preview.nvim

[GitHub repo](https://github.com/iamcco/markdown-preview.nvim)

Setting in `.vimrc`:

```shell
nmap <C-p> <Plug>MarkdownPreview
```

### easymotion/vim-easymotion

[GitHub repo](https://github.com/easymotion/vim-easymotion)

Settings in `.vimrc`:

```shell
map <Leader> <Plug>(easymotion-prefix)
map <Leader>h <Plug>(easymotion-linebackward)
map <Leader>l <Plug>(easymotion-lineforward)
```

### ntpeters/vim-better-whitespace

[GitHub repo](https://github.com/ntpeters/vim-better-whitespace)

Setting:

```shell
let g:strip_whitespace_on_save=1
```

### prettier/vim-prettier

[GitHub repo](https://github.com/prettier/vim-prettier)

Settings:

```shell
let g:prettier#quickfix_enabled = 0
let g:prettier#config#bracket_spacing = 'true'
```

### pangloss/vim-javascript

[GitHub repo](https://github.com/pangloss/vim-javascript)

### maxmellon/vim-jsx-pretty

[GitHub repo](https://github.com/maxmellon/vim-jsx-pretty)
