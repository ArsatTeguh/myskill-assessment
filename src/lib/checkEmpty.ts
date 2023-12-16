import { PortoState } from './type';

export function isDataEmpty(data: PortoState): boolean {
  const hasEmptyValue = Object.values(data).some((value) => value === '');
  const isPortfolioEmpty = data.portfolio.length === 0;
  return hasEmptyValue || isPortfolioEmpty;
}
