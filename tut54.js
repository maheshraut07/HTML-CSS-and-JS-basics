// Alert in in-browser javascript
alert("This is  a message") // it simply give alert by taking string as argument
                             // alert return nothing



let name = prompt("What is your name? ", "Guest"); // ask user what is his/her name 
console.log(name);                                  // answer of this question will store in 'name' variable 


let deletePost = confirm(" Do you really want to delete this post?")  // it ask about the confirmation  message 
// console.log(deletepost) if we press yes then it will return true otherwise else
if(deletePost){
    //code to delete the post
    console.log("your post has been deleted succesfully!!!");
}
else {
    //code to cancle deletion of the post
    console.log("your post has not been deleted !!!");
}