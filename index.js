window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const color = [
    "#16a085",
    "#a05416",
    "#a01624",
    "#24a016",
    "#1632a0",
    "#9216a0"
  ];

  console.log(sounds);

  // Lets get going with the sound here
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();
    });
  });
});
