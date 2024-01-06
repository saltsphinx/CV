export default function processFD(fd) {
  const arr = Array.from(fd);
  const obj = {};
  
  arr.forEach(pair => obj[pair[0]] = pair[1]);
  return obj;
}