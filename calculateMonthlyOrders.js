function calculateMonthlyOrders(arr) {
  return arr.reduce((acc, curr) => acc + (curr.January || 0) + (curr.February || 0) + (curr.March || 0)
  + (curr.April || 0) + (curr.May || 0) + (curr.June || 0) + (curr.July || 0) + (curr.August || 0)
  + (curr.September || 0) + (curr.October || 0) + (curr.November || 0) + (curr.December || 0), 0);
}

