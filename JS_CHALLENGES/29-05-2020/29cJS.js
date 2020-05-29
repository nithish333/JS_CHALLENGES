// 1.SHUFFLE THE GIVEN NAME
shuffle = (firstName, secondName) => {
  document.getElementById(
    "name"
  ).innerText = `The original name is ${firstName} ${secondName}
            and the shuffled name is ${secondName} ${firstName}`;
};

//2.is four letter word

somet = () => {
  var arr = ["Tomato", "Potato", "pair"];
  isFourLetter(arr);
};
isFourLetter = (parray) => {
  //  console.log(parray);

  for (var i in parray) {
    if (parray[i].length == 4) {
      document.getElementById(
        "c2"
      ).innerText = `The four letter word is ${parray[i]}`;
    } else {
      document.getElementById("c2").innerText = `No word of four letter length`;
    }
  }
};

//3.Negate the array numbers

some2 = () => {
  var arr2 = [-1, 2, 3, -4];
  negate(arr2);
};
negate = (parr2) => {
  var negated = [];
  for (var i in parr2) {
    console.log(-parr2[i]);
  }
};

//4.Seven boom....

some4 = () => {
  var a3 = [1, 7, 5, 6];

  sevenBoom(a3);
};
sevenBoom = (pa3) => {
  var index = pa3.indexOf(7);
  if (index > 0) {
    document.getElementById("c4").innerText = "BOOM!";
  } else {
    document.getElementById("c4").innerText = `There is no 7 in the array`;
  }
};

//5.Largest swap...

some5 = () => {
  var num = 43;
  largestSwap(num);
};
largestSwap = (num) => {
  var n = num + "";
  var reverseN = n.split("").reverse().join("");
  //console.log();
  if (num < reverseN) document.getElementById("c5").innerText = "false";
  else document.getElementById("c5").innerText = "true";
};
