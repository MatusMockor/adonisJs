import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('test', async () => {
    return { haha: 'test' }
  })
}).prefix('team')
