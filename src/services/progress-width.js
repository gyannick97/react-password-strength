export const progressWidth = count => {
  if (count === 0)
    return '5%';
  if (count < 2)
    return '20%';
  if (count < 4)
    return '50%';
  if (count < 6)
    return '75%';
  if (count < 8)
    return '100%';
}