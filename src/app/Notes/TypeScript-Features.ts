export class TypeScriptFeatures {
    //Static Typing

    /* 
    name:string;
    surname:string;
    date:Date;
     */

    /* ---------------------------- */
    //Interfaces
    /* 
    interface ICat {
       name:string;
       age:number 
    } 
   
    let fluffy:ICat
   
    fluffy = {
        name:"Miyav"
    } //Error verir
    
    */

    /* --------------------------- */
    //Class Properties
    /* 
    class Cat {
        name;
        color;
        constructor (name){
            this.name = name
        }
    }
     */

    /* -------------------------- */
    //Public/Private Accesibility
    /* 
    //Public Accessibility
    class Cat {
            name;
            speak() {console.log('My name is:' + this.name)}
        }

        let fluffy = new Cat()
        console.log(fluffy.name);
        fluffy.speak()

        //Private Accessibility

        class Cat {
          private name;
          private speak() {console.log('My name is:' + this.name)}
        }

        let fluffy = new Cat() 
        console.log(fluffy.name); //compile-time error
        fluffy.speak() //compile-time error

    */

}
