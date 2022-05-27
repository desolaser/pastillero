const getDateDifference = (date: Date) => {
  const actualDate: Date = new Date();
  const receivedDate: Date = new Date(date);
  const diffTime = Math.abs(actualDate.getTime() - receivedDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}

export default getDateDifference;