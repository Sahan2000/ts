let data1: [number, string, boolean] = [10, "hello", true];

let [a, b, c] = data1;
console.log('a: ', a);
console.log('a: ', b);
console.log('a: ', c);


let user2 = {
    id: 'U001',
    name: 'Sahan',
    email: 'sahan@gmail.com'
}

let {id, name, email} = user2;
console.log('id: ', id);
console.log('name: ', name);
console.log('email: ', email);

export default{}