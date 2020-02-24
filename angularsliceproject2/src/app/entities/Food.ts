export class Food{
    foodID: number;
    foodType: string;
    name: string;
    description: string;
    price: number;
    calories: number;
    url: string;

    constructor(id:number, foodType:string, name:string, description:string,
        price:number, calories:number, url:string){
            this.foodID = id;
            this.foodType = foodType;
            this.name = name;
            this.description = description;
            this.price = price;
            this.calories = calories;
            this.url = url;
        }

}