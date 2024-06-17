//validating the post
import { body } from "express-validator";

export const bodyValidator = [
  body("imageUrl").notEmpty().withMessage("imageUrl cannot be empty").trim(),
  body("title").notEmpty().withMessage("title cannot be empty"),
  body("price").notEmpty().withMessage("price cannot be empty"),
  body("date").notEmpty().withMessage("date cannot be empty"),
  body("location").notEmpty().withMessage("location cannot be empty"),
  body("company").notEmpty().withMessage("company cannot be empty"),
];
