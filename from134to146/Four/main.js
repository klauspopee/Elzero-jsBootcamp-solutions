let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

//https? => with or without 's'  (http \ https)
// \/\/ skip those '//'
//?: make it non capturing group
//[-\w]+ could be one letter or more
// \. escape the dot
// (?:[-\w]+\.) zero or more
//([-\w]+) could be one world or more 
// \. escape the dot
// repeated
//.* means it could be something after all that


let regex = /(?:[-\w]+\.)/
let text = "example."
let result = text.match(regex)


console.log(result)
