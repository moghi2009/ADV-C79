var student_array = [];

function submit(){
    var name1 = document.getElementById("name_student1").value;
    var name2 = document.getElementById("name_student2").value;
    var name3 = document.getElementById("name_student3").value;
    var name4 = document.getElementById("name_student4").value;

    student_array.push(name1);
    student_array.push(name2);
    student_array.push(name3);
    student_array.push(name4);

    console.log(student_array)
    document.getElementById("display_name").innerHTML = student_array;

    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "inline";
}

function sorting(){
    student_array.sort();
    console.log(student_array);
    document.getElementById("display_name").innerHTML = student_array;
}