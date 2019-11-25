import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { ToastrMethodService } from '../Services/toaster-methods.service';
import { IMovie } from '../Models';

@Component({
  selector: 'movie-thumbnail',
  templateUrl: './movie-thumbnail.component.html',
  styles:[`
    .card{
      margin-top:5px
    }
    span {
      font-weight:600;
      color:#c0392b;
    }
    .normal{color:#c0392b}
    .good{color:#3498db}
    .better{color:#27ae60}
  `]
})
export class MovieThumbnailComponent implements OnInit {
 @Input() movies:IMovie; 
 @Output() movieDetailEvent = new EventEmitter();
 @Output() movieDetailEvent2 = new EventEmitter();
 someValue:any = "This movie is perfect"
  constructor(@Inject(ToastrMethodService) private toastr:ToastrMethodService) { }

  ngOnInit() {
  }
  movieDetailName(){
    this.movieDetailEvent.emit(this.movies.MovieName)
  }
 
}
