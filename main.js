
//variáveis 
const select = document.querySelectorAll(".currency");
const btn = document.getElementById("btn");
const num = document.getElementById("num");
const ans = document.getElementById("ans");

//chamar API com a resposta
fetch("https://api.frankfurter.app/currencies")
  .then((res) => res.json())
  .then((res) => {
  
   //função display
    display(res);
    
  });

//mostra quais moedas pode selecionar
function display(res) {
  const entries = Object.entries(res);
  
  for (var i = 0; i < entries.length; i++) {
    select[0].innerHTML += `<option value="${entries[i][0]}">$ 
    ${ entries[i][0] } -
    ${ entries[i][1] } 
    
    </option>`;
    select[1].innerHTML += `<option value="${entries[i][0]}">$ 
    ${ entries[i][0] } -
    ${ entries[i][1] } 
    </option>`;
  }
}

//quando clicar no botão ira converter
btn.addEventListener("click", () => {
  let currency1 = select[0].value;
  let currency2 = select[1].value;
  let value = num.value;

  if (currency1 != currency2) {
  //função de converter
    convert(currency1, currency2, value);
  } else {
    alert("Por favor, selecionar outra Moeda");
  }
});


function convert(currency1, currency2, value) {
  const host = "api.frankfurter.app";
  fetch(
      `https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`
    )
    .then((val) => val.json())
    .then((val) => {
      //console.log(val);
      ans.value = Object.values(val.rates)[0];
    });
}
