let questionBank=[
    {
        id:"qa-1",
        question:"What is the full Form of JS?",
        options:['Java Selinium','Java support','java selectors','Java Script'],
        correctAnswer:'Java Script'
    },
    {
         id:"qa-2",
        question:"What is the full Form of DOM?",
        options:['Domain object model ','Document Object Model',
                'Data object Model','Data Orienated model'],
         correctAnswer:'Document Object Model'
    },
     {
         id:"qa-3",
        question:"What is the full Form of BOM?",
        options:['Browser object model',
                 'Browser Obientend Model',
                'Browser object Module',
                 'Browser Orienated module'],
         correctAnswer:'Browser object model'
     },
     {
        id:"qa-4",
        question:"What is the full Form of TDZ?",
        options:['Time Dead Zone ',
                 'Temporal Dead Zone',
                'Temperature Dead zone',
                 'Tarzen Dead Zone'],
         correctAnswer:'Temporal Dead Zone'
     },
     {
        id:"qa-5",
        question:"What is the full Form of ES?",
        options:['Environmental Science ',
                 'EcmaScript',
                'engineering Scripting',
                 'ecmo Script'],
         correctAnswer:'EcmaScript'
     }
]

let questionElement=document.getElementById('question')
let optionElement=document.getElementById('option')
let scoreElement=document.getElementById('score')

let currentQuestion=0
let score=0
function displayQuestion(){
    // let que=questionBank[0]
    // let que=questionBank[currentQuestion]
    let {id,question,options,correctAnswer}=questionBank[currentQuestion]
    // console.log(id);
    // console.log(question);
    // console.log(options);
    // console.log(correctAnswer);
    questionElement.textContent=question;
    options=suffleQuestion([...options])

    questionElement.textContent=question;
    options.map((opt,i)=>{
        // console.log(opt);
        let btn=document.createElement('button')
        btn.textContent=opt;
        btn.setAttribute('class','optionButtons')
        optionElement.append(btn)
        btn.addEventListener('click',()=>{
            if(opt==correctAnswer){
                btn.style.backgroundColor="green"
                score+=1;
            }else{
                score -=0.25;
                btn.style.backgroundColor="red"
            }

            setTimeout(()=>{
                naxtquestion()
            },2000)


            // naxtquestion()
        
        
            console.log(score);
        scoreElement.textContent=`SCORE=${score}/${questionBank.length}`

        let allbtn=document.querySelectorAll(".optionButtons");
        allbtn.forEach((b)=>b.disabled=true);
        
        })
    })
    
    // console.log(que);    
    
}
displayQuestion();


function naxtquestion(){
    currentQuestion++
    optionElement.textContent=" ";
    if(currentQuestion==questionBank.length){
        questionElement.textContent="quiz completed susssfully!!😍👽"
    }else{
        displayQuestion()
    }
}


function suffleQuestion(arr){
    for(let i=arr.length-1;i>0;i--){
        let j=Math.floor(Math.random()*(i+1));
        [arr[i],arr[j]]=[arr[j],arr[i]]

    }
    return arr
}