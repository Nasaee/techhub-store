const RESULT_PER_PAGE = 9;

export const countPages = <T>(list: T[]): number => {
  return Math.ceil(list.length / RESULT_PER_PAGE);
};

export const getPageResult = <T>(currentPage: number, list: T[]) => {
  const start = (currentPage - 1) * RESULT_PER_PAGE;
  const end = currentPage * RESULT_PER_PAGE;

  return list.slice(start, end);
};
