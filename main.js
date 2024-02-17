const heading1 = document.getElementById("text")
let name= 'Alexandra is sailing the world';
heading1.textContent = `Hi ${name}`;
Get_firstcharacter(name);
Get_lastsebas(name);
Get_NumberOfChars(name);
Get_Upper(name);
Get_Lower(name);
Get_Capitalize(name);
function Get_firstcharacter(text){


    console.log(text.substring(0,1));
}

function Get_lastsebas(text){

    console.log(text.at(-1));
}

function Get_NumberOfChars(text){

    console.log(text.length);
}

function Get_Upper(text){
    
    console.log(text.toUpperCase())
}

function Get_Lower(text){

    console.log(text.toLowerCase())
}

function Get_Capitalize(text){

    console.log(text.at(0).toUpperCase());
}

const input_ = document.getElementById("i1")


const e1 = document.getElementById('Q1')


input_.addEventListener("keyup" , ()=>{
    let value = input_.value;

    e1.textContent = getlower(value_);
})




