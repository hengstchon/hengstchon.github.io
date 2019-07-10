---
title: Vim tricks
date: 2019-07-01
---

## Basic usage

- Forward word movement: `w`, `W`, `e`, `E`.

- Backward word movement: `b`, `B`, `ge`, `gE`.

- "To the Character" movement: `f`, `F`, `t`, `T`, `,`, `;`.

- Paging: `CTRL-f`, `CTRL-b`, `CTRL-u`, `CTRL-d`.

- Top and Bottom of the buffer: `gg`, `G`.

- Easy regex searching: `*`, `#`.

- Manual regular expression searching: `/`, `?`.

- Jumping to Matching Braces: `%`.

- Visual Mode: `v`, `V`, `CTRL-v`, `gv`.

- Navigate in help: `CTRL-]`, `CTRL-T`.

- Increment or Decrement number: `CTRL-A`, `CTRL-X`.

## Vim's Operator Commands

- `c`: Change

- `d`: Delete

- `y`: Yank into register

- `g~`: Swap case

- `gu`: Make lowercase

- `gU`: Make uppercase

- `>`: Shift right

- `<`: Shift left

- `=`: Autoindent

- `!`: Filter {motion} lines through an external program

## Buffers

- `:ls`: list buffers

- `<space>x`: go to next buffer (`:bn`)

- `<space>z`: go to previous buffer (`:bf`)

- `:b {num}`: go to {num} buffer

- `:b {bufname}`: go to a match buffer, if more than one, use TAB to choose

- `:bd N1 N2 N3` or `:N,M bd`: delete buffer.

## Other Tricks

- `:%s/pattern//gn`: count number of matches of a pattern

- `:%s/{old}/{new}/g`: search and replace

- `gd`: jump to definition, `gb` jump back

- `*`: show the same word under cursor

- `CTRL-G`: show where you are in the file
