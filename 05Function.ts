function greet(name: string){
    console.log("hello " +name.toUpperCase());
}

greet("Matheve");

// ------------------------------------

// 2. return type annotation
function getRandomNumber(): number {
    return Math.random();
    // return "Hello";
    // return 10 > 5;
}

const data = (): number =>{
    // return 'a';
    return 10;
}

const data2 = (): number => 10 +10;

// -------------------------------------

// 03 Annonymous function
const marks: number[] = [10,20,30,40,50];

// please give me a callerback function

marks.forEach(function(mark){
    console.log(mark + '-');
});

console.log('-----------------------------------');

marks.forEach((mark)=>{
    console.log(mark);
});

// -----------------------------------------------

// void type annotation
function printInfo(): void {
    let name ='Sahan';
    let age = 24;

    console.log(`My name is ${name}, and my age is ${age} `)

    // return "10"; // you cannot, because this function is now has void type annotation
}

printInfo();

export default{}