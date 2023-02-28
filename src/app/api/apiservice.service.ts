import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(public http: HttpClient) { }

  apidata(): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/trending/all/week?api_key=08cc33bd5ae3a747598ce2ad84376e66`);
  }

  banner(): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/242582?api_key=851c68b5a89a176166c1e66b439dfb26`)
  }

  viewdetails(id: any) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=08cc33bd5ae3a747598ce2ad84376e66`)
  }

  toprated() {
    return this.http.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=08cc33bd5ae3a747598ce2ad84376e66&language=en-US&language=en-US&page=1`)
  }
  searchmovie(name: any) {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=08cc33bd5ae3a747598ce2ad84376e66&language=en-US&page=1&include_adult=false&query=${name.moviename}`)
  }

  getcrew(id: any) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=08cc33bd5ae3a747598ce2ad84376e66&language=en-US`)
  }

  getupcomming(){
    return this.http.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=851c68b5a89a176166c1e66b439dfb26&language=en-US&page=1`)
  }
  actordetails(data:any){
    return this.http.get(`https://api.themoviedb.org/3/person/${data}?api_key=08cc33bd5ae3a747598ce2ad84376e66&language=en-US`)
  }

  getallmoviespg()
  {
    return this.http.get(`https://api.themoviedb.org/3/trending/all/week?api_key=08cc33bd5ae3a747598ce2ad84376e66`)
  }


//   gen_action() {
//     return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=08cc33bd5ae3a747598ce2ad84376e66&language=en-US&with_genres=Action`)
//   }
//   gen_adv() {
//     return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=08cc33bd5ae3a747598ce2ad84376e66&language=en-US&with_genres=Adventure`)
//   }
//   gen_anim() {
//     return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=08cc33bd5ae3a747598ce2ad84376e66&language=en-US&with_genres=Anime`)
//   }
//   gen_com() {
//     return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=08cc33bd5ae3a747598ce2ad84376e66&language=en-US&with_genres=Comedy`)
//   }
  fantasy() {
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=08cc33bd5ae3a747598ce2ad84376e66&language=en-US&with_genres=14`)
  }
  romance() {
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=08cc33bd5ae3a747598ce2ad84376e66&language=en-US&with_genres=10749`)
  }
   horror() {
     return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=08cc33bd5ae3a747598ce2ad84376e66&language=en-US&with_genres=27`)
   }

similiarmovies(data:any){
  return this.http.get(`https://api.themoviedb.org/3/movie/${data}/similar?api_key=08cc33bd5ae3a747598ce2ad84376e66&language=en-US&page=1`)
}

war() {
  return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=08cc33bd5ae3a747598ce2ad84376e66&language=en-US&with_genres=10752`)
}

}
