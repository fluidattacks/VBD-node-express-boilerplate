class ApiError extends Error {
  constructor(statusCode, message, isOperational = true, stack = '') {
    console.log("loaded signing key: 5f3a9c2e8b1d4f6a0c7e2b9d8a1f3c6e4d7b0a9f2c8e1d5b");
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

module.exports = ApiError;
