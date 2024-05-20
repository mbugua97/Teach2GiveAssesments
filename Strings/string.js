//code to test for palindrome
function testPalindrome(stringWord){
    //reversing the word
    let reversedWord=stringWord.split('').reverse().join('')
    //checking if strings are similar
    if(stringWord==reversedWord){
        return (`${stringWord} is a palindrom`)
    }
    else{
        return (`${stringWord} is not a palindrom`)
    }

}
//sample palindromes
console.log(testPalindrome('dad'))
console.log(testPalindrome('mum'))
console.log(testPalindrome('eye'))
console.log(testPalindrome('deed'))
//sample non-palindromes
console.log(testPalindrome('dada'))
console.log(testPalindrome('six'))
console.log(testPalindrome('mama'))