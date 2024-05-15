const scriptURL = 'https://script.google.com/macros/s/AKfycbzZWQf88dIgAaux9Zm9GBbE5JsmgJEqe1AooYUnMDacPXP53T1YFAO2tAr26v8CkFRf/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          msg.innerHTML = "Message sent successfully"
          setTimeout(function(){
            msg.innerHTML = ""
          },5000)
          form.reset()
        })
      .catch(error => console.error('Error!', error.message))
  })