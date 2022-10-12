// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function isAdmin(user){
    if(user.userRole === 'ADMIN'){
        return true;
    }else {
        return false;
    }
}

function getEmail(user){
   let  email = (`${user['firstName']}.${user['lastName']}@codeimmersives.com`);
    return email.toLowerCase()


}

//crete function
//takes in playlist object
//returns number of songs in playlist
//songs key is an array
//get array length 
function getPlaylistLength(playlist){
   let length =  playlist.songs.length;
   return length
}
// take in homework array 
//return string
function getHardestHomework(homeworkArray){
    let lowestHw = homeworkArray[0];
    if(homeworkArray.length===0){
        return ''
    }
        for ( let i = 0; i < homeworkArray.length; i++ ){
         if (homeworkArray[i].averageScore < lowestHw.averageScore){
            lowestHw = homeworkArray[i];
    }
}
    return lowestHw.name;
}


//function createPhoneBook()
//names array string
//numbers array string
//return phonebook object
// 'name : number '
function createPhonebook(namesArray, numbersArray){
    let phoneBook = {};
    for (i=0; i<namesArray.length; i++){
        phoneBook[namesArray[i]]= numbersArray[i]
    }
    return phoneBook;
} 
// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};