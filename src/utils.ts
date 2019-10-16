export const formatMultiline = (str: string) => {
  const trimAroundRegex = /^(?:\s*\n)?((?:.|\n)*?)\s*$/g;
  const leadingWhitespaceRegex = /^([\t ]*)(?:\S.*)$/gm;

  const trimAroundMatch = trimAroundRegex.exec(str);
  if (!trimAroundMatch || !trimAroundMatch[1]) {
    return "";
  }
  const coreText = trimAroundMatch[1];

  let leadingWhitespaceMatch;
  const leadingWhitespaceMatches = [] as string[];
  while ((leadingWhitespaceMatch = leadingWhitespaceRegex.exec(coreText)) !== null) {
    if (leadingWhitespaceMatch[1]) {
      leadingWhitespaceMatches.push(leadingWhitespaceMatch[1]);
    }
  }

  if (!leadingWhitespaceMatches.length) {
    return "";
  }

  const minLeadingWhitespaceLength = Math.min(...leadingWhitespaceMatches.map((whitespace) => whitespace.length));

  return coreText
    .split("\n")
    .map((line) => line.slice(minLeadingWhitespaceLength))
    .join("\n");
};
