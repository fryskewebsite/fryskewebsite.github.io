console.log("Fryslân boppe!");

function checkPassword(){
       if(document.getElementById('password').value == 'test'){
        alert('korrekt!');
        location.href = "test.html";
         } else {
         alert('Mis!');
          return false;
        }
       }

 function melding(){
  if(document.getElementById('testbutton').value.textContent = 'klik hier!'){
    window.alert("Fryslân boppe!");
    document.getElementById('testbutton').style.fontSize = '25'
    document.getElementById('testbutton').style.backgroundColor = '#5f8ab6'
    document.getElementById('testbutton').textContent = 'melding was weergeven!'
    document.getElementById('testbutton').disabled = true;
  } 
 }

 function ResetMelding(){
  document.getElementById('testbutton').textContent = 'klik hier!';
  document.getElementById('testbutton').style.fontSize = '30';
    document.getElementById('testbutton').style.backgroundColor = ''
  document.getElementById('testbutton').disabled = false;
  window.alert("Knop gereset!");
 }