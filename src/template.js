const START = `
  <!DOCTYPE html>
  <html lang="ru">
    <head>
      <meta charset="utf-8">
      <meta name="application-name" content="polymorphic_app_with_custom_redux">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="description" content="">
      <title>Polymorphic app with custom redux</title>
    </head>
    <body>
      <div id="root">
`.trim();

const ROOT_CLOSE = '</div>';

const END = `
      <script src="/main.js"></script>
    </body>
  </html>
`.trim();

module.exports = {
  END,
  ROOT_CLOSE,
  START,
};
