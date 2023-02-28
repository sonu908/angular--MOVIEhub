import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../api/apiservice.service';

@Component({
  selector: 'app-must-watch',
  templateUrl: './must-watch.component.html',
  styleUrls: ['./must-watch.component.css']
})
export class MustWatchComponent implements OnInit {

  // image_prefix = 'https://image.tmdb.org/t/p/original/'

  // top_rated:any=[]

  constructor(public apiservice: ApiserviceService){

  }
  ngOnInit(): void {

    // this.toprated()
  }

  // toprated(){
  //   this.apiservice.toprated().subscribe((result:any)=>{
  //     this.top_rated=result.results
  //     console.log(this.top_rated);

  //   })
  // }


}
