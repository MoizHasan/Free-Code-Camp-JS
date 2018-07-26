function palindrome(str) {
  str = str.toLowerCase().split(/[^a-z0-9]/).join("");
  return (str === str.split("").reverse().join(""));
}

palindrome("eye");