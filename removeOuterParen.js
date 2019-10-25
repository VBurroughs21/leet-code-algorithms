var removeOuterParentheses = function(S) {
  var result = "";
  var inner = false;
  var openings = 0;

console.log(S)
  
  for(var i = 0; i < S.length; i++) {
    if (!inner && S[i] === "(") {
        inner = true;
    } else if (inner && S[i] === "(") {
        result += S[i];
        openings++;
    } else if (inner && S[i] === ")" && openings > 0) {
        result += S[i];
        openings--;
    } else if (inner && S[i] === ")" && openings === 0) {
        inner = false;
    }
  }

  return result;
};

console.log(removeOuterParentheses("(()())(())"))