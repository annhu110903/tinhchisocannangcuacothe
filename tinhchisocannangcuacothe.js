function kiemtra() {
    let canNang = document.getElementById("canNang").value;
    let chieuCao = document.getElementById("chieuCao").value;
    let bmi = canNang / (Math.pow(chieuCao, 2));
    if (bmi < 18)
        result = "Underweight";
    else if (bmi < 25.0)
        result = "Normal";
    else if (bmi < 30.0)
        result = "Overweight";
    else
        result = "Obese";
    document.getElementById("result").innerHTML = "Chỉ số BMI là " + bmi + ". Bạn " + "<b>" + result + "</b>";
}
