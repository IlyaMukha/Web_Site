import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RegistrationRequest } from "site/models/request/registration-request";


export class AccountServise{

    constructor (private http: HttpClient){}


    // public SendRequest(){
    //     this.http.get('https://localhost:5001/Test/Test').subscribe({next:(data:any) => 
    //     {
    //         this.my_data = data;
    //     }}); 
    // }

    public Registration(body:RegistrationRequest){
        this.http.post('https://localhost:5001/Test/TestPost', +body).subscribe({next:(data:any) => 
        {
           console.log(data);
            
        }});
    }


    // public X(){
    //     var user = new UserResponse("Max", "12345");

    //     this.http.post('https://localhost:5001/Test/TestPost', user).subscribe({next:(data:any) => 
    //     {
    //         this.my_data = data
    //     }
    // });
    // }
}