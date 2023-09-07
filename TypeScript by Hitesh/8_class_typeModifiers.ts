class User {
  email: string;
  private name: string;
  // In JS also there is private access modifier which has syntax
  //   #name: string;
  // everything is public bydefault
  private readonly city: string = "Delhi";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
    // this.city = city is valid
  }
}

const lokesh = new User("lokesh.com", "lokesh");
// lokesh.city = "jaipur" gives error as its readonly, we can access it but cannot modify it but if we want to restict its access outside class we can use private type modifier

// Below code does same job as above but it is less clumsy
class User1 {
  // private can only be accessed within class
  private _courseCount = 1;
  // protected can be accessed within same class and  by inherited class also
  protected _myAge = 18;
  readonly city: string = "Delhi";
  constructor(
    public email: string,
    public name: string,
    private userId: number
  ) {}
  // Like Private Properties, we can also have private methods
  private deleteToken() {
    console.log("Token Deleted");
  }

  // To set or get private value we can make getters and setters inside class so that outsiders can also access private values
  // This is a getter
  // This is not necessary that everytime there is getter, there should be a setter also. it may happen that we just need to get the value and do not want anyone to set the value or vice-versa
  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  // This is a setter for courseCount
  get getCourseCount(): number {
    return this._courseCount;
  }

  // This is a setter for course counter
  // Setter can never have a return type mentioned in TS so we can't do
  // set courseCount(courseNum): number{}
  // in below code
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

// Inheritence in classes
class subUser extends User1 {
  // subUser cannot inherit properties from User1 which are private
  // private can only be accessed within the class
  isFamily: boolean = true;
  // Manipulating _myAge of class User1
  // To be able to be used in inherit class, we need to make access specifier of _myAge as "protected"
  changeCourseCount() {
    this._myAge = 20;
  }
}

// User1.deleteToken() gives error as that method is private and is only accessible inside class
export {};
