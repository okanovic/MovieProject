import { Injectable, Inject } from '@angular/core';
import { Resolve } from '@angular/router';
import { MovieListService } from './movies-list.service';
import { map } from 'rxjs/operators'
import { IMovie } from '../Models';

@Injectable()
export class MovieListResolverService implements Resolve<IMovie[]> {

    constructor( @Inject(MovieListService) private MoviesService: MovieListService) { }
    resolve() {
        return this.MoviesService.getMovieList()
    }
}
