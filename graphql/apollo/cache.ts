import { ApolloCache } from '@apollo/client';

export const updateCacheById = (
  cache: ApolloCache<unknown>,
  id: number,
  __typename: string
) => {
  const normalizedId = cache.identify({
    id,
    __typename,
  });

  cache.evict({ id: normalizedId });
  cache.gc();
};
