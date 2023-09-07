// interface is like a loosely-typed class
// it gives a blueprint but does not tell us what to do

interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  goggleId?: string;
  // startTrial tells its a method of type string
  startTrial: () => string;
  // below syntax is also correct and works same
  stTrial(): string;
  // Below function takes string as argument and returns a number
  getCoupon(couponName: string, value: number): number;
}

// Let say we want to add one more property in the interface so we can do it this way
// This is called re-opening of interface i.e adding new properties in interface
interface User {
  githubToken: string;
}

// We can also do inheritence using interface
// we can do use comma in "interface Admin extends User, Another" to add another interface for inheritence
// So we can do update in interface whereas in Type Aliasing we cannot update a property, it gives us error
// In interface we can do inheritence whereas in Type Aliasing we need to use "&" and give any extra property if we want to give
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

// So User is an interface, now id we make use it we need to define everything scrictly in the order our User tells us to
const lokesh: User = {
  dbId: 12,
  email: "lokesh.com",
  userId: 2256,
  //   startTrial = 4 gives error as its a method
  startTrial: () => {
    return "Trial Started";
  },
  stTrial() {
    return "Yes";
  },
  // we do not necessarily need to use couponName and value we can use any name
  getCoupon: (name: "loki", off: 30) => {
    return 10;
  },
  githubToken: "loki234",
};

lokesh.email = "loki.com";
// lokesh.dbId = 56 gives error as its readonly

// now we can use properties of User in Admin with an additional property of role
const lokiAdmin: Admin = {
  dbId: 12,
  role: "learner",
  email: "lokesh.com",
  userId: 2256,
  //   startTrial = 4 gives error as its a method
  startTrial: () => {
    return "Trial Started";
  },
  stTrial() {
    return "Yes";
  },
  // we do not necessarily need to use couponName and value we can use any name
  getCoupon: (name: "loki", off: 30) => {
    return 10;
  },
  githubToken: "loki234",
};

export {};
