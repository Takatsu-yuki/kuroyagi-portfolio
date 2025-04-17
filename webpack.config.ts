import { makeConfig } from "./bundler/webpack/makeConfig";
import { join } from "path";
//
// 本ファイル内のパスの記述は原則マシン内の絶対パス基準で統一する
// そのため `process.cwd()` を最初に定義しておくと便利
const CWD = process.cwd();
const DIR_SRC = join(CWD, "src");
const DIR_PUBLIC = join(CWD, "public");
const DIR_ASSETS = join(DIR_PUBLIC, "assets");
//
export default makeConfig({
  output: DIR_PUBLIC,
  server: {
    root: DIR_PUBLIC,
    watch: `${DIR_SRC}/**/*.*`,
  },
  pug: {
    src: join(DIR_SRC, "pug"),
    dest: join(DIR_PUBLIC),
    data: [],
    files: {
      "index.html": "top.pug",
      "tcg/index.html": "work_tcg.pug",
      "cb/index.html": "work_cb.pug",
      "tcg/1/index.html": "tcg_1.pug",
      "tcg/2/index.html": "tcg_2.pug",
      "tcg/3/index.html": "tcg_3.pug",
      "tcg/4/index.html": "tcg_4.pug",
      "tcg/5/index.html": "tcg_5.pug",
      "tcg/6/index.html": "tcg_6.pug",
      "cb/1/index.html": "cb_1.pug",
      "cb/2/index.html": "cb_2.pug",
      "cb/3/index.html": "cb_3.pug",
      "cb/4/index.html": "cb_4.pug",
      "cb/5/index.html": "cb_5.pug",
      "cb/6/index.html": "cb_6.pug",
      "cb/7/index.html": "cb_7.pug",
      "cb/8/index.html": "cb_8.pug",
      "cb/9/index.html": "cb_9.pug",
      "cb/10/index.html": "cb_10.pug",
      "cb/11/index.html": "cb_11.pug",
      "cb/12/index.html": "cb_12.pug",
      "cb/13/index.html": "cb_13.pug",
      "cb/14/index.html": "cb_14.pug",
      "topics/1/index.html": "topics_1.pug",
      "topics/2/index.html": "topics_2.pug",
      "topics/3/index.html": "topics_3.pug",
      "topics/4/index.html": "topics_4.pug",
      "topics/5/index.html": "topics_5.pug",
    },
  },
  sass: {
    src: join(DIR_SRC, "sass"),
    dest: join(DIR_ASSETS, "css"),
    files: {
      "main.css": "main.scss",
      "top.css": "top.scss",
      "work_tcg.css": "work_tcg.scss",
      "work_cb.css": "work_cb.scss",
      "detail_tcg.css": "detail_tcg.scss",
      "detail_cb.css": "detail_cb.scss",
      "topics_bace.css": "topics_bace.scss",
    },
  },
  // ts: {
  //   src: join(DIR_SRC, "ts"),
  //   dest: join(DIR_ASSETS, "js"),
  //   files: {
  //     "main.js": "main.ts",
  //   },
  // },
  copy: [
    {
      from: join(DIR_SRC, "assets/libs"),
      to: join(DIR_ASSETS, "libs"),
    },
    {
      from: join(DIR_SRC, "assets/img"),
      to: join(DIR_ASSETS, "images"),
    },
    {
      from: join(DIR_SRC, "assets/js"),
      to: join(DIR_ASSETS, "js"),
    },
  ],
});
