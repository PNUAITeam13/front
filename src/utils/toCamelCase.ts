const toCamelCase = (string: string): string => {
  return string.includes(" ")
    ? string
        .trim()
        .split(" ")
        .reduce(
          (acc, el, i) =>
            acc +
            (i > 0
              ? el[0].toUpperCase() + el.slice(1)
              : el[0].toLowerCase() + el.slice(1)),
          ""
        )
    : string;
};

export default toCamelCase;
