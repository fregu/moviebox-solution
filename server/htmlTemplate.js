export default function htmlTemplate({
  reactDom = '<div />',
  reduxState,
  apolloState,
  helmetData,
  graphqlUrl
}) {
  const stateScript = `
    <script>
      window.__REDUX_STATE__ = ${JSON.stringify(reduxState)}
      window.__APOLLO_STATE__ = ${JSON.stringify(apolloState)}
      window.graphqlUrl = '${graphqlUrl}'
    </script>
  `
  return `
    <!DOCTYPE html>
    <html ${helmetData.htmlAttributes.toString()}>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/assets/style.css" />
        ${helmetData.title.toString()}
        ${helmetData.meta.toString()}
        ${helmetData.link.toString()}
        ${helmetData.style.toString()}
    </head>

    <body  class="theme-black" ${helmetData.bodyAttributes.toString()}>
      ${helmetData.noscript.toString()}
        <div id="root">${reactDom}</div>

        ${helmetData.script.toString()}
        ${stateScript /* must be inserted before main.js */}
        <script src="/assets/main.js"></script>
    </body>
    </html>
  `
}
