export default class ConflictError extends Error {
  constructor(message) {
    super(message);

    Error.captureStackTrace(this, ConflictError);

    this.name = ConflictError.name;
  }
}
