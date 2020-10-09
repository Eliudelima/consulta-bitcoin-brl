import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Response {
  name:String,
  full_name:String,
  stargazers_count: Number,
  description: String,
}

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})

export class GitComponent implements OnInit {

  currentData: Response;
  topName: String;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getRepo(" ");
  }



  getRepo(user) {

  
    this.http.get<Response>('https://api.github.com/users/'Eliudelima'/repos')
    .subscribe(data => {
      this.currentData = data;
    
  }

}
