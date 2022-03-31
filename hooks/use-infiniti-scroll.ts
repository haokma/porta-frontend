import useSWRInfinite from 'swr/infinite';
import fetcher from '../utils/fetcher';

export const useInfinitiScroll = () => {
  const PAGE_SIZE = 6;
  const getKey = (pageIndex: any, previousPageData: any, pageSize: any) => {
    if (previousPageData && !previousPageData.length) return null; // reached the end

    return `https://api.github.com/repos/facebook/react/issues?per_page=${pageSize}&page=${
      pageIndex + 1
    }`;
  };

  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (...args) => getKey(...args, PAGE_SIZE),
    fetcher
  );

  const issues = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);
  const isRefreshing = isValidating && data && data.length === size;

  return {
    issues,
    isLoadingInitialData,
    isLoadingMore,
    isReachingEnd,
    isEmpty,
    isRefreshing,
    mutate,
    setSize,
    size,
  };
};
