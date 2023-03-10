import { test } from '@japa/runner';

test('Show all the posts ', async ({ client, route }) => {
  const response = await client.get(route('PostsController.index'));
  response.assertStatus(200);
  console.log(response);
});
