const typewriter = function(sentence) {


  for (let i = 0; i < sentence.length; i++) {
    

    setTimeout(() => {
      process.stdout.write(sentence.charAt(0));  //Print the first letter.
      //Now that the first letter is printed, remove it from the string.
      sentence = sentence.slice(1); //Removes ONE element from the string.
      typewriter(sentence); //Call the function again, but now sentence has one less letter.
      
    }, 1000); // <= 1s delay to make it noticeable. Can dial it down later.

    return;
  }
  
};
typewriter("hello there from lighthouse labs" + '\n');


