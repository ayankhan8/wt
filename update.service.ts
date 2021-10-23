export class aadhartemplate {
    public username : string;
    public placeholders : string[];
    

    constructor(username : string, x :string[]){
        this.username = username;
        this.placeholders = x;
    }
}