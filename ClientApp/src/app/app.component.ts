import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {
    http.get('/api/result').subscribe((p: string[]) => this.values = p);
  }
  title = 'app';
  searchValue: any;
  values: string[] = [];
  searchValues: string[] = [];
  search(event: KeyboardEvent) {
    setTimeout(() => {

      if (!this.searchValue) {
        this.searchValues = [];
        return;
      }
      if (event.keyCode != 13) {


        let searchvalues = this.searchValue.split(' ');
        let values = [...this.values];
        let result: string[] = [];
        console.log("search", result);

        searchvalues.forEach(element => {
          if (element.trim()) {

            var searched = values.filter(p => p.match(element.trim()));
            console.log(searched);
            searched.forEach(s => {
              if (result.indexOf(s) < 0) result.push(s);
            });
          }

        });
        console.log("search", result);
        this.searchValues = result;
      }
      else {
        console.log("add", this.searchValue);
        this.http.put("/api/result/" + this.searchValue, null).subscribe();
        this.values.push(this.searchValue);
        this.searchValues = [this.searchValue];
        this.searchValue = "";
        console.log("added", this.values);

      }
    }, 100);
  }
}
