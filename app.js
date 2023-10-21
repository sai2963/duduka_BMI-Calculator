document.getElementById('bmi').addEventListener('submit', function (e) {
    e.preventDefault();

    let gender = document.getElementById('form-select').value;
    let age = document.getElementById('userage').value;
    let heightfeets = parseFloat(document.getElementById('userheight1').value);
    let heightinches = parseFloat(document.getElementById('userheight2').value);
    let weight = parseFloat(document.getElementById('userweight').value);
    let button1 = document.getElementById('btn1').value;
    let bmi1 = document.getElementById('bmivalue');
    let bmi2 = document.getElementById('bmitype');

    let height = ((heightfeets * 12) + heightinches) * 0.0254;
    let bmi = weight / (height * height);
    
    let category = "";
    if (bmi < 18.5) {
        category = "underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'normal weight';
    } else if (bmi >= 24.9 && bmi <= 29.9) {
        category = 'overweight';
    } else {
        category = 'obese';
    }
    let result = 'Your BMI: ' + bmi.toFixed(2) + '<br>';
   

    bmi1.innerHTML = result;
    bmi2.innerHTML = 'Category: ' + category;

});
