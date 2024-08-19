export const ValidationMessages = {
  required: (property: string) => `${property} is required.`,
  isUrl: (property: string) => `Please provide a valid URL for ${property}.`,
  isString: (property: string) => `${property} should be a string`,
};
