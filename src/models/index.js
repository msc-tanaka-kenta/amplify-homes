// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Pos, Home } = initSchema(schema);

export {
  Pos,
  Home
};