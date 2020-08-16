import { gql } from '@apollo/client';

export const typeDefs = gql`
    extend type Query {
        isLoggedIn: Boolean!
        use: User!
    }
`;

// type ResolverFn = (parent: unknown, args: unknown, { cache }: { cache: ApolloCache<unknown> }) => unknown;

// interface ResolverMap {
//     [field: string]: ResolverFn;
// }

// interface AppResolvers extends Resolvers {
//     // We will update this with our app's resolvers later
// }

// export const resolvers: AppResolvers = {};
