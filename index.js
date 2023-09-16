function shout(string){
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}
function logShout(string){
    console.log(string.toUpperCase());
}
function logWhisper(string){
    console.log(string.toLowerCase());
}
  
// Function to respond based on the input string
function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
        // Check if the string is lowercase
        return"I can't hear you!";
      } else if (string.toUpperCase() === string) {
        // Check if the string is uppercase
        return'YES INDEED!';
      } else if (string === "Let's have dinner together!") {
        // Check if the string matches the specific phrase
        return'I would love to!';
      }
}