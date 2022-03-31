import useSWR from 'swr';

export const useCategory = (slug: any = null) => {
  const { data } = useSWR(`/category${slug ? `/${slug}` : ''}`);

  return {
    categoryList: data?.categoryList,
  };
};
