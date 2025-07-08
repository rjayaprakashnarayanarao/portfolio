fetch('https://script.google.com/macros/s/AKfycbzZWQf88dIgAaux9Zm9GBbE5JsmgJEqe1AooYUnMDacPXP53T1YFAO2tAr26v8CkFRf/exec', {
  method: 'POST',
  headers: {
    'Content-Type': 'text/plain;charset=utf-8', // Key change here!
  },
  body: JSON.stringify(yourData), // Still send your data as a JSON string
  redirect: 'follow' // Important for Google Apps Script redirects
})
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json(); // Or .text() if your Apps Script returns plain text
})
.then(data => {
  console.log('Success!', data);
  // Handle success
})
.catch(error => {
  console.error('Error! Failed to fetch:', error);
  // Handle error
});
