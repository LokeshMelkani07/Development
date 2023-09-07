class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}
}

// it cannot implement it, it can inherit it as TakePhoto is not a interface
class Instagram extends TakePhoto {}

// Making new object out of class TakePhoto
const lokesh = new TakePhoto("Test", "Test");

// if we make it abstract, we cannot make object out of it but we can inherit it
// abstract class gives just the blue-print, we cannot create object out of it.
// It tells class inheirting it to make use of blue-print and perform actions
abstract class TakePhoto1 {
  constructor(public cameraMode: string, public filter: string) {}

  // we can make methods in interface, let see for abstract class
  // Now this abstract class says, i will just give blue-print of method getPhoto() which returns void
  // Am not going to implement it. but if anyone want to inherit me, they need to have this getPhoto() in them and implement it there way by following my conditions of returning void
  abstract getPhoto(): void;
  // Say we want to add this new method, we can do it here whereas it was not possible in interface
  getReelTime(): number {
    // some calculations
    return 8;
  }
}

// const lokesh1 = new TakePhoto1("Test", "Test"); gives error "Cannot create instance of an abstract class"

class Youtube extends TakePhoto1 {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }
  getPhoto(): void {
    console.log("Got photos");
  }

  // these methods can be over-written by these classes also
  getReelTime(): number {
    return 10;
  }
}

const loki = new Youtube("test", "test", 3); // is correct

export {};
