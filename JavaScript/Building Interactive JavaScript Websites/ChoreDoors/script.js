const doorImage1 = document.getElementById("door1");
const doorImage2 = document.getElementById("door2");
const doorImage3 = document.getElementById("door3");
const botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";

const randomChoreDoorGenerator = () => {
  const numClosedDoors = 3;
  const choreDoor = Math.floor( Math.random() * numClosedDoors );

  if(choreDoor === 0) {
    openDoor1 = botDoorPath;
  } else if(choreDoor === 1) {
    openDoor2 = botDoorPath;
  } else (choreDoor === 2 ) {
    openDoor3 = botDoorPath;
  };

  let openDoor1;
  let openDoor2;
  let openDoor3;
}

doorImage1.onclick = () => {
  doorImage1.src = botDoorPath;
};

doorImage2.onclick = () => {
  doorImage2.src = beachDoorPath;
};

doorImage3.onclick = () => {
  doorImage3.src = spaceDoorPath;
};