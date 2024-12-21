/**
 * No operation function.
 */
export const noop = () => {};

/**
 * Get pages count.
 *
 * @param {number} page Current page.
 * @param {number} size Items per page.
 * @param {number} totalCount Total items count.
 */
export const getPagesCount = (page: number, size: number, totalCount: number) => {
  if (totalCount) return Math.ceil(totalCount / size);
  if (totalCount === 0) return page;

  return 1;
};

/**
 * Get formatted modal message.
 *
 * @param {string[]} linesArray Lines list.
 */
export const getFormattedModalText = (linesArray: string[]) => linesArray
  .map((line) => (<p key={line}>{line}</p>));
