export function formatCardNumber(value: string) {
  return value
    .toString()
    .replace(/[^0-9]/g, "")
    .replace(/\s?/g, "")
    .replace(/(\d{4})/g, "$1 ")
    .trim();
}

export function formatDate(value: string) {
  return value
    .replace(/[^0-9]/g, "")
    .replace(/^([2-9])$/g, "0$1")
    .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
    .replace(/^0{1,}/g, "0")
    .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1/$2");
}
