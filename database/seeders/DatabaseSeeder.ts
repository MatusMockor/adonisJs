import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { TeamFactory } from '../factories/TeamFactory';

export default class extends BaseSeeder {
  public async run() {
    await TeamFactory.create();
  }
}
