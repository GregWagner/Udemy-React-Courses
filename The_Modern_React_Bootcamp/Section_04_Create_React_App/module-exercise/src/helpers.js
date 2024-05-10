function choice(items) {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

function remove(items, item) {
  const removeIndex = items.indexOf(item);
  if (removeIndex !== -1) {
    items = [...items.slice(0, removeIndex), ...items.slice(removeIndex + 1)];
    return item;
  }
}

export { choice, remove };
