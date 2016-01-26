password(str) {return (str.includes("#") || str.includes("!") || str.includes("&")) && str.length >5 && str.toUpperCase != "PASSWORD" && (str.includes(1) || str.includes(2) || str.includes(3) || str.includes(4) || str.includes(5) || str.includes(6) || str.includes(7) || str.includes(8) || str.includes(9) || str.includes(0)) && passwordTest(str) && passwordTest2(str)}



(!str.includes("#") && !str.includes ("!") && !str.includes("&"))







function functionTest(str) {
  var lowerCase = /[a-z]/;
  var upperCase = /[A-Z]/;
  var nums = /[0-9]/;
  var symbols = /[#$!]/;
  var UPpassword = str.toUpperCase();
    if (!UPpassword.includes("PASSWORD")){
      return(lowerCase.test(str) && upperCase.test(str) && nums.test(str) && symbols.test(str));
      }
    else {
      return(false);
      }
    }


function user(str) {
  var symbols = /[#&!]/;
    return(symbols.test(str) && str.length > 5)}




function validation(ID, pass) {return user(ID) && functionTest(pass)}

getCredentials() { var ID = prompt("Please enter your ID"); var pass = prompt ("Enter password"); alert ("Your credentials are valid." + validation(ID, pass))}
