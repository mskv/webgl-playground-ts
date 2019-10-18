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

// compareFn(el) returns 1 if el is greater, -1 if it's smaller or 0 if it's equal to the target
export const bisect = <T>(
  arr: T[],
  compareFn: (el: T) => number,
  sliceStartIndex?: number,
  sliceEndIndex?: number,
): T | null => {
  if (!sliceStartIndex) {
    sliceStartIndex = 0;
  }
  if (!sliceEndIndex) {
    sliceEndIndex = arr.length;
  }

  const sliceLength = sliceEndIndex - sliceStartIndex;
  if (sliceLength === 0) {
    return null;
  } else if (sliceLength === 1) {
    if (compareFn(arr[sliceStartIndex]) === 0) {
      return arr[sliceStartIndex];
    } else {
      return null;
    }
  } else {
    const midIndex = sliceStartIndex + Math.floor(sliceLength / 2);
    const mid = arr[midIndex];
    const comparison = compareFn(mid);
    if (comparison === 1) {
      const newSliceStartIndex = sliceStartIndex;
      const newSliceEndIndex = midIndex;
      return bisect(arr, compareFn, newSliceStartIndex, newSliceEndIndex);
    } else if (comparison === -1) {
      const newSliceStartIndex = midIndex + 1;
      const newSliceEndIndex = sliceEndIndex;
      return bisect(arr, compareFn, newSliceStartIndex, newSliceEndIndex);
    } else {
      return mid;
    }
  }
};
