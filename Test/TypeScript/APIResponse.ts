interface ApiResponse<T> {
    status:number;
    error?: string;
    data:T;
}
interface User {
    id: number;
    name: string;
    email: string;
}
interface Product {
    id: number;
    name: string;
    price: number;
}

type UserResponse = ApiResponse<User>;
type ProductResponse = ApiResponse<Product>;

const userResponse:UserResponse ={
    status: 200,
    data:{
        id:1,
        name:"john",
        email:"abc@gmail.com"
    }
}
console.log("User Response: ", userResponse);
const productResponse:ProductResponse ={
    status: 200,
    data:{
        id:1,
        name:"Mobile phone",
        price:45000
    }
}
console.log("Product Response: ", productResponse);

