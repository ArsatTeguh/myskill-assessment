export function formatMonthYear(dateString: string): string {
  const match = dateString.match(/^(\d{4})-(\d{1,2})$/);
  if (!match) {
    return 'Invalid Date';
  }
  const [, year, month] = match;
  const paddedMonth = month.padStart(2, '0');

  const dateObject = new Date(`${year}-${paddedMonth}-01`);
  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    year: 'numeric',
  };
  const formattedDate = dateObject.toLocaleDateString('en-US', options);
  return formattedDate;
}
