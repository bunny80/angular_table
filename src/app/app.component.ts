import { Component ,OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { style } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'table';
  li:any;
  lis=[];
  totalpage:any;
  page:number = 1;

  constructor(private http : HttpClient,private route: ActivatedRoute){
     
}

 
  ngOnInit(): void {
    this.http.get('https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/posts')
    .subscribe((Response) => {
 
      // If response comes hideloader() function is called
      // to hide that loader
      // if(Response){ 
      //   hideloader();
      // }
      console.log(Response)
      this.li=Response;
      this.lis=this.li.list;
      this.totalpage=this.li.length;
      
   
    });
    // function hideloader(){
    //   document.getElementById('loading');
    // }
  }
}
