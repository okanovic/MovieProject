import { Injectable, Inject } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { MovieListService } from './movies-list.service';

@Injectable()
export class MovieRouteActivator implements CanActivate {

    constructor(@Inject(MovieListService) private movieService:MovieListService, @Inject(Router) private router:Router) { }
/* canActivate metod begining */
    canActivate(route:ActivatedRouteSnapshot){
        const movieExists = !!this.movieService.getMovieId(+route.params['id'])
        if(!movieExists)
            this.router.navigate(['/404'])
        return movieExists;
    }
/* canActivate metod end */
}