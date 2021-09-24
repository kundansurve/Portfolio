

window.onload=()=>{
  
  let darkmode=false;
  let root = document.querySelector(":root");
  const prof=["Software Developer","Mern-Stack Developer","Competitive Programmer"];
  const profelement=document.querySelector(".timetotime");
  const mode=document.querySelector("#dark-mode");
  const homeLink=document.querySelector("#homeLink");
  const aboutLink=document.querySelector("#aboutLink");
  const certificateLink=document.querySelector("#certificateLink");
  const contactLink=document.querySelector("#contactLink");
  const skillsLink=document.querySelector("#skillsLink");
  const projectsLink=document.querySelector("#projectsLink");
  //seperator
  const home =document.querySelector("#home");
  const about =document.querySelector("#about");
  const certificate =document.querySelector("#certificate");
  const contact =document.querySelector("#contact");
  const skills =document.querySelector("#skills");
  const projects =document.querySelector("#projects");


  function changetitle(){
    let j=0;
    for(let i of prof){
      setTimeout(()=>{
        let word= i.split("");
        
        let intword="";
        let k=1;
        let w=0;
        while(k <= word.length){
          setTimeout(()=>{
            profelement.innerHTML=intword+word[w];
            intword=intword+word[w];
            w++;
          },k*150);
          k=k+1;
        }
      },j);
      //typewriter(i);
      j=j+i.length*150+ 1000;
    }
  }

  changetitle();
  let totaltime=0;
  for(let i of prof){
    totaltime+= i.length*150+ 1000;
  }
  setInterval(changetitle,totaltime);

  document.querySelector(".light-dark").addEventListener("click",()=>{  

    if(darkmode==false){ //if icon name is moon
      mode.classList.replace("fa-moon", "fa-sun") //replace it with the sun
      mode.style.color="Black";
      root.style.setProperty("--white","rgb(15,15,15)");
      root.style.setProperty("--black","rgb(240,240,240)" );
      root.style.setProperty("--white-shade","rgb(0,0,0)" );
      root.style.setProperty("--nav-main", "rgb(15,15,15)");

      root.style.setProperty("--light-bg", "Black");  
      root.style.setProperty("--shadow", "rgba(255,255,255,0.5)");  
      darkmode=true;
    }else { //if icon name is sun
      mode.classList.replace("fa-sun", "fa-moon"); //replace it with the sun
      mode.style.color="white";
      root.style.setProperty("--white","rgb(240,240,240)");
      root.style.setProperty("--black","rgb(15,15,15)" );
      root.style.setProperty("--white-shade","rgb(255,255,255)" );
      root.style.setProperty("--nav-main", "#3a0ca3");

      root.style.setProperty("--light-bg", "White");
      root.style.setProperty("--shadow", "rgba(0,0,0,0.5);"); 
      darkmode=false;  
    }
  });
  document.querySelector('#right').addEventListener("click", function(){
    if(document.querySelector('#skillset1').style.display=='none')return; 
    let i=0;
    let j=0;
    while(i< 100){
      setTimeout(()=>{ document.querySelector('#skillset1').style.left="-"+j+"vw";
        j++;
      },i*15);
      i++;
    }
   setTimeout(()=>{document.querySelector('#skillset1').style.display="none";}, 1500);
    
   document.querySelector('#skillset2').style.display="grid";
    
     let k=0;
     let l= 100;
    while(k< 100){
      setTimeout(()=>{ document.querySelector('#skillset2').style.left=l+"vw";
        l--;
      },k*15);
      k++;
    }
    
  });
  
  document.querySelector('#left').addEventListener("click", function(){
    if(document.querySelector('#skillset2').style.display=='none')return;
    let i=0;
    let j= 100;
    while(i< 100){
      setTimeout(()=>{ document.querySelector('#skillset1').style.left="-"+j+"vw";
        j--;
      },i*15);
      i++;
    }
   setTimeout(()=>{document.querySelector('#skillset2').style.display="none";}, 1500);
     document.querySelector('#skillset1').style.display="grid";
    
     let k=0;
     let l=0; 
    while(k< 100){
      setTimeout(()=>{ document.querySelector('#skillset2').style.left=l+"vw";
        l++;
      },k*15);
      k++;
    }
  });
  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  document.querySelector(".icon").addEventListener('click',myFunction)
}
