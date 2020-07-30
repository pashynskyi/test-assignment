export const required = value => {
  if (value) return undefined;
  return "Field is required";
}

export const validateEmail = email => {
  const re = /\S+@\S+\.\S+/;
  if (!re.test(email)) {
    return "Invalid email"
  };
}

export const minLengthCreator = maxLength => value =>
  value.length < maxLength ? `Min length is ${maxLength} symbols` : undefined;

export const maxLengthCreator = maxLength => value =>
  value.length > maxLength ? `Max length is ${maxLength} symbols` : undefined;

export const phoneNumber = value => {
  const phoneNumber = value.split(' ').join('');
  return phoneNumber && !/^(\+380+[0-9]{9})$/i.test(phoneNumber)
    ? 'Invalid phone number, should start with "+380" and must be 12 digits'
    : undefined;
}

export const maxFileSize = (fileSize, maxSize) => {
  if (fileSize > (maxSize * 1024 * 1024))
    return `Size must not exceed ${maxSize}MB`
}

// export const minValue = min => value =>
//   value && value < min ? `Must be more than ${min}` : undefined;

// export const maxValue = max => value =>
//   value && value > max ? `Must be at least ${max}` : undefined;



