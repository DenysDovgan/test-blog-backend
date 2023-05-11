import { body } from "express-validator";

export const loginValidation = [
  body('email', 'Email format is invalid').isEmail(),
  body('password', 'Password must be min 5 symbols lenght').isLength({ min: 5 }),
];

export const registerValidation = [
  body('email', 'Email format is invalid').isEmail(),
  body('password', 'Password must be min 5 symbols lenght').isLength({ min: 5 }),
  body('fullName', 'Enter Name').isLength({ min: 3 }),
  body('avatarUrl', 'Avatar URL is invalid').optional().isURL(),
];

export const postCreateValidation = [
  body('title', 'Enter post title').isLength({ min: 3 }).isString(),
  body('text', 'Add some text to the post').isLength({ min: 10 }).isString(),
  body('tags', 'Tag format is invalid (Enter an array)').optional().isString(),
  body('imageUrl', 'Image URL is invalid').optional().isString(),
];