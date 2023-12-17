import { PortoState } from './type';

export function isDataEmpty(data: PortoState): boolean {
  const hasEmptyValue = Object.values(data).some((value) => value === '');

  // Perubahan: Periksa jika setidaknya satu elemen di dalam portfolio kosong
  const isPortfolioEmpty = data.portfolio.some((item) =>
    Object.values(item).some((value) => value === '')
  );

  return hasEmptyValue || isPortfolioEmpty;
}
