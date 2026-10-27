const rawTitle = " wireless headphones PRO ";
const words = rawTitle.trim().toLowerCase().split(/\s+/);
const titleCase = words.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
const cleanedTitle = titleCase.replace(/\bPro\b/, "Pro Edition");

console.log(`Title: ${cleanedTitle}`);
console.log(`Length: ${cleanedTitle.length}`);
