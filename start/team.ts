import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
  Route.get('/', 'TeamsController.index');
}).prefix('team');
