window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");

  console.log(sounds);

  // Lets get going with the sound here
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sounds[index].play();
    });
  });
});
