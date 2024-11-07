"use client";

import { NormalizedCacheObject } from "@apollo/client";

import {
  ApolloClient,
  InMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support";

import { ApolloLink } from "@apollo/client";

import { createLink } from "apollo-absinthe-upload-link";

export const httpLink = createLink({
  uri: process.env.NEXT_PUBLIC_URI_GRAPHQL,
});

const client = () => {
  return new ApolloClient<NormalizedCacheObject>({
    cache: new InMemoryCache({
      addTypename: false,
    }),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
};

export default client;
