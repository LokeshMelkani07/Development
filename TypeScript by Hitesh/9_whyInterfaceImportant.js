// Say we want to implement above interface in one of our class then we can do it like
// if we are implementing this interface in our class, we need to have these properties
// interface never tells us, what or how to do things, it just gives us a template to follow
var Instagram = /** @class */ (function () {
    function Instagram(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    return Instagram;
}());
var Youtube = /** @class */ (function () {
    // we can add one more property in our Youtube class which is short
    // it does not give any error but we need to include cameraMode, filter, burst. if we want to implement TakePhoto interface in class Youtube
    function Youtube(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    // if we want to implement interface Story we need to include createStory() with same name so code is consistent
    Youtube.prototype.createStory = function () {
        console.log("Story created");
    };
    return Youtube;
}());
