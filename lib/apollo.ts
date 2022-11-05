import { useMemo } from "react";
import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

function createApolloClient(): ApolloClient<NormalizedCacheObject> {
  const authLink: ApolloLink = setContext((_, { headers }) => {
    const token: string = sessionStorage.getItem("token") || "thisisunsafe";
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
      link: createHttpLink({ uri: "/" }),
    };
  });

  const httpLink: HttpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_URI,
  });

  return new ApolloClient({
    cache: new InMemoryCache(),

    link: authLink.concat(httpLink),
  });
}

export function initializeApollo(
  initialState: any = null
): ApolloClient<NormalizedCacheObject> {
  const _apolloClient: ApolloClient<NormalizedCacheObject> | undefined =
    apolloClient ?? createApolloClient();

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  if (typeof window === "undefined") return _apolloClient;

  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo(
  initialState: any
): ApolloClient<NormalizedCacheObject> {
  const store: ApolloClient<NormalizedCacheObject> = useMemo(
    () => initializeApollo(initialState),
    [initialState]
  );
  return store;
}
