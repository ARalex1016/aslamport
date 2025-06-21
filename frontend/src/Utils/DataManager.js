export const formatDate = (dateInput) => {
  // Check if the input can be converted to a valid Date
  const date = new Date(dateInput);
  if (isNaN(date.getTime())) return;

  // Extract day, month, and year
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  // Check if the input includes only the year and month (e.g., "2025-6")
  if (dateInput.match(/^\d{4}-\d{1,2}$/)) {
    return `${month} ${year}`;
  }

  // Default full date format
  return `${day} ${month} ${year}`;
};
