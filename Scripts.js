var x = true;
var board = []; // 1 is x 0 is o
function change(id){
    if (x){
        document.getElementById(id).innerHTML = '<i class="fa-solid fa-x" style="font-size:50px;color:beige"></i>' ;
        x = !x;
        board[parseInt(id)] = 1;
        checkWinX();
    } else{
        document.getElementById(id).innerHTML = '<i class="far fa-circle" style="font-size:50px;color:beige"></i>';
        x = !x;
        board[parseInt(id)] = 2;
        checkWinO();
    }
}

function checkWinX(){
    if((board[0] + board[1] + board[2])/3 == 1) {
        document.getElementById('board').innerHTML = '<i class="fa-solid fa-x" style="font-size:240px;color:beige"></i>' ;
    } else if((board[3] + board[4] + board[5])/3 == 1) {
        document.getElementById('board').innerHTML = '<i class="fa-solid fa-x" style="font-size:240px;color:beige"></i>' ;
    } else if((board[6] + board[7] + board[8])/3 == 1) {
        document.getElementById('board').innerHTML = '<i class="fa-solid fa-x" style="font-size:240px;color:beige"></i>' ;
    } else if((board[0] + board[3] + board[6])/3 == 1) {
        document.getElementById('board').innerHTML = '<i class="fa-solid fa-x" style="font-size:240px;color:beige"></i>' ;
    } else if((board[1] + board[4] + board[7])/3 == 1) {
        document.getElementById('board').innerHTML = '<i class="fa-solid fa-x" style="font-size:240px;color:beige"></i>' ;
    } else if((board[2] + board[5] + board[8])/3 == 1) {
        document.getElementById('board').innerHTML = '<i class="fa-solid fa-x" style="font-size:240px;color:beige"></i>' ;
    } else if((board[0] + board[4] + board[8])/3 == 1) {
        document.getElementById('board').innerHTML = '<i class="fa-solid fa-x" style="font-size:240px;color:beige"></i>' ;
    } else if((board[6] + board[4] + board[2])/3 == 1) {
        document.getElementById('board').innerHTML = '<i class="fa-solid fa-x" style="font-size:240px;color:beige"></i>' ;
    }
}
function checkWinO(){
    if((board[0] + board[1] + board[2])/3 == 2) {
        document.getElementById('board').innerHTML = '<i class="far fa-circle" style="font-size:240px;color:beige"></i>' ;
    } else if((board[3] + board[4] + board[5])/3 == 2) {
        document.getElementById('board').innerHTML = '<i class="far fa-circle" style="font-size:240px;color:beige"></i>' ;
    } else if((board[6] + board[7] + board[8])/3 == 2) {
        document.getElementById('board').innerHTML = '<i class="far fa-circle" style="font-size:240px;color:beige"></i>' ;
    } else if((board[0] + board[3] + board[6])/3 == 2) {
        document.getElementById('board').innerHTML = '<i class="far fa-circle" style="font-size:240px;color:beige"></i>' ;
    } else if((board[1] + board[4] + board[7])/3 == 2) {
        document.getElementById('board').innerHTML = '<i class="far fa-circle" style="font-size:240px;color:beige"></i>' ;
    } else if((board[2] + board[5] + board[8])/3 == 2) { 
        document.getElementById('board').innerHTML = '<i class="far fa-circle" style="font-size:240px;color:beige"></i>' ;
    } else if((board[0] + board[4] + board[8])/3 == 2) {
        document.getElementById('board').innerHTML = '<i class="far fa-circle" style="font-size:240px;color:beige"></i>' ;
    } else if((board[6] + board[4] + board[2])/3 == 2) {
        document.getElementById('board').innerHTML = '<i class="far fa-circle" style="font-size:240px;color:beige"></i>' ;
    }
}
function resetBoard(){
    document.getElementById('board').innerHTML 
    =
'<tr>'+
    '<td id="0"><button type="button" onclick="change('+"'0'"+')" class="button1">' +
        "<i class='far fa-square' style='font-size:36px;color:beige'></i>" +
    '</button></td>'+ 
    '<td id="1"><button type="button" onclick="change('+"'1'"+')" class="button1">' +
        "<i class='far fa-square' style='font-size:36px;color:beige'></i>" +
    '</button></td>'+
    '<td id="2"><button type="button" onclick="change('+"'2'"+')" class="button1">' +
        "<i class='far fa-square' style='font-size:36px;color:beige'></i>" +
    '</button></td>'+
'</tr>'+
'<tr>' +
    '<td id="3"><button type="button" onclick="change('+"'3'"+')" class="button1">'+
        "<i class='far fa-square' style='font-size:36px;color:beige'></i>"+
    '</button></td>' +
    '<td id="4"><button type="button" onclick="change('+"'4'"+')" class="button1">' +
        "<i class='far fa-square' style='font-size:36px;color:beige'></i>" +
    '</button></td>'+
    '<td id="5"><button type="button" onclick="change('+"'5'"+')" class="button1">'+
        "<i class='far fa-square' style='font-size:36px;color:beige'></i>" +
    '</button></td>' +
'</tr>' +
"<tr>" + 
    '<td id="6"><button type="button" onclick="change('+"'6'"+')" class="button1">' +
        "<i class='far fa-square' style='font-size:36px;color:beige'></i>" +
    '</button></td>'+
    '<td id="7"><button type="button" onclick="change('+"'7'"+')" class="button1">' +
        "<i class='far fa-square' style='font-size:36px;color:beige'></i>" +
    "</button></td>" +
    '<td id="8"><button type="button" onclick="change('+"'8'"+')" class="button1">' + 
        "<i class='far fa-square' style='font-size:36px;color:beige'></i>" + 
    "</button></td></tr>";
    board = [];
}
     