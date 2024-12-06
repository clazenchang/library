# library-system


## 簡介

頁面: [前往連結](https://clazenchang.github.io/library/#/)

專案定位為圖書館的圖書顯示頁，有以下功能:

- 使⽤ Bootstrap 進⾏ RWD 設計
- 每本書各⾃有單⾴顯⽰
- 可依書籍作者篩選
- 可依書籍語⾔篩選
- 可以按出版年排序(升冪、降冪)
- 能夠依使⽤者選擇作者順序顯⽰
- 可以讓使⽤者在以上 3 種排序模式任意切換
- 串接 API
- ⾄少 10 本書
- 當 URL 無效，要有 404 not found page

<br/>

<img src="screenShot.png" style="width:50%">    <br/>
- 左側可以依作者和語言勾選過濾
- 右上角的紅色按鈕選擇排序方式


## 技術內容
- Vue
- router
- Single Page Application (SPA)
- vite
- JavaScript
- Integrate with an API
- Bootstrap CSS
- RWD
- gh-pages (for deploy)

<br/>


## 安裝與啟動

### Clone

```sh
git clone git@github.com:clazenchang/library.git
```

### Project Setup

```sh
cd library
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).


### Compile and Minify for Production

```sh
npm run build
```

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).