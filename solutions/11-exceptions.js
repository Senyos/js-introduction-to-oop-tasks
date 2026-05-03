export class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = "ParseError";
  }
}

// BEGIN
const parseJson = (json) => {
    try {
        return JSON.parse(json)
    } catch(e) {
        throw new ParseError
    }
}

export { parseJson }
// END
