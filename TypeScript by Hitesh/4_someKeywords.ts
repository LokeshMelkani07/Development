type User = {
  // if we want that _id should not be changed by anybody we can make it readonly
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  // if we have some detail which is optional to pass means hai toh dedo vrna koini then we use "?"
  creditCardDetails?: number;
};

let myUser: User = {
  _id: "1234",
  name: "Virat",
  email: "virat@gmail.com",
  isActive: true,
};

myUser.email = "lokesh.com";
// myUser._id = "456" gives error as _id is readonly

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

// Now we will use previous 2 types in a new type with an additional object of cvv
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

export {};
