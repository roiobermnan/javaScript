function checkResult(){
    document.getElementById('letsPlayDiv').innerHTML = '<h1 id="gameOver">Game over!</h1>';
    if(sumBlue>sumRed)
    document.getElementById('blueWin').innerHTML = 'Victory';
else if(sumBlue<sumRed)
    document.getElementById('redWin').innerHTML = 'Victory';
else {
    document.getElementById('blueWin').innerHTML = 'Tie';
    document.getElementById('redWin').innerHTML = 'Tie';
}
}

function EndTheGame(x,y){
    var c = 0;
    for(let i = 0; i<arr.length ;i++){
        if(arr[x][i] === 0){
            c++; 
        }
    }
    if(c === arr.length){       
        checkResult();
        text ='<caption id="caption"><b>Mattix</caption>';
for(let i = 0 ; i<arr.length;i++){
    text+='<tr>';
for(let j = 0 ; j<arr[i].length;j++){
if(i===x)
text += '<td><button id="strike" disabled>'+arr[i][j]+'</button></td>';
else
if(arr[i][j]==0)
text += '<td><button id="clicked" disabled>'+arr[i][j]+'</button></td>';
else 
text += '<td><button id="restOfBtn" disabled>'+arr[i][j]+'</button></td>';
}
text += '</tr>';
}
document.getElementById('table').innerHTML = text;
    }
            
    c=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i][y] === 0){
            c++;
        }
    }
    if(c === arr.length){  
        checkResult();
        text ='<caption id="caption"><b>Mattix</caption>';
        for(let i = 0 ; i<arr.length;i++){
            text+='<tr>';
        for(let j = 0 ; j<arr[i].length;j++){
        if(j===y)
        text += '<td><button id="strike" disabled>'+arr[i][j]+'</button></td>';
        else
        if(arr[i][j]==0)
        text += '<td><button id="clicked" disabled>'+arr[i][j]+'</button></td>';
        else 
        text += '<td><button id="restOfBtn" disabled>'+arr[i][j]+'</button></td>';
        }
        text += '</tr>';
        }
        document.getElementById('table').innerHTML = text;
    }
    }

function MyFunc(i,j){  
var x = i;
var y = j;
count++;
if(count%2!=0){
    sumBlue+=arr[i][j];
    document.getElementById('firstPlayer').innerHTML = sumBlue;
}
else{
    sumRed+=arr[i][j];
    document.getElementById('seconedPlayer').innerHTML = sumRed;
}
arr[i][j] = 0;
text ='<caption id="caption"><b>Mattix</caption>';
for(let i = 0 ; i<arr.length;i++){
    text+='<tr>';
for(let j = 0 ; j<arr[i].length;j++){
if(count%2!=0){
if(arr[i][j] == 0)
text += '<td><button id="clicked" disabled>'+arr[i][j]+'</button></td>'; 
else
if(j===y && arr[i][j]!= 0)
text += '<td><button id="redTurn" onclick="MyFunc('+i+','+j+')">'+arr[i][j]+'</button></td>'; 
else
text += '<td><button id="restOfBtn" disabled>'+arr[i][j]+'</button></td>'; 
}
else
if(count%2==0){
    if(arr[i][j] == 0)
    text += '<td><button id="clicked" disabled>'+arr[i][j]+'</button></td>'; 
    else
    if(i===x && arr[i][j]!= 0)
    text += '<td><button id="blueTurn" onclick="MyFunc('+i+','+j+')">'+arr[i][j]+'</button></td>'; 
    else
    text += '<td><button id="restOfBtn" disabled>'+arr[i][j]+'</button></td>'; 
    }
    }
    text += '</tr>';
    }
    document.getElementById('table').innerHTML = text;
    EndTheGame(x,y);
}


function StartTheGame(){
text ='<caption id="caption"><b>Mattix</caption>';
for(let i = 0 ; i<arr.length;i++){
    text+='<tr>';
for(let j = 0 ; j<arr[i].length;j++){
if(i===0)
text += '<td><button id="blueTurn" onclick="MyFunc('+i+','+j+')">'+arr[i][j]+'</button></td>';
else
text += '<td><button id="restOfBtn" onclick="MyFunc('+i+','+j+')" disabled>'+arr[i][j]+'</button></td>';
}
text += '</tr>';
}
document.getElementById('table').innerHTML = text;
document.getElementById('letsPlayDiv').innerHTML = '';
}

function NewGame(){ 
sumBlue = 0;
sumRed = 0;
text ='<caption id="caption"><b>Mattix</caption>';
count = 0;
for(let i = 0;i<7;i++){
arr[i] = [];
text+='<tr>';
for(let j = 0 ; j<7;j++){
arr[i][j] = Math.floor(Math.random() * 89) + 10;
text += '<td><button id="newGameBtn" disabled>'+arr[i][j]+'</button></td>';
}
text += '</tr>';
}
document.getElementById('table').innerHTML = text;
document.getElementById('letsPlayDiv').innerHTML = '<button id="letsPlay" onclick="StartTheGame()">Lets play!</button>'
document.getElementById('firstPlayer').innerHTML = sumBlue;
document.getElementById('seconedPlayer').innerHTML = sumRed;
document.getElementById('blueWin').innerHTML = '';
document.getElementById('redWin').innerHTML = '';
}

const arr = [];
var count = 0;
var sumBlue = 0;
var sumRed = 0;
var x;
var y;
var text ;
NewGame();

