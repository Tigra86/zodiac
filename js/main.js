function zodiacSign() {

    // Getting input from user
    var month = document.getElementById("month").value 
    var day = document.getElementById("day").value

    document.getElementById("dob").style.display = "none";  

    if (month == "Jan") {
        if (day < 20) {
            document.getElementById("capricorn").style.display = 'block';
        }
        else if (day >= 20) {
            document.getElementById("aquarius").style.display = 'block';
        }
    }
    else if (month == "Feb") {
        if (day < 19) {
            document.getElementById("aquarius").style.display = 'block';
        }
        else if (day >= 19) {
            document.getElementById("pisces").style.display = 'block';
        }
    }
    else if (month == "Mar") {
        if (day < 21) {
            document.getElementById("pisces").style.display = 'block';
        }
        else if (day >= 21)  {
            document.getElementById("aries").style.display = 'block';
        }
    }
    else if (month == "Apr") {
        if (day < 20) {
            document.getElementById("aries").style.display = 'block';
        }
        else if (day >= 20) {
            document.getElementById("taurus").style.display = 'block';
        }
    }
    else if (month == "May") {
        if (day < 21) {
            document.getElementById("taurus").style.display = 'block';
        }
        else if (day >= 21)  {
            document.getElementById("gemini").style.display = 'block';
        }
    }
    else if (month == "Jun") {
        if (day < 22) {
            document.getElementById("gemini").style.display = 'block';
        }
        else if (day >= 22) {
            document.getElementById("cancer").style.display = 'block';
        }
    }
    else if (month == "Jul") {
        if (day < 23) {
            document.getElementById("cancer").style.display = 'block';
        }
        else if (day >= 23)  {
            document.getElementById("leo").style.display = 'block';
        }
    }
    else if (month == "Aug") {
        if (day < 23) {
            document.getElementById("leo").style.display = 'block';
        }
        else if (day >= 23)  {
            document.getElementById("virgo").style.display = 'block';
        }
    }
    else if (month == "Sep") {
        if (day < 23) {
            document.getElementById("virgo").style.display = 'block';
        }
        else if (day >= 23)  {
            document.getElementById("libra").style.display = 'block';
        }
    }
    else if (month == "Oct") {
        if (day < 23) {
            document.getElementById("libra").style.display = 'block';
        }
        else if (day >= 20) {
            document.getElementById("scorpio").style.display = 'block';
        }
    }
    else if (month == "Nov") {
        if (day < 22) {
            document.getElementById("scorpio").style.display = 'block';
        }
        else if (day >= 22) {
            document.getElementById("sagittarius").style.display = 'block';
        }
    }
    else if (month == "Dec") {
        if (day < 22) {
            document.getElementById("sagittarius").style.display = 'block';
        }
        else if (day >= 22) {
            document.getElementById("capricorn").style.display = 'block';
        }
    }
}

