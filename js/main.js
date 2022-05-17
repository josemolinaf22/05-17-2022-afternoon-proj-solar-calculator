// function floor(diameter) {
//     let radius = diameter/2;
//     let floorArea = Math.PI * (radius * radius);
//     return floorArea;
// } //end of function

// function walls(diameter, height) {
//     let radius = diameter/2;
//     let circumference = 2 * Math.PI * radius;
//     let wallArea = circumference * height;
//     return wallArea ;

// }//end of function

// function materialsNeeded () {

//     let d = document.getElementById('across').value;
//     let h = document.getElementById('height').value;

//     let carpetNeeded = Math.ceil(floor(d));
//     let paintNeeded = Math.ceil(walls(d,h));
//     console.log('Carpet needed is '+carpetNeeded + ' sqft');
//     console.log('Paint needed is '+paintNeeded+' sqrt');

// } //end of function

function myFunction() {
  let elem = document.getElementById("chooseMe");
  let fortuneNum = elem.options[elem.selectedIndex].value;
  let fortuneMessage;
  console.log(fortuneNum);

  switch (Number(fortuneNum)) {
    case 1:
    case 6:
       fortuneMessage = "You will inherit a fortune";
      break;
      case 2:
      case 7:
      fortuneMessage = "You will become a JavaScript Ninja";
      break;
    case 3:
        fortuneMessage = "You will win a new car.";
        break;
    case 4:
    case 8:
        fortuneMessage = "A new computer will arrive at your house today.";
        break;

    default:
        fortuneMessage = "You have three hours to live so finish this course.";
  } //end of switch 



  document.getElementById("feedback").innerHTML = fortuneMessage;
} //end of function
