// permute a string

function permute(A) {
  let len = A.length;
  if (len === 1) {
    return A;
  }
  let pick = "";
  let permutations = [];
  for (let i = 0; i < len; i++) {
    pick = A[i];
    var remainder = A.slice(0, i) + A.slice(i + 1, len);
    for (var perm of permute(remainder)) {
      permutations.push(pick + perm);
    }
  }
  return permutations;
}
//const A = "abc";    REPLACE THESE TO WORK WITh NODE
// console.log(JSON.stringify(permute(A)));
