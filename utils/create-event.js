export function createEvent(element, name, options) {
  const event = new CustomEvent(name, options);
  element.dispatchEvent(event);
}