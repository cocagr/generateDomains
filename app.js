let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let end = ['.com', '.net', '.us', '.io'];

function generateDomains(arr, arr2, arr3, arr4) {
  let domains = [];
  for (let e of arr) {
    for (let e2 of arr2) {
      for (let e3 of arr3) {
        for (let e4 of arr4) {
          domains.push(`${e}${e2}${e3}${e4}`);
        }
      }
    }
  }
  return domains;
}

console.log(generateDomains(pronoun, adj, noun, end));