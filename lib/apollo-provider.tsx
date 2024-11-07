"use client";

import {  
  ApolloNextAppProvider
} from "@apollo/experimental-nextjs-app-support";

import client from "@/graphql/apollo/client"

export function ApolloProvider({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={client}>
      {children}
    </ApolloNextAppProvider>
  );
}