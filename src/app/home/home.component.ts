import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../api/apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  top_rated:any=[]
  pagenation:any=[]
  movie_weekly: any = []
  p: number = 1;

  image_prefix = 'https://image.tmdb.org/t/p/original/'

  constructor(private apiservice: ApiserviceService) {

  }

  ngOnInit(): void {

    this.apidata()
    this.toprated()
    this.page()


  }


  apidata() {
    this.apiservice.apidata().subscribe((data: any) => {

      this.movie_weekly = data.results



    })
  }

  toprated(){
    this.apiservice.toprated().subscribe((result:any)=>{
      this.top_rated=result.results
      console.log(this.top_rated);

    })
  }

  page(){
    this.apiservice.getallmoviespg().subscribe((data:any)=>{
      this.pagenation = data.results
    })
  }


}




