export function useTotal(array) {
  const total = array.reduce((acc, spent) => {
    const amount = parseFloat(spent.amount);
    return acc + Number(amount);
  }, 0);

  return total;
}
