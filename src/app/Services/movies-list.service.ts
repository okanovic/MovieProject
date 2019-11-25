import { Injectable, Inject, EventEmitter } from '@angular/core';
import { IMovie, ISession } from '../Models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MovieListService {
  movies: any;
  constructor(@Inject(HttpClient) private http: HttpClient) { }

  getMovieList() {
    return MovieList
  }

  /*   private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error)
        return of(result as T)
      }
    } */

  getMovieId(id: number): IMovie {
    return MovieList.find(movie => movie.id === id)
  }
  saveMovie(movie) {
    movie.id = 6;
    MovieList.push(movie)
    console.log('movie', movie)
  }
  updateMovie(movie) {
    let index = MovieList.findIndex(x => x.id = movie.id)
    MovieList[index] = movie;
  }
}

let MovieList: IMovie[] =
  [
    {
      id: 1,
      MovieName: "Captain America",
      MovieImage: "assets/images/captain-america.jpg",
      MovieBudget: "140 Million",
      MovieTicketOffice: "370,6 Million",
      MovieReleaseDate: new Date("02 September 2011"),
      MovieDirector: "Joe Jonston",
      MovieDefinition: "Recipient of the Super-Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world’s mightiest heroes and the leader of the Avengers.",
      IMDBScore: "9",
      sessions: [
        {
          id: 1,
          name: "Mr Captain America Gala",
          presenter: "Okan TOPER",
          duration: 3,
          level: "Intermediate",
          abstract: "Enjoy the movie",
          votes: 4
        },
        {
          id: 2,
          name: "Captain America Gala 2",
          presenter: "Okan TOPER 2",
          duration: 4,
          level: "Beginner",
          abstract: "Enjoy the movie 2",
          votes: 7
        }
      ]
    },
    {
      id: 2,
      MovieName: "Esaretin Bedeli",
      MovieImage: "assets/images/esaretin-bedeli.jpg",
      MovieBudget: "140 Million  ",
      MovieTicketOffice: "370,6 Million ",
      MovieReleaseDate: new Date("02 September 2011"),
      MovieDirector: "Joe Jonston",
      MovieDefinition: "Recipient of the Super-Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world’s mightiest heroes and the leader of the Avengers.",
      IMDBScore: "9",
      sessions: [
        {
          id: 1,
          name: "Captain America Gala",
          presenter: "Okan TOPER",
          duration: 3,
          level: "Intermediate",
          abstract: "Enjoy the movie",
          votes: 4

        }
      ]
    },
    {
      id: 3,
      MovieName: "Green Mile",
      MovieImage: "assets/images/green-mile.jpg",
      MovieBudget: "140 Million  ",
      MovieTicketOffice: "370,6 Million",
      MovieReleaseDate: new Date("02 September 2011"),
      MovieDirector: "Joe Jonston",
      MovieDefinition: "Recipient of the Super-Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world’s mightiest heroes and the leader of the Avengers.",
      IMDBScore: "9",
      sessions: [
        {
          id: 1,
          name: "Captain America Gala",
          presenter: "Okan TOPER",
          duration: 3,
          level: "Intermediate",
          abstract: "Enjoy the movie",
          votes: 9
        }
      ]
    },
    {
      id: 4,
      MovieName: "Inception",
      MovieImage: "assets/images/inception.jpg",
      MovieBudget: "140 Million  ",
      MovieTicketOffice: "370,6 Million  ",
      MovieReleaseDate: new Date("02 September 2011"),
      MovieDirector: "Joe Jonston",
      MovieDefinition: "Recipient of the Super-Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world’s mightiest heroes and the leader of the Avengers.",
      IMDBScore: "8",
      sessions: [
        {
          id: 1,
          name: "Captain America Gala",
          presenter: "Okan TOPER",
          duration: 3,
          level: "Intermediate",
          abstract: "Enjoy the movie",
          votes: 4
        }
      ]
    },
    {
      id: 5,
      MovieName: "Mr. And Mrs. Smith",
      MovieImage: "assets/images/mr-and-mrs-smith.jpg",
      MovieBudget: "140 Million  ",
      MovieTicketOffice: "370,6 Million  ",
      MovieReleaseDate: new Date("02 September 2011"),
      MovieDirector: "Joe Jonston",
      MovieDefinition: "Recipient of the Super-Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world’s mightiest heroes and the leader of the Avengers.",
      IMDBScore: "6.5",
      sessions: [
        {
          id: 1,
          name: "Captain America Gala",
          presenter: "Okan TOPER",
          duration: 3,
          level: "Intermediate",
          abstract: "Enjoy the movie",
          votes: 2
        }
      ]
    },
  ]
