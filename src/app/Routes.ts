import { Routes } from '@angular/router'
import { MoviesListComponent } from './Movies/movies-list.component';
import { MovieDetailComponent } from './Movies/movie-detail/movie-detail.component';
import { CreateMovieComponent } from './Movies/create-movie.component';
import { ErrorComponent } from './Errors/404.component';
import { MovieRouteActivator } from './Services/movie-route-activator.service';
import { MovieListResolverService } from './Services/movie-list-resolver.service';
import { CreateSessionComponent } from './Movies';

export const movieRoutes: Routes = [
    { path: 'movies/new', component: CreateMovieComponent, canDeactivate: ['deactivateCreateMovie'] },
    { path: 'movies', component: MoviesListComponent, resolve: { movies: MovieListResolverService } }, // movie list component'e gidecek
    { path: 'movies/:id', component: MovieDetailComponent, canActivate: [MovieRouteActivator] }, //burada id alanı dinamik değişeceği için path'i bu şekilde tanımladık
    { path: 'movies/:id/session', component: CreateSessionComponent },
    { path: '404', component: ErrorComponent },
    { path: '', pathMatch: 'full', redirectTo: '/movies' }, // eğer yol boş işe direkt movies component'ine gidecek
    { path: 'user', loadChildren: './User/user.module#UserModule' } //lazy loading
]

/* Router'lerın sıralaması öenmlidir URL'lerin birbirine karşımaması için sıralamaya dikkat etmek gerekiy */
/* canActivate diyelimki id'ye göre sayfalara gidiyoruz toplamda 5 adet gidebileceğimiz sayfa var id'ye 5'den farklı bir sayı yazarsak bizi 404 sayfasına yönlendiriyor */