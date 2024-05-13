interface Employee{
    empId: number;
    email: string;
    name: string;
}

function validateEmployee(emp: Employee){
    //validate logic here
}

validateEmployee({empId:1, email:'sahan@gmail.com',name:'Sahan'});

// validateEmployee({empId:2, email:'steve@gmail.com', nam:"john"}); // Illegal

export default{}