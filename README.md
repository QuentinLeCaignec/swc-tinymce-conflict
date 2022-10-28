Reproduction of conflict between SWC Minifier and TinyMCE v6 in self-host install. When run, the webpack config uses
copy-webpack-plugin to copy tinyMCE's files into /public/

This installation method is taken from
this [blog](https://iiiyu.com/2022/08/28/self-hosted-tinymce-6-x-in-nextjs-12-x-javascript-version/) for nextJS 12 and
TinyMCE 6.

## How to run

`npm run develop` then open browser, open and close the "View" menu in the menubar, everything works normally.

To reproduce the bug :

`npm run build` then `npm run start` then open the browser, open and close the "View" menu in the menubar.

Error appears in the console "e is not defined" from `theme.min.js`.

If you edit the `next.config.js` to set `swcMinify: false` then `build` and `start`, everything works normally.
