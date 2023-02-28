import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeaturedMovieComponent } from './featured-movie/featured-movie.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { MustWatchComponent } from './must-watch/must-watch.component';
import { SlideComponent } from './slide/slide.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginatePipe } from './paginate.pipe';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FeaturedMovieComponent,
    ViewDetailsComponent,
    MustWatchComponent,
    SlideComponent,
    SearchComponent,
    PaginatePipe,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
