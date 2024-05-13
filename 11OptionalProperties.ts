interface User{
    id: string;
    name: string;
    creditCardNumber?: number // I make this prop as optional using ?
}

let user: User = {
    id: 'U001',
    name: 'Pasan',
    // creditCardNumber: 4567894325
}

export default{}