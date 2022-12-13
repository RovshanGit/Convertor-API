const url = `https://api.exchangerate.host/latest?base=USD&symbols=RUB `

const btnsFirst = document.querySelectorAll('.btnsFirst');
const btnsSecond = document.querySelectorAll('.btnsSecond');
const leftInput = document.querySelector('.leftInput');
const rightInput = document.querySelector('.rightInput');

btnsFirst.forEach(lbtn => {
    lbtn.addEventListener('click', function(e){
        document.querySelector('.container .btnsFirst .active').classList.remove('active')
        e.target.classList.add('active')
})
})

btnsSecond.forEach(rbtn => {
    rbtn.addEventListener('click', function(e){
        document.querySelector('.container .btnsSecond .active').classList.remove('active')
        e.target.classList.add('active')
})
})
leftInput.addEventListener('keyup',getCurrency)

  function getCurrency () {
      let base = document.querySelector('.firstConvertor .active');
      let symbol =document.querySelector('.secondConvertor .active');
      
      fetch(`https://api.exchangerate.host/latest?base=${base.innerText}&symbols=${symbol.innerText}`)
      .then(res => res.json())
      .then(result => {
          let currency = result.rates[`${symbol.innerText}`]
          if(leftInput.value!=''){
            rightInput.value = (leftInput.value*currency).toFixed(2)     
            }else{
                rightInput.value=''
            }
        })  
    }

    function rates(){
        let base = document.querySelector('.firstConvertor .active');
        let symbol = document.querySelector('.secondConvertor .active'); 
        let leftText = document.querySelector('.leftInputDiv p');
        // let rightText = document.querySelector('.rightInputDiv p');
        fetch(`https://api.exchangerate.host/latest?base=${base.innerText}&symbols=${symbol.innerText}`)
        .then (res => res.json())
        .then(result =>{
            let currency = result.rates[`${symbol.innerText}`]
            leftText.innerText =`1 ${base.innerText} = ${currency} ${symbol.innerText}`
        })
    }