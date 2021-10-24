function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}


Form.addEventListener('submit', e => {
    e.preventDefault();

    validateForm();
});

function validateForm() {

    var firname = document.Form.firname.value;
    var lasname = document.Form.lasname.value;
    var moblie = document.Form.moblie.value;
    var email = document.Form.email.value;

    var gender = document.Form.gender.value;



    var firnameErr = lasnameErr = moblieErr = emailErr = genderErr = true;


    if (firname === "") {
        printError("firnameErr", "Please enter your First name");
        var elem = document.getElementById("firname");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(firname) === false) {
            printError("firnameErr", "Please enter a valid name");
            var elem = document.getElementById("firname");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("firnameErr", "");
            firnameErr = false;
            var elem = document.getElementById("firname");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }

    if (lasname === "") {
        printError("lasnameErr", "Please enter your Last name");
        var elem = document.getElementById("lasname");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(lasname) === false) {
            printError("lasnameErr", "Please enter a valid name");
            var elem = document.getElementById("lasname");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("lasnameErr", "");
            lasnameErr = false;
            var elem = document.getElementById("lasname");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");


        }
    }

    if (moblie === "") {
        printError("moblieErr", "Please enter your moblie number");
        var elem = document.getElementById("moblie");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        var regex = /^[@1-9]\d{9}$/;
        if (regex.test(moblie) === false) {
            printError("moblieErr", "Please enter a valid 10 digit moblie number");
            var elem = document.getElementById("moblie");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("moblieErr", "");
            moblieErr = false;
            var elem = document.getElementById("moblie");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }

    if (email === "") {
        printError("emailErr", "Please enter your email address");
        var elem = document.getElementById("email");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {

        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
            var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("emailErr", "");
            emailErr = false;
            var elem = document.getElementById("email");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

        }
    }


    if (gender == "Select") {
        printError("genderErr", "Please select your gender");
        var elem = document.getElementById("gender");
        elem.classList.add("input-4");
        elem.classList.remove("input-3");
    } else {
        printError("genderErr", "");
        genderErr = false;
        var elem = document.getElementById("gender");
        elem.classList.add("input-3");
        elem.classList.remove("input-4");
    }


    if ((firnameErr || lasnameErr || moblieErr || emailErr || genderErr) == true) {
        return false;
    }
};