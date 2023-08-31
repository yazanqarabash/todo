export function validateTask({ title, body }) {
  const errors = {};

  if (!title.trim()) {
    errors.title = "Title is required";
  } else if (title.length > 50) {
    errors.title = "Title cannot exceed 50 characters";
  }

  if (!body.trim()) {
    errors.body = "Body is required";
  } else if (body.length > 3600) {
    errors.body = "Body cannot exceed 3600 characters";
  }

  return errors;
}
