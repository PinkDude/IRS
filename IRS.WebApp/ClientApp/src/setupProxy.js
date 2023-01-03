const { createProxyMiddleware } = require('http-proxy-middleware')
const { env } = require('process')

const target = env.ASPNETCORE_HTTPS_PORT
  ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}`
  : env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:35023'

const context = [
  '/weatherforecast',
  '/_configuration',
  '/.well-known',
  '/Identity',
  '/connect',
  '/ApplyDatabaseMigrations',
  '/_framework',
  '/AdminTexts',
  '/api'
]

module.exports = function (app) {
  const appProxy = createProxyMiddleware(context, {
    target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    }
  })

  app.use(appProxy)
}