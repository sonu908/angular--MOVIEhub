import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../api/apiservice.service';

@Component({
  selector: 'app-featured-movie',
  templateUrl: './featured-movie.component.html',
  styleUrls: ['./featured-movie.component.css']
})
export class FeaturedMovieComponent implements OnInit {

  image_prefix = 'https://image.tmdb.org/t/p/original/'
  movie_banner: any=[]

  constructor(private api: ApiserviceService) {

  }
  ngOnInit(): void {
    this.banner()

  }


  banner() {
    this.api.banner().subscribe((data: any) => {
      this.movie_banner = data

    })
  }

}
