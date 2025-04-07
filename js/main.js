


const createStars = () => {
    const starsContainer = document.getElementById("stars");
    const fragment = document.createDocumentFragment();
    const starCount = 200;
  
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.opacity = `${Math.random() * 0.5}`;
      fragment.appendChild(star);
    }
  
    starsContainer.appendChild(fragment);
  };
  
  createStars();

  const start = document.querySelector('.btnStart');
  const container = document.querySelector('.container');
  const first = document.querySelector('.container-Firstquestion');
  const last = document.querySelector('.container-End');
  const text=document.querySelector(".text");
  const quest = document.querySelector('.quest');
  const endtext = document.querySelector('.endtext');
  const answer = document.querySelector('.answer');
  let score = 0;
  let per='';
  let randomIndex = Math.floor(Math.random() * myQuestions.length);
  const lenght = [];


  const firstquest = () => {
    first.style.display ="flex";
    container.style.border = "none";
    container.style.animation = "opacityon 1s forwards";
    showQuestions();
    showAnswers();
    lenght.push(randomIndex);
    myQuestions.splice(randomIndex, 1);
  }
  
  const showQuestions = () => {
    quest.innerHTML = (myQuestions[randomIndex].question);
   // console.log(myQuestions[randomIndex].correctAnswer);
    per = myQuestions[randomIndex].correctAnswer;
    //console.log(myQuestions[randomIndex].question);
  }
  const showAnswers = () => {
    const a = (myQuestions[randomIndex].answers);
    let ans = '';
    for (let key in a) {
    ans += `<p><strong>${key}:</strong> ${a[key]}</p>`;
    answer.innerHTML = ans;
    
    answer.addEventListener('click', nextquest);
}

}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run(e) {
  checkAnswer(e);
  await sleep(1000); // czekaj 2 sekundy
}

const checkAnswer = e => {
  OK = e.target.closest("p").textContent;
  console.log(OK);
  console.log(per);
  if (per == OK[0]){
    score+=1;
  }
}

const nextquest =(e) =>{
  run(e);
  text.style.animation = "opacityon 1s forwards";
  if(myQuestions.length==0){
    console.log(score);
    TheEnd();
  }
  else {
  setTimeout( () => {
  let b=Math.floor(Math.random() * myQuestions.length);
  randomIndex=b;
  showAnswers();
  showQuestions();
  myQuestions.splice(randomIndex, 1);
  lenght.push(randomIndex);
  text.style.animation = "opacityoff 1s forwards";}, 1000);}
  }
const TheEnd = ()=> {
  last.style.display="flex";
  text.style.display="none";
  first.style.border = "none";
  END = `<p>Punkty: ${score}`;
  endtext.innerHTML = END;
  console.log("XD");

}
  
  start.addEventListener('click', firstquest);
