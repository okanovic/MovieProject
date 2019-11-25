import { Component, OnInit, Inject } from '@angular/core';
import { MovieListService } from 'src/app/Services/movies-list.service';
import { ActivatedRoute } from '@angular/router';
import { IMovie, ISession } from 'src/app/Models';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styles: [`
  a{cursor:pointer};
  `]
})
export class MovieDetailComponent implements OnInit {
  movies: IMovie;
  addMode: boolean = false;
  filterBy:string = 'all'
  sortBy:string = 'votes'
  constructor(@Inject(MovieListService) private MoviesService: MovieListService, @Inject(ActivatedRoute) private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.movies = this.MoviesService.getMovieId(+this.route.snapshot.params['id']) //id'ye göre geçiş yapılıyor. movies/1 diyince id'si 1 olan filme gidiyor
  }
  addSession() {
    this.addMode = true;
  }
  saveNewMovieOtherDetail(session: ISession) {
    const nextId = Math.max.apply(null, this.movies.sessions.map(s => s.id))
    session.id = nextId + 1;
    this.movies.sessions.push(session)
    this.MoviesService.updateMovie(this.movies)
    this.addMode = false;
  }
  cancelMovieOtherDetail(){
    this.addMode = false
  }

}
