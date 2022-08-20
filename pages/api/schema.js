import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLSchema,
} from 'graphql';
import { resolve } from 'styled-jsx/css';

const clients = [
  {
    id: '2',
    firstName: 'Sweta',
    lastName: 'Kumar',
    email: 'navingenex@gmail.com',
  },
  {
    id: '1',
    firstName: 'Navin',
    lastName: 'Kumari',
    email: 'swetakumari2806@gmail.com',
  },
];

//client type

const ClientType = new GraphQLObjectType({
  name: 'ClientType',
  fields: () => ({
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    client: {
      type: ClientType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        const data = clients.find((client) => client.id === args.id);

        return data;
      },
    },
  }),
});

export default new GraphQLSchema({ query: RootQuery });
