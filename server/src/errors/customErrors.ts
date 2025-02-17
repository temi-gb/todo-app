export class EmptyInputFieldsError extends Error {
  constructor(message: string = 'Input fields cannot be empty') {
    super(message);
    this.name = 'EmptyInputFieldsError';
  }
}

export class InputAlreadyExistsError extends Error {
  constructor(message: string = 'Input already exists') {
    super(message);
    this.name = 'InputAlreadyExistsError';
  }
}

export class InvalidInputError extends Error {
  constructor(message: string = 'Invalid input') {
    super(message);
    this.name = 'InvalidInputError';
  }
}

export class FailedAPICallError extends Error {
  constructor(message: string = 'API call failed') {
    super(message);
    this.name = 'FailedAPICallError';
  }
}