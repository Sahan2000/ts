type Vehicle = {
    model:string
}

interface Animal{
    name: string
}

// -------------------------------------------------------------

// Extendability -> both have extendability

interface Dog extends Animal{
    weight: number
}

type car = Vehicle & {
    topSpeed: number
}

// --------------------------------------------------------------

// Adding properties to an exiting 

interface Human{
    id: number
}

interface Human{
    name: string
}

//////////////////////////////////////////////////////////////////

type love = {
    shape: string
}

// type love = { // Illegal; duplicate identifier
//     duration: number
// }