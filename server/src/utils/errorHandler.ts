import { Response } from 'express';
import {
  EmptyInputFieldsError,
  InputAlreadyExistsError,
  InvalidInputError,
  FailedAPICallError,
} from '../errors/customErrors';

export const handleAPIError = (res: Response, error: unknown) => {
  if (error instanceof EmptyInputFieldsError) {
    res.status(400).json({ message: error.message });
  } else if (error instanceof InputAlreadyExistsError) {
    res.status(400).json({ message: error.message });
  } else if (error instanceof InvalidInputError) {
    res.status(400).json({ message: error.message });
  } else if (error instanceof FailedAPICallError) {
    res.status(500).json({ message: error.message });
  } else {
    res.status(500).json({ message: 'An unexpected error occurred' });
  }
};