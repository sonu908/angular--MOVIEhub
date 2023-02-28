import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../api/apiservice.service';


@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  image_prefix = 'https://image.tmdb.org/t/p/original/'

  relatedmovies:any=[]
  movieresult: any = []
  crewdetails: any = []
  constructor(public api: ApiserviceService, public router: ActivatedRoute) {

  }


  ngOnInit(): void {

    let id = this.router.snapshot.paramMap.get('id')
    this.getmovie(id)
    this.viewcrew(id)
    this.likethese(id)
  }

  getmovie(id: any) {


    //view details

    this.api.viewdetails(id)
      .subscribe((response: any) => {


        this.movieresult = response

        console.log(this.movieresult);


      })


  }
  viewcrew(id: any) {
    this.api.getcrew(id).subscribe((result: any) => {

      this.crewdetails = result.cast
      console.log(this.crewdetails);


    })}

likethese(data:any){
  this.api.similiarmovies(data).subscribe((result:any)=>{
    this.relatedmovies=result.results
    console.log(this.relatedmovies,);

  })
}


}
