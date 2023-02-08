import team from 'App/Models/Team';
import Factory from '@ioc:Adonis/Lucid/Factory';

export const TeamFactory = Factory.define(team, ({ faker }) => {
  return {
    name: faker.internet.userName(),
    slug: faker.helpers.slugify(faker.internet.userName().toLowerCase()),
    body: faker.lorem.lines(5),
  };
}).build();
