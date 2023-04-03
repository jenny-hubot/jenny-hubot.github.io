let saveFile = () => {
    // Get the data from each element on the form.
    const name = document.getElementById("username");
    const age = document.getElementById("password");
    const email = document.getElementById("email");

    // This variable stores all the data.
    let data = "\r Name: " + name.value + " \r\n " + "Age: " + age.value + " \r\n " + "Email: " + email.value + " \r\n " + "Country: " + country.value + " \r\n " + "Message: " + msg.value;
    console.log(data); //printing form data into the console
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: "text/plain" });
    var sfilename = new Date();
    var month =new Date(); //months from 1-12
    month = month.getMonth();

    var day = new Date();
    var day = day.getUTCDate();

    var year = new Date();
    var year = year.getUTCFullYear();

    newdate = year + "/" + month + "/" + day;
    const sFileName = "login.txt"; // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = new Date();

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    } else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
};