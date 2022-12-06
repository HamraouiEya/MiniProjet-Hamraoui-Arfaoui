import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private http: HttpClient) { }
  title = 'api-angular';
  
  ngOnInit(): void {
    let headers = new HttpHeaders({
      'x-rapidapi-host': 'investors-exchange-iex-trading.p.rapidapi.com',
      'x-rapidapi-key': 'e63edd882bmsh5708ef1cf490050p1ff0d7jsn353da79690b8'
    });
       this.http.get<any>('https://investors-exchange-iex-trading.p.rapidapi.com/stock/GOOG/short-interest', {
        headers: headers
      })
      .subscribe(data => {
        console.log(data);
      });
  }
 
}
