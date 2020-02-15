export class account{

    aid: number;
    Username: string;
    password: string;
    email: string;
    fname: string;
    lname: string;
    isManager: boolean;

    constructor (id:number, username:string, password:string, email:string, f_name:string, 
        l_name:string, isManager:boolean){
            this.aid = id;
            this.Username = username;
            this.password = password;
            this.email = email;
            this.fname = f_name;
            this.lname = l_name;
            this.isManager = isManager;
        }
}