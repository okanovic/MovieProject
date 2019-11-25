import { Component, OnInit, Inject } from '@angular/core';
import { MovieListService } from '../Services/movies-list.service';
import { ToastrService } from 'ngx-toastr';
import { IMovie } from '../Models';

@Component({
  selector: 'movies-list',
  templateUrl: 'movies-list.component.html'
})
export class MoviesListComponent implements OnInit {
  moviesList: IMovie[];
  constructor(@Inject(MovieListService) private MoviesService: MovieListService, @Inject(ToastrService) private toastr: ToastrService) {

  }

  ngOnInit() {
    this.moviesList = this.MoviesService.getMovieList()
  }




  movieDetailName(movieName) {
    console.log("Movie Name: ", movieName);
    if (movieName == "Captain America") {
      this.toastr.success(`This Movie Name ${movieName}`)
    }
    else if (movieName == "Esaretin Bedeli") {
      this.toastr.info(`This Movie Name ${movieName}`)
    }
    else if (movieName == "Green Mile") {
      this.toastr.warning(`This Movie Name ${movieName}`)
    }
    else if (movieName == "Inception") {
      this.toastr.error(`This Movie Name ${movieName}`)
    }
    else {
      this.toastr.success(`It sould be any beautiful movie ${movieName}`)
    }

  }

}
