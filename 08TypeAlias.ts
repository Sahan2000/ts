// Without using type alias

let box = {
    height: 10,
    width: 20,
    length: 30
}

function findBoxArea(box:{height: number; width:number; length:number}){
    //find area logic
}

function findBoxValume(box:{height: number; width:number; length:number}){
    // find volume logic
}

findBoxArea(box);
findBoxValume(box);

// ------------------------------------------------------------------------

type Box = {
    height: number;
    width: number;
    length: number;
}

let box2 = {
    height: 10,
    width: 20,
    length: 30
}

function findBoxArea2(box: Box){
    //find area logic
}

function findBoxValume2(box: Box){
    // find volume logic
}

findBoxArea(box2);
findBoxValume(box2);

// -----------------------------------------------------------------

type ID = number | string;

function print(id: ID){
    console.log(id);
}

print(10);
print("Sahan");
// print(true); //Illegal

export {}