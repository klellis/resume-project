function sendMail(contactForm){
    emailjs.send("service_o1hxgr7","kay", {
        "project_request": contactForm.projectsummary.value,
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        
    })

    .then(
        function(response){
            console.log.value("SUCCESS", response);
        }, 
        function(error){
            console.log("FAILED", error);
        }
    );
    return false;
}