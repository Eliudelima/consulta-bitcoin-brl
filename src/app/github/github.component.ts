import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


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
export class GithubComponent implements OnInit {
  currentData: Response;
  topName: String;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getRepo("");
  }
  getRepo(user) {

    if (user==="EliudeLima") {
      this.topName = "Eliude";
    } 

    this.http.get<Response>('https://api.github.com/users/'+user+'/repos')
    .subscribe(data => {
      this.currentData = data;
    });
  }
  
  describe () => {
  let component: GithubComponent;
  let fixture: ComponentFixture<GithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}



