var math = document.querySelector('#math')
var chemistry =document.querySelector ('#chemistry')
var physics = document.querySelector('#physics')
var biology = document.querySelector('#biology')
var totalmarks = 400
var studenttotal = document.querySelector('#student-marks')
var percentage = document.querySelector('#percentage')
var grade = document.querySelector('#grade')

// console.log (math.value)

// console.log(studenttotal.innerHTML);

function result (){
    
    studenttotal.innerHTML = Number(math.value) + Number(chemistry.value) + Number(physics.value) + Number(biology.value)
    percentage.innerHTML = studenttotal.innerHTML / totalmarks *100

    if(percentage.innerHTML > 80){
        grade.innerHTML = 'A+'
    }
    else if(percentage.innerHTML > 70){
        grade.innerHTML = 'A'
    }
    else if(percentage.innerHTML > 60){
        grade.innerHTML = 'B'
    }
    else if(percentage.innerHTML > 50){
        grade.innerHTML = 'C'
    }
    else if(percentage.innerHTML > 40){
        grade.innerHTML = 'D'
    }
    else if(percentage.innerHTML < 30){
        grade.innerHTML = 'FAIL'
    }
math.value = ""
chemistry.value = ""
physics.value = ""
biology.value = ""


}