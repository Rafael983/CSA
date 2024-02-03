// console.log(document.getElementById("test").textContent)
// var x = document.getElementById("test")
let text_options = ['Great','amazing','insane'];
function printHere(){
    document.getElementById("test").textContent="yay";
    let text_hello = document.getElementById("test").textContent;
    if(text_hello =="yay"){
        document.getElementById("test").textContent="bye";
    }
    else{
        document.getElementById("test").textContent="yay"  ;
    }
    }

    const colors = ['red','blue','yellow'];
    let index=0;
function switchColor(){
        document.getElementById('mainButton').style.backgroundColor=colors[index];
        index++;
        if(index===3){
            index=0;
        }
        
    }
