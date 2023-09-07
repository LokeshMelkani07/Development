// Why Interface are important?
// interface gives us a blue-print to implement a thing certain way.
// Below is an very small example of how interface can use in practical app building
// In application development, we use protocols, which are same as interface
interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createStory(): void;
}

// Say we want to implement above interface in one of our class then we can do it like
// if we are implementing this interface in our class, we need to have these properties
// interface never tells us, what or how to do things, it just gives us a template to follow
class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

class Youtube implements TakePhoto, Story {
  // we can add one more property in our Youtube class which is short
  // it does not give any error but we need to include cameraMode, filter, burst. if we want to implement TakePhoto interface in class Youtube
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string
  ) {}

  // if we want to implement interface Story we need to include createStory() with same name so code is consistent
  createStory(): void {
    console.log("Story created");
  }
}

export {};
