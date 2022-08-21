//Q.No:3
class Person{
    constructor(firstName,lastname,age,place,course){
        this.firstName =firstName;
        this.lastname=lastname
        this.age = age;
        this.place=place;
        this.course = course;
    }
    getAllNames(){
        return(`${this.firstName} ${this.lastname}`);
    }
    getPersonDetails(){
      
        return(`Name : ${this.firstName} ${this.lastname}, Age: ${this.age}, Place: ${this.place}, Course: ${this.course}`);
}
}   
    person1  = new Person("keerthi","Vasan",10,"chennai","BCA");
    person2  = new Person("Kalanjiya","Raj",25,"TCM","BCA");
    person3  = new Person("kanna","kr",22,"RMD","MCA");
    person4  = new Person("karthi","Kumar",26,"RMD","MBA");

   console.log(person1.getPersonDetails());  //Name : keerthi Vasan, Age: 10, Place: chennai, Qualification: BCA

console.log(person1.getAllNames());  //keerthi Vasan
console.log(person2.getAllNames());  //Kalanjiya Raj
console.log(person3.getAllNames());  //kanna kr
console.log(person4.getAllNames());  //karthi Kumar
