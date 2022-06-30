/* .js files add interaction to your website */

var factList = [
  "1 in every 5 children report getting bullied",
  "6% of males get physically bullied; however, 4% of females get physically bullied",
  "18% of females get verbally bullied, but 9% of males get verbally bullied",
  "41% of students claim that they believe getting bullied will reoccur"
]

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact () {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
