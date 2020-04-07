const hasNumber = value => {
  return new RegExp(/[0-9]/).test(value);
}

const hasMixed = value => {
  return new RegExp(/[a-z]/).test(value) &&
         new RegExp(/[A-Z]/).test(value);
}

const hasSpecial = value => {
  return new RegExp(/[!#@$%^&*)(+=._-]/).test(value);
}

export const strengthColor = count => {
  if (count < 2)
    return 'bg-danger';
  if (count < 6)
    return 'bg-warning';
  if (count < 8)
    return 'bg-success';
}

export const strengthVerdict = count => {
  if (count < 2)
    return 'Very Weak';
  if (count < 4)
    return 'Weak';
  if (count < 6)
    return 'Normal';
  if (count < 8)
    return 'Very Strong';
}

export const strengthIndicator = value => {
  let strengths = 0;
  if (value.length > 2)
    strengths++;
  if (value.length > 3)
    strengths++;
  if (value.length > 4)
    strengths++;
  if (value.length > 5)
    strengths++;
  if (hasNumber(value))
    strengths++;
  if (hasSpecial(value))
    strengths++;
  if (hasMixed(value))
    strengths++;
  return strengths;
}