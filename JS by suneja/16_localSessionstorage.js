// Local and Session Storage
// This is a storage web API in js used to store data. Its just key-value pairs
// Session Storage : Data is persisted for only that session. the data is there till the time user is there in the browser. once the browser window closed the session storage also vanishes.It has larger memory hokding capacity
// Local Stoage :  same as session but it does not clear itself. more storage capacity than session. Local storage does not clear if we close browser window or turn off the pc. Companies uses local storage to store some information about their user like their history,searches,orders,likes,dislikes  etc etc
// When any company sets any data for local storage then they do it for a particular origin means protocol: http,https and port:8800,8801 etc and  host/domain:flipkart.com,paytm.com. if our origin is same then only we can access that local storage
// Go to dev tools and application section -> storage -> local storage
// localstorage is stored in window object as window object is the global object so we can access localstorage using window object
window.localStorage.setItem("hello", "world");
window.localStorage.setItem("hello", "delhi");
// key should be unique otherwise it overwrite it
localStorage.setItem("hello1", "india");

// To get item for key-value pair
console.log(localStorage.getItem("hello"));

// remove from local storage
localStorage.removeItem("hello1");

// clear localstorage
localStorage.clear();

// local storage only accepts strings as key-value pairs but if we want to store objects
const user = {
  name: "lokesh",
};
// we need to stringify the object
localStorage.setItem("user-copy", JSON.stringify(user));
// To get that object we need to parse it
console.log(JSON.parse(localStorage.getItem("user-copy")));
