export default function forEach(items: number[], callback: (str: number) => number) {
  let a = 0;
  for (let index = 0; index < items.length; index++) {
    a += callback(items[index]);
  }
  return a;
}
