// Length helper: `node scripts/len.mjs "text one" "text two"`
// Prints the character count of each argument.
for (const s of process.argv.slice(2)) {
  console.log(String(s.length).padStart(4), s);
}
