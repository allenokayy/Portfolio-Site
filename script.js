// Portfolio Site Accordion //
 let largeButton = document.getElementsByClassName("BigBoy");
 let smallButton = document.getElementsByClassName("SmallBoy");

 let i;

 for (i = 0; i < largeButton.length; i++) {
    largeButton[i].addEventListener("click", function() {
        this.classList.toggle("active");

        let panel = this.nextElementSiblig;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
 }