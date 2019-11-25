export interface IMovie {
    id: number,
    MovieName: string,
    MovieImage: string,
    MovieBudget: string,
    MovieTicketOffice: string,
    MovieReleaseDate: Date,
    MovieDirector: string,
    MovieDefinition: string,
    IMDBScore: string,
    sessions?:ISession[]
}
export interface ISession {
    id:number,
    name:string,
    presenter:string,
    duration:number,
    level:string,
    abstract:string,
    votes:number
}