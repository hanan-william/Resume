document.addEventListener("DOMContentLoaded", function() {
  console.log("Resume Loaded Successfully");

  // Dynamic Greeting based on time of day
  const hours = new Date().getHours();
  let greeting;
  if (hours < 12) greeting = "Good Morning!";
  else if (hours < 18) greeting = "Good Afternoon!";
  else greeting = "Good Evening!";
  
  document.querySelector("header p").insertAdjacentHTML('afterend', `<p>${greeting}</p>`);
});
