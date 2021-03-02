import { Component } from '@angular/core';
// import own classes
import { Product } from '../model/product';
//import own interface
import { ProductAttribute } from '../model/productAttribute';


const subtitleContent = "Überblick über Angular";
const saveButtonTitle = "Abspeichern";
// wrong assignment
//saveButtonTitle = "huhu";

// object constant
const user = {name: "Herbert", email: "herbert@irgendwas.de"};
user.name = "Franz";

// array constant
const list = [1,2,3];
list.push(4);
list.shift();

// mixed typed arrays
const mixedList = [
  0,
  "Hallo",
  {name: "Hugo", email: "hugo@irgendwas.de"}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // variablen, properties
  title = 'Welcome to my Angular';
  // string variable
  subtitle:string = subtitleContent;
  // number variable
  version:number = 1.1
  // boolesche variablen
  isCurrentVersion:boolean = true
  // any variable
  value:any;
  // object variable assigned from constants
  user = user;
  // mixed array assignment
  mixedList = mixedList;
  // class (object instance) variable
//  employee : Employee = new Employee("Herbert", "Peter");

  // constructor"
  product : Product = new Product("P2", "Käsemesser");

  text:string;
  constructor(){
    console.log("Aktuelle Version:", this.isCurrentVersion);

    this.value = 2;
    console.log("ANY:", this.value);

    // array constant
    console.log(list);

    const p1 = new Product("P1", "Käsemesser");
    console.log(p1);
    console.log(this.product);

    const productAttribute : ProductAttribute = { id: "pa1", name: "Weight", description: "Gewicht in Kg"};
    console.log(productAttribute.name);

    // template string
   this.text = `Das Produkt ist ein: ${p1.productName} und wiegt: ${productAttribute.name}`;
    console.log(this.text);


    // console.log(this.employee);
    // this.employee.logout();
    // console.log("GETTER: ", this.employee.fullname);
    //
    // this.employee.fullname = "Franz";
    // console.log("GETTER: ", this.employee.fullname);

  }
  // methoden
}
/**
class Employee{
  private name:string;
  firstname:string;

  constructor(name:string, firstname:string){
    this.name = name;
    this.firstname = firstname;
  }

  get fullname(): string {
    return this.firstname + " " + this.name;
  }

  set fullname(name: string){
    this.name = name;
  }

  getFullname(){
      return this.firstname + " " + this.name;
  }

 logout() : void{
   alert("Abgemeldet...");
 }
}
**/
