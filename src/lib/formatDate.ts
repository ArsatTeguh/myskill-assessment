export function formatMonthYear(dateString: string): string {
  const dateObject = new Date(`${dateString} -01`);
  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    year: 'numeric',
  };
  const formattedDate = dateObject.toLocaleDateString('en-US', options);
  return formattedDate;
}
