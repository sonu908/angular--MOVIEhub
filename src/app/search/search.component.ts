import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApiserviceService } from '../api/apiservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  image_prefix = 'https://image.tmdb.org/t/p/w500'

  constructor(private apiService: ApiserviceService , public router:RouterModule) {

  }

  ngOnInit(): void {

  }

  movie_search_result: any

  searchform = new FormGroup({
    'moviename': new FormControl(null)

  })


  submitform() {
    console.log(this.searchform.value);
    this.apiService.searchmovie(this.searchform.value).subscribe
      ((result: any) => {
        this.movie_search_result = result.results
        console.log(this.movie_search_result);

      })

  }



}
