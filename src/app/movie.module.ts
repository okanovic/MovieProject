import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MovieThumbnailComponent, MoviesListComponent, MovieDetailComponent, CreateMovieComponent } from './Movies'
import { MovieListService, ToastrMethodService, MovieRouteActivator, MovieListResolverService, AuthService } from './Services'
import { MovieAppComponent } from './movie-app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { movieRoutes } from './Routes';
import { ErrorComponent } from './Errors/404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './Movies/movie-detail/create-other-movie-detail.component';
import { SessionListComponent } from './Movies/movie-detail/session-list.component';
import { SessionCardComponent } from './Common/session-card.component';
import { DurationPipe } from './Shared/duration.pipe';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  //Component's, directive's and pipes declearing to Declerations 
  declarations: [ 
    MovieAppComponent,
    MovieThumbnailComponent,
    NavbarComponent,
    MoviesListComponent,
    MovieDetailComponent,
    CreateMovieComponent,
    ErrorComponent,
    CreateSessionComponent,
    SessionListComponent,
    SessionCardComponent,
    DurationPipe
  ],
  //Modüller eklenir
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(movieRoutes),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }) // ToastrModule added


  ],
  //Servisler providers kısmına tanımlanır
  providers: [
    MovieListService,
    ToastrMethodService,
    MovieRouteActivator,
    MovieListResolverService,
    {
      provide: 'deactivateCreateMovie',
      useValue: checkDirtyState
    },
    AuthService
  ],
  bootstrap: [MovieAppComponent] //Benim ilk yüklenecek olan component'im.
})
export class MovieModule { }

export function checkDirtyState(component: CreateMovieComponent) {
  if (component.isDirty)
    return window.confirm('Are you sure about this ;)')
  return true

}
