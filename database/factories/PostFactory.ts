import Post from 'App/Models/Post';
import Factory from '@ioc:Adonis/Lucid/Factory';

export default Factory.define(Post, ({ faker }) => {
  return {
    title: faker.lorem.words(3),
    body: faker.lorem.paragraph(5),
    slug: faker.lorem.slug(3),
    excerpt: faker.lorem.paragraph(1),
  };
}).build();
