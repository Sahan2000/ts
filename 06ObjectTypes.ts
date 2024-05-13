
function printUser(user: {id:number; name:string}) {
    console.log (`The user id is ${user.id} `);
    console.log (`The user name is ${user.name} `);
}

const user = {
    id: 1,
    name: 'Steve'
};

printUser(user);

export default{}
