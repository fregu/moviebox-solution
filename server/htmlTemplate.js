import html from '../dist/template.html'

export default function htmlTemplate({
  reactDom = '<div />',
  reduxState,
  apolloState,
  helmetData,
  graphqlUrl
}) {
  const headString = `
    ${helmetData.title.toString()}
    ${helmetData.meta.toString()}
    ${helmetData.link.toString()}
    ${helmetData.style.toString()}
  `
  const stateScript = `
    <script>
      window.__REDUX_STATE__ = ${JSON.stringify(reduxState)}
      window.__APOLLO_STATE__ = ${JSON.stringify(apolloState)}
      window.graphqlUrl = '${graphqlUrl}'
    </script>
  `

  return html
    .replace(
      '<div id="root"></div>',
      `${helmetData.noscript.toString()}<div id="root">${reactDom}</div>${stateScript}`
    )
    .replace('</head>', `${headString}</head>`)
    .replace('<body', `<body ${helmetData.bodyAttributes.toString()}`)
    .replace('<html', `<html ${helmetData.htmlAttributes.toString()}`)
    .replace('</body>', `${helmetData.script.toString()}</body>`)
}
