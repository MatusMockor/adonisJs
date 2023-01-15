import Route from '@ioc:Adonis/Core/Route'

Route.get('/test', async () => {
  return {
    test: 'hahah',
  }
})
