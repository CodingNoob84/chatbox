import { format } from "date-fns";

export function getTimeAgo(timestamp) {
  const currentTime = new Date();
  const targetTime = new Date(timestamp);

  const timeDifference = currentTime - targetTime;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return `${years} year${years > 1 ? "s" : ""} ago`;
  } else if (months > 0) {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  }
}

export function formatDateTime(date) {
  // Parse the input date string to a JavaScript Date object
  const parsedDate = new Date(date);

  // Format the date as "3rd Aug 2023, 11:16AM" using the date-fns library
  const formattedDate = format(parsedDate, "do MMM yyyy, h:mma");

  return formattedDate;
}
