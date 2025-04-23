function playSound(fileName) {
  const audio = new Audio(`sounds/${fileName}`);
  audio.play();
}
