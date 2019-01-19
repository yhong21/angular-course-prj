import { Ingredient } from "../shared/ingredient.model";

export class Recipe{
    name: string;
    description: string;
    imagePath: string;
    ingredients: Ingredient[]

    constructor(name:string, desc: string, imgpath: string){
        this.name = name;
        this.description = desc;
        this.imagePath = imgpath;
    }
}