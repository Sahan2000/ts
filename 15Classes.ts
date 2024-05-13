interface Vehicle{
    horn(): void;
}

class OldCar{
    constructor(){
        console.log('Invoking super class constructor!');
    }

    go(): string{
        return 'Old car is go';
    }
}

class NewCar extends OldCar implements Vehicle{
    constructor(){
        super();
    }
    horn(): void {
        console.log('new car is pooomp pooomp !');
    }
    go(): string{
        return 'new car is going !';
    }
}

let newCar = new NewCar();
console.log(newCar.go());
newCar.horn();

export default{}