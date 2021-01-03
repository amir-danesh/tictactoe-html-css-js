function insert_XO(){
  if(this.textContent == ""){
    if(nobat == "X"){
      this.textContent = "X";
      this.style.color = 'red';
      turn.textContent = "It's O turn!";
      turn.style.color = 'blue';
      nobat = "O";
    } else if(nobat == "O") {
      this.textContent = "O";
      this.style.color = 'blue';
      turn.textContent = "It's X turn!";
      turn.style.color = 'red';
      nobat = "X"
    } else {
      console.log('error')
    }
    checkwin();
  }
}

function rst_fnc(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
    turn.textContent = "It's X turn!";
    squares[i].style.background = 'white';
  }
  turn.style.color = "red";
  nobat = "X";
}

function disable_squers(){
  for (var j = 0; j < squares.length; j++) {
    if (squares[j].textContent == "") {
      squares[j].textContent = "  "
    }
  }
}

function checkwin(){
  var if_win = false;
  for (var i = 0; i < 3; i++) {
    var temp1 = squares[i].textContent;
    var temp2 = squares[i+3].textContent;
    var temp3 = squares[i+6].textContent;
    if (temp1 == temp2 && temp2 == temp3 && temp1 != '') {
      squares[i].style.background = 'green';
      squares[i+3].style.background = 'green';
      squares[i+6].style.background = 'green';
      disable_squers();
      turn.textContent = temp1 + " WON !";
      turn.style.color = 'pink';
      if_win = true;
      return;
    }
  }
  for (var i = 0; i < 9; i+=3) {
    var temp1 = squares[i].textContent;
    var temp2 = squares[i+1].textContent;
    var temp3 = squares[i+2].textContent;
    if (temp1 == temp2 && temp2 == temp3 && temp1 != '') {
      squares[i].style.background = 'green';
      squares[i+1].style.background = 'green';
      squares[i+2].style.background = 'green';
      disable_squers();
      turn.textContent = temp1 + " WON !";
      turn.style.color = 'pink';
      if_win = true;
      return;
    }
  }
  if(squares[0].textContent == squares[4].textContent && squares[4].textContent == squares[8].textContent && squares[0].textContent != ""){
    squares[0].style.background = 'green';
    squares[4].style.background = 'green';
    squares[8].style.background = 'green';
    disable_squers();
    turn.textContent = temp1 + " WON !";
    turn.style.color = 'pink';
    if_win = true;
    return;
  }
  if(squares[2].textContent == squares[4].textContent && squares[4].textContent == squares[6].textContent && squares[2].textContent != ""){
    squares[2].style.background = 'green';
    squares[4].style.background = 'green';
    squares[6].style.background = 'green';
    disable_squers();
    turn.textContent = temp1 + " WON !";
    turn.style.color = 'pink';
    if_win = true;
    return;
  }
  if(if_win == false){
    var counter = 0;
    for (var i = 0; i < squares.length; i++) {
      if(squares[i].textContent =='X' || squares[i].textContent == "O"){
        counter += 1;
      }else{
        break;
      }
    }
  if(counter == 9){
    turn.textContent = "DRAW! nobody won :(";
    turn.style.color = 'green';
  }
}
}


var squares_f = document.querySelectorAll('td');
var squares = Array.prototype.slice.call(squares_f);
var rst_btn = document.querySelector('#restart');
var turn = document.querySelector('#turn');
var nobat = "X";

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click',insert_XO);
}

rst_btn.addEventListener('click',rst_fnc);
