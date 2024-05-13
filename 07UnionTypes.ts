function printId(id: number | string){
    console.log(id);
}

printId(10);
printId('Sahan');
// printId(true); // cannot accept this argument type 

// ----------------------------------------------------

function displayId(id: number | string){
    if(typeof id == 'string'){
        console.log(id.toUpperCase());
    }else{
        console.log(id);
    }
}

displayId("sahan");
displayId(10);

//-----------------------------------------------------

function welcomePeople(names: string | string[]){
    if(Array.isArray(names)){
        names.map((name)=>{
            console.log(`Hey! Welcome ${name}!`);
        });
    }else{
        console.log(`Hey! Welcome lone traveler ${names}!`);
    }
}

welcomePeople(['Sahan','Nimna','Kashmi','Thashmika','Lushan']);
welcomePeople('Kashmi');

// -----------------------------------------------------
// let data: (number | boolean)[] = [10,20,true,false,'Hi']; // can't add string value
let data: (number | boolean)[] = [10,20,true,false];

// ------------------------------------------------------
// strict union
function windowStatus(status: "open"|"close"){
    console.log(`The window is ${status}`);
}

windowStatus("close");
windowStatus("open");

export default{}