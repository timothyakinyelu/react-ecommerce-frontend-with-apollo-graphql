/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { gql, ApolloCache, Resolvers } from '@apollo/client';
import { GET_TOASTS } from './query/toast';

export const typeDefs = gql`
    extend type Query {
        isLoggedIn: Boolean!
        use: User!
        toasts: Toasts!
    }

    extend type Mutation {
        addOrRemoveToast(toast: Toast!): [Toast!]!
    }
`;

type ResolverFn = (parent: any, args: any, { cache }: { cache: ApolloCache<any> }) => any;

interface ResolverMap {
    [field: string]: ResolverFn;
}

interface AppResolvers extends Resolvers {
    // We will update this with our app's resolvers later
    Mutation: ResolverMap;
}

export const resolvers: AppResolvers = {
    Mutation: {
        addOrRemoveToast: (_, { toast }: { toast: Toast }, { cache }): Toast[] => {
            const queryResult = cache.readQuery<ToastState, any>({
                query: GET_TOASTS,
            });

            if (queryResult) {
                const { toasts } = queryResult;
                const { id } = toast;
                const data = {
                    toasts: toasts.includes(toast) ? toasts.filter((i) => i.id !== id) : [...toasts, toast],
                };
                cache.writeQuery({ query: GET_TOASTS, data });

                return data.toasts;
            }
            return [];
        },
    },
};
