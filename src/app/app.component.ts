import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fattura2';
  objectList:any = [];
  price = 0;
  object = {
    name:'',
    quantity:'',
    price:''
  }

  ivaPrice=0;


  language='IT';
  selectLang(lang:string) {
    this.language = lang;
  }

  showPrice = false;

  add() {
    this.objectList.push({name:this.object.name, quantity:this.object.quantity, price:this.object.price})
    this.object = {
      name:'',
      quantity:'',
      price:''
    }
  }

  sum() {
    this.showPrice = true;
    for(let elem of this.objectList) {
      this.price += elem.quantity * elem.price;
    }
    let iva = this.getIva()
    this.ivaPrice = this.price + (this.price * iva)

  }

  getIva() {
    switch(this.language) {
      case 'IT' :
        return 0.22
      case 'UK':
        return 0.11
      case 'CZ':
        return 0.33
      default:
        return 1
    }
  }

  delete(i:number) {
    this.objectList.splice(i,1);
  }

}