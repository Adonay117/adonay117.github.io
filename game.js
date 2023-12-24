//show data

let score = document.getElementById('score')

const title = document.getElementById('titlewin')
const contentGame = document.querySelector('.contentcpu')
console.log(contentGame)
//buton paper, rock and scissors
let btnpaper = document.getElementById('paper');
console.log(btnpaper)
let btnrock = document.getElementById('rock');
console.log(btnrock)
let btnscissors = document.getElementById('scissors')
console.log(btnscissors)
let triangule = document.getElementById('triangule')
console.log(triangule)
const btnPlayAgain = document.getElementById('btnPlay')

function getCpu(){
    let option = ['paper','rock','scissors']
    return option[Math.floor(Math.random()*3)]

}


    

let i = 0;

function getWinner (player1 , player2){

 if(player1 === player2){
    let arraydata= [i,'YOU DRAW']
    return arraydata
 }
 else if ((player1 == 'paper' && player2 == 'rock')||(  player1 == 'rock' && player2 =='scissors')|| (player1 == 'scissors' && player2 == 'paper')){
   let arraydata= [++i,'YOU WIN']
   console.log(arraydata)
   return arraydata;
 }
 else{
    if(i == 0){
        let arraydata= [i=0,'YOU LOSE']
        return arraydata
    }
    else{
        
        let arraydata= [--i,'YOU LOSE']
        return arraydata
    }
    
 }
 
}

btnpaper.addEventListener('click', () => {
        const datacpu = getCpu();
        let getdata = getWinner('paper', datacpu);
        contentGame.classList.remove('hidden')
        let divCpu = document.createElement('div');
        divCpu.className = datacpu;
        divCpu.id = datacpu;
        contentGame.appendChild(divCpu);
        let circulecpu = document.createElement('div');
        circulecpu.className = `circule${datacpu}`
        divCpu.appendChild(circulecpu);
        divCpu.style.right='0'
        divCpu.style.top='0'
        let imgcpu = document.createElement('img')
        imgcpu.src=`/img/icon-${datacpu}.svg`
        imgcpu.alt= datacpu
        circulecpu.appendChild(imgcpu)
        
        btnPlayAgain.classList.remove('hidden')
        btnrock.classList.add('hidden');
        btnscissors.classList.add('hidden');
        btnpaper.classList.remove('hidden')
        title.classList.remove('hidden')
        title.classList.add('state')
        triangule.classList.add('hidden')
       
        title.textContent = getdata[1]
        score.textContent = getdata[0];




    })


btnrock.addEventListener('click', () => {
    const datacpu= getCpu()
    let getdata = getWinner('rock', datacpu)


    contentGame.classList.remove('hidden')
    let divCpu = document.createElement('div');
    divCpu.className = datacpu;
    divCpu.id = datacpu;
    contentGame.appendChild(divCpu);
    let circulecpu = document.createElement('div');
    circulecpu.className = `circule${datacpu}`
    divCpu.appendChild(circulecpu);
    divCpu.style.right='0'
    divCpu.style.top='0'
    let imgcpu = document.createElement('img')
    imgcpu.src=`/img/icon-${datacpu}.svg`
    imgcpu.alt= datacpu
    circulecpu.appendChild(imgcpu)
    

    btnpaper.classList.add('hidden')
    btnPlayAgain.classList.remove('hidden')
    btnscissors.classList.add('hidden')
    btnrock.classList.remove('hidden')
    triangule.classList.add('hidden')
    console.log(getdata)
    btnrock.style.left= "0"
    btnrock.style.top= "0"
   
    title.classList.remove('hidden')
    title.classList.add('state')
    title.textContent = getdata[1]
    score.textContent=getdata[0]
    
})
btnscissors.addEventListener('click', () =>{
    const datacpu= getCpu()
    let getdata = getWinner('scissors', datacpu)
    contentGame.classList.remove('hidden')
    let divCpu = document.createElement('div');
    divCpu.className = datacpu;
    divCpu.id = datacpu;
    contentGame.appendChild(divCpu);
    let circulecpu = document.createElement('div');
    circulecpu.className = `circule${datacpu}`
    divCpu.appendChild(circulecpu);
    divCpu.style.right='0'
    divCpu.style.top='0'
    divCpu
    let imgcpu = document.createElement('img')
    imgcpu.src=`/img/icon-${datacpu}.svg`
    imgcpu.alt= datacpu
    circulecpu.appendChild(imgcpu)

    btnpaper.classList.add('hidden')
    btnPlayAgain.classList.remove('hidden')
    btnrock.classList.add('hidden')
    btnscissors.classList.remove('hidden')

    triangule.classList.add('hidden')
    btnscissors.style.left= "0"
    title.classList.remove('hidden')
    title.classList.add('state')
    title.textContent = getdata[1]
   

    
    score.textContent=getdata[0]
})


btnPlayAgain.addEventListener('click', () =>{
    
    
    btnpaper.classList.remove('hidden')
    btnrock.classList.remove('hidden')
    btnscissors.classList.remove('hidden')
    triangule.classList.remove('hidden')
    btnPlayAgain.classList.add('hidden')
    btnrock.removeAttribute('style')
    btnscissors.removeAttribute('style')
    title.classList.add('hidden')
    title.classList.remove('state')
    while (contentGame.firstChild) {
        contentGame.removeChild(contentGame.firstChild);
    }
    
    
})



/* win lose draw*/



