export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: any = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Europe/Lisbon'
  };
  
  const formattedDate = date.toLocaleDateString('pt-PT', options);

  return formattedDate;
}