import { Component } from '@angular/core';
import { mytext } from './fylesystemmodule';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  objectKeys = Object.keys;
  cryptos: any;
  title = 'Tekus-technical-test';

  constructor(private _data: DataService) {

  }

  ngOnInit() {
    this._data.getPrices()
      .subscribe(res => {
        this.cryptos = res;
        //console.log(res);
      });
  }
  
  itsadate: number = Date.now();

  mydata = [
    {   
        "date": "Batman v. Superman",
        "opening": "Batman v. Superman",
        "closing": "Zack Snider",
        
    },
    {
      "date": "Batman v. Superman",
      "opening": "Batman v. Superman",
      "closing": "Zack Snider",
    },
    {
      "date": "Batman v. Superman",
      "opening": "Batman v. Superman",
      "closing": "Zack Snider",
    }];
}

