function luhn(num) {
    var newNum = num.toString();
    newNum = newNum.split('').reverse().join('');
    var checkSum = newNum.substring(0,1);
    alert(checkSum);
    newNum = newNum.substring(1,newNum.length);
    newNum = newNum.split();
    alert(newNum);
    var i = 0;
    alert("length is " + newNum.length);
    while (i < newNum.length){
      alert("i is " + i);
      newNum[i]= newNum[i]*2;
      alert(newNum[i]);
      alert(newNum[i]*2);
      i = i + 2
    }
    alert(newNum);
    }




newNum[i]*2

if
