
/*======typing animaiton======*/
var typed = new Typed("#typed-text",{
    strings:["Web Designer","Web Developer","Graphic Designer","Analyst","Programmer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
/*======aside======*/
const nav = document.querySelector(".nav", ".logo"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      for(let i=0; i<totalNavList; i++){
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function(){
          removeBackSection();
          for(let j=0; j<totalNavList; j++){
            if(navList[j].querySelector("a").classList.contains("active")){
              addBackSection(j);
              //allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active")
          }
          this.classList.add("active")
          showSection(this);
          if(window.innerWidth < 1200){
            asideSectionTogglerBtn();
          }
        })
      }
      function removeBackSection(){
        for(let i=0; i<totalSection; i++){
          allSection[i].classList.remove("back-section");
        }
      }
      function addBackSection(num){
        allSection[num].classList.add("back-section");
      }
      function showSection(element){
        for(let i=0; i<totalSection; i++){
          allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
      }
      function updateNav(element){
        for(let i=0; i<totalNavList; i++){
          navList[i].querySelector("a").classList.remove("active");
          const target = element.getAttribute("href").split("#")[1];
          if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("active");
          }
        }
      }
      document.querySelector(".hire-me").addEventListener("click", function(){
        const sectionIndex = this.getAttribute("data-section-index");
        //console.log(sectionIndex);
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection();
      })
      const navTogglerBtn = document.querySelector(".nav-toggler"),
          aside = document.querySelector(".aside");
          navTogglerBtn.addEventListener("click", () => {
            asideSectionTogglerBtn();
          })
          function asideSectionTogglerBtn(){
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i=0; i<totalSection; i++){
              allSection[i].classList.toggle("open");
            }
          }
          function downloadFile() {
            // Create a dummy element
            var link = document.createElement('a');
            link.href = 'resume.pdf'; // Relative URL to the file

            // Set the file name
            link.download = 'resume.png'; // Replace with the actual file name

            // Simulate a click on the link element to trigger the download
            link.click();
        }
        function openImage() {
          document.querySelector('.overlay').classList.add('active');
        }
    
        function closeImage() {
          document.querySelector('.overlay').classList.remove('active');
        }
        function storeResponses() {
          var input1Value = document.getElementById("input1").value;
          var input2Value = document.getElementById("input2").value;
          var input3Value = document.getElementById("input3").value;
          var textAreaValue = document.getElementById("textArea").value;
    
          var storedResponses = localStorage.getItem("responses");
          if (storedResponses) {
            storedResponses += "\nInput 1: " + input1Value + "\nInput 2: " + input2Value + "\nInput 3: " + input3Value + "\nTextarea: " + textAreaValue + "\n";
          } else {
            storedResponses = "Input 1: " + input1Value + "\nInput 2: " + input2Value + "\nInput 3: " + input3Value + "\nTextarea: " + textAreaValue + "\n";
          }
    
          localStorage.setItem("responses", storedResponses);
    
          document.getElementById("input1").value = "";
          document.getElementById("input2").value = "";
          document.getElementById("input3").value = "";
          document.getElementById("textArea").value = "";
          
          alert("Responses stored successfully.");
        }
