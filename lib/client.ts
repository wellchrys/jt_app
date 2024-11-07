import { InMemoryCache, ApolloClient } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support";
import { createLink } from "apollo-absinthe-upload-link";

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache({
      addTypename: false,
    }),
    link: createLink({
      uri: process.env.NEXT_PUBLIC_URI_GRAPHQL,
    }),
  });
});
