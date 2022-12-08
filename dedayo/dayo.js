// LEVEL 1 EXERCISE 1

let submit =document.getElementById('btn')
let dayo = document.getElementById('dayo')

submit.addEventListener('click', function(){
    let input = document.getElementById('age_input').value
    console.log(input)

if(input >= 18){
    dayo.innerHTML = "<p class='text-white'>CONGRATS! You are old enough to drive</>";
    document.getElementById("age_input").value = "";
}
else {
    dayo.innerHTML = `<p class='text-red-500'>ERROR!!! You will be eligible to drive in ${18-input} years</>`;
    document.getElementById("age_input").value = "";
}
})



// LEVEL 1 EXERCISE 2

// let answer = prompt("what is your age")
// if(answer > 27){
//     console.log("You are older than me")

// }
// else {
//     console.log("you be my junior")
// }



// LEVEL 1 EXERCISE 3


let submitted = document.getElementById('btn_two')
let dayotwo = document.getElementById('dayotwo')

submitted.addEventListener('click', function(){
    let result = document.getElementById('letter').value
    let a = 4
    let b = 3
    if(result > a){
        dayotwo.innerHTML = `<p class='text-white'> ${result} 'is greater than' ${a} </>`;
        document.getElementById("letter").value = "";
    }
    else if(result == a){
        dayotwo.innerHTML = `<p class='text-white'> ${result} 'is equivalent to' ${a} and greater than ${b}</>`;
        document.getElementById("letter").value = "";
    }
    else if(result == b){
        dayotwo.innerHTML = `<p class='text-white'> ${result} 'is equivalent to' ${b} and less than ${a}</>`;
        document.getElementById("letter").value = "";
    }
    else {
        dayotwo.innerHTML = `<p class='text-white'> ${result} 'is lesser than' ${b} </>`
        document.getElementById("letter").value = "";
    }

})


// LEVEL 1 EXERCISE 4

    let btn_three = document.getElementById('btn_three')
    let dayothree = document.getElementById('dayothree')

    btn_three.addEventListener('click', function(){
    let even_odd = document.getElementById('even_odd').value

    if(even_odd % 2 == 0){
        dayothree.innerHTML = "<p class='text-white'>that shit you input is an EVEN number</>";
        document.getElementById('even_odd').value = ""
    }
    else {
        dayothree.innerHTML = "<p class='text-white'>that shit you input is an ODD number</>";
        document.getElementById('even_odd').value = ""
    }
    })


    // LEVEL 2 EXERCISE 1
    let btn_four = document.getElementById('btn_four')
    let dayofour = document.getElementById('dayofour')

    btn_four.addEventListener('click', function(){
        let grade = document.getElementById('grades').value

        let grades = ""
        
        switch(true){
        case grades <= 100 && grade >= 80:
            dayofour.innerHTML = "<p class='text-white'>EXCELLENT!!! Your grade is A</>";
            document.getElementById("grades").value = ""
        break 
        case grades <= 89 && grade >= 70:
            dayofour.innerHTML = "<p class='text-white'>Very Good!! Your grade is B</>";
            document.getElementById("grades").value = ""
        break
        case grades <= 69 && grade >= 60:
            dayofour.innerHTML = "<p class='text-white'>Good! Your grade is C </>";
            document.getElementById("grades").value = ""
        break
        case grades <= 59 && grade >= 50:
            dayofour.innerHTML = "<p class='text-white'>FAIR Your grade is D </>";
            document.getElementById("grades").value = ""
        break 
        case grades <= 49 && grade >= 0:
            dayofour.innerHTML = "<p class='text-red-500'>COMOT YOU BE OLODO YOUR GRADE NA F!!!!</>";
            document.getElementById("grades").value = ""
        break
        default: 
            dayofour.innerHTML = "<p class='text-red-500'>ERROR! This is not a grade</>"
            document.getElementById("grades").value = ""
        }
    })


    // LEVEL 2 EXERCISE 2
    // seasons = Autumn, Winter, Spring or Summer

    let btn_five = document.getElementById("btn_five")
    let dayofive = document.getElementById("dayofive")

    btn_five.addEventListener('click',function(){
        let season = document.getElementById("season").value


        if (season == "september" || season == "october" || season == "november"){
            dayofive.innerHTML = "<p class='text-white'>The season is Autumn</p>"
            document.getElementById("season").value = ""
        }
        else if (season == "december" || season == "january" || season == "february"){
            dayofive.innerHTML = "<p class='text-white'>The season is Winter</p>"
            document.getElementById("season").value = ""
        }
        else if (season == "march" || season == "april" || season == "may"){
            dayofive.innerHTML = "<p class='text-white'>The season is Spring</p>"
            document.getElementById("season").value = ""
        }
        else if (season == "july" || season == "august" || season == "june"){
            dayofive.innerHTML = "<p class='text-white'>The season is Autumn</p>"
            document.getElementById("season").value = ""
        }
        else{
            dayofive.innerHTML = "<p class='text-red-500'>Not a valid input</p>"
            document.getElementById("season").value = ""
        }
    })



    // LEVEL 2 EXERCISE 3
    let btn_six = document.getElementById('btn_six')
    let dayosix = document.getElementById('dayosix')

    btn_six.addEventListener('click',function(){
        let weekday = document.getElementById('weekday').value

        switch(true){
            case weekday ==  "saturday" || weekday == "sunday":
                dayosix.innerHTML = "<p class='text-white'>This is a weekend</p>"
                document.getElementById("weekday").value = ""
            break
            case weekday == "monday" || weekday == "tuesday" || weekday == "wednesday" || weekday == "thurday" || weekday == "friday":
                dayosix.innerHTML = "<p class='text-white'>This is a week day</p>"
                document.getElementById("weekday").value = ""
            break
            default: 
            dayosix.innerHTML = "<p class='text-red-500'>Invalid input</p>"
            document.getElementById("weekday").value = ""
        } 

    })
    

    // LEVEL 3 EXERCISE 1
    // january, march, may, july, august, october and december has 31 days 
    // april, june, september and november has 30 days 
    // february has 28 day and 29 days in a leap year
        let btn_seven = document.getElementById('btn_seven')
        let dayoseven =document.getElementById('dayoseven')

        btn_seven.addEventListener('click', function(){
            let daysinamonth = document.getElementById('daysinamonth').value

            switch(true){
                case daysinamonth == "january":
                    dayoseven.innerHTML = "<p class='text-white'>january has 31 days</p>"
                    document.getElementById("daysinamonth").value = ""
                break
                case daysinamonth == "february":
                    dayoseven.innerHTML = "<p class='text-white'>february has 28 days and 29 days in a leap year</p>"
                    document.getElementById("daysinamonth").value = ""
                break
                case daysinamonth == "march":
                    dayoseven.innerHTML = "<p class='text-white'>march has 31 days</p>"
                    document.getElementById("daysinamonth").value = ""
                break
                case daysinamonth == "april":
                    dayoseven.innerHTML = "<p class='text-white'>april has 30 days</p>"
                    document.getElementById("daysinamonth").value = ""
                break
                case daysinamonth == "may":
                    dayoseven.innerHTML = "<p class='text-white'>may has 31 days</p>"
                    document.getElementById("daysinamonth").value = ""
                break
                case daysinamonth == "june":
                    dayoseven.innerHTML = "<p class='text-white'>june has 30 days</p>"
                    document.getElementById("daysinamonth").value = ""
                break
                case daysinamonth == "july":
                    dayoseven.innerHTML = "<p class='text-white'>july has 31 days</p>"
                    document.getElementById("daysinamonth").value = ""
                break
                case daysinamonth == "august":
                    dayoseven.innerHTML = "<p class='text-white'>august has 31 days</p>"
                    document.getElementById("daysinamonth").value = ""
                break
                case daysinamonth == "september":
                    dayoseven.innerHTML = "<p class='text-white'>september has 30 days</p>"
                    document.getElementById("daysinamonth").value = ""
                break 
                case daysinamonth == "october":
                    dayoseven.innerHTML = "<p class='text-white'>october has 31 days</p>"
                    document.getElementById("daysinamonth").value = ""
                break 
                case daysinamonth == "november":
                    dayoseven.innerHTML = "<p class='text-white'>november has 30 days</p>"
                    document.getElementById("daysinamonth").value = ""
                break
                case daysinamonth == "december":
                    dayoseven.innerHTML = "<p class='text-white'>december has 31 days</p>"
                    document.getElementById("daysinamonth").value = ""
                break
                default:
                    dayoseven.innerHTML = "<p class='text-red-500'>Invalid input</p>"
                    document.getElementById("daysinamonth").value = ""
    
        }
        })



