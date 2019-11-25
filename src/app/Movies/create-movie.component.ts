import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MovieListService, ToastrMethodService } from '../Services';

@Component({
  selector: 'create-movie',
  templateUrl: './create-movie.component.html',
  styles: [`
  button {margin:4px;}
  em {float:right; color:#E05C65}
  `]
})
export class CreateMovieComponent implements OnInit {
  movie;
  newMovie;
  isDirty: boolean = true;
  constructor(@Inject(Router) private router: Router, @Inject(MovieListService) private movieService: MovieListService, @Inject(ToastrMethodService) private toastr: ToastrMethodService) { }

  ngOnInit() {
    this.movie = {
      id: 6,
      MovieName: "Hızlı Ve Öfkeli",
      MovieImage: "assets/images/hizli-ve-ofkeli.jpg",
      MovieBudget: "260 Million $",
      MovieTicketOffice: "450,6 Million $",
      MovieReleaseDate: new Date("02 October 2011"),
      MovieDirector: " Rob Cohen",
      MovieDefinition: "Former cop Brian O'Conner is called upon to bust a dangerous criminal and he recruits the help of a former childhood friend and street racer who has a chance to redeem himself",
      IMDBScore: "8"
    }
  }

  cancel() {
    this.router.navigate(['/movies']) //Cancel fonksiyonu tetiklendiğinde MovieListComponent sayfasına gidecek 
  }
  saveMovie(creteNewMovieValues) {
    console.log(creteNewMovieValues)
    this.movieService.saveMovie(creteNewMovieValues)
    this.isDirty = false;
    this.router.navigate(['/movies'])
    this.toastr.showSuccess(`${creteNewMovieValues.MovieName} successfully added`)
  }
}
