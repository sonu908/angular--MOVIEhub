import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../api/apiservice.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  image_prefix = 'https://image.tmdb.org/t/p/w500'
  upcommingmovie: any = []
  public showDiv: boolean = false;
  Anime: any
  romantic_movies: any
  fantasymovies:any
  warmovies:any
  constructor(public api: ApiserviceService) {

  }
  ngOnInit(): void {

    this.upcomming()
    this.horror()
    this.rom()
    this.fantasy()
this.war()
  }


  upcomming() {
    this.api.getupcomming().subscribe((result: any) => {
      this.upcommingmovie = result.results
      // console.log(this.upcommingmovie);

    })
  }

  horror() {
    this.api.horror().subscribe((result: any) => {
      this.Anime = result.results
      // console.log(this.jk,'sdgfh');
    })
  }
  rom() {
    this.api.romance().subscribe((result: any) => {
      this.romantic_movies = result.results
    })
  }

  fantasy(){
    this.api.fantasy().subscribe((data:any)=>{
      this.fantasymovies=data.results
    })
  }

war(){
  this.api.war().subscribe((data:any)=>{
this.warmovies=data.results
  })
}

}
