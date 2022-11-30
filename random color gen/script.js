const getcolor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const rancode = "#" + randomNumber.toString(16);
    console.log(randomNumber,rancode)
    document.body.style.backgroundColor = rancode;
    document.getElementById("color-c").innerHTML = rancode;
    navigator.clipboard.writeText(rancode)
   
    
  }
  document.getElementById("btn").addEventListener(
    "click",
    getcolor
  )
  
  
  getcolor();