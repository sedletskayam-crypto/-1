function verify() {
    console.log("A, H, R, M");

    let A = parseFloat(document.getElementsByName('A')[0].value);
    let H = parseFloat(document.getElementsByName('H')[0].value);
    let R = parseFloat(document.getElementsByName('R')[0].value);
    let M = parseFloat(document.getElementsByName('M')[0].value);

    console.log(A, H, R, M);

    if (isNaN(A) || isNaN(H) || isNaN(R) || isNaN(M) ||
        A < 0 || H < 0 || R < 0 || M < 0) {
        document.getElementById("result").value = "Ошибка: введите положительные числа";
        check = false;
        return;
    }

    let V1 = Math.pow(A, 3);

    let V2 = Math.PI * Math.pow(R, 2) * H;

    let inCube = M <= V1;      
    let inCylinder = M <= V2;  

    let result;

    if (inCube && inCylinder) {
        result = "Поместится в обе ёмкости";
        check = true;
    } else if (inCube) {
        result = "Поместится только в кубическую ёмкость";
        check = true;
    } else if (inCylinder) {
        result = "Поместится только в цилиндрическую ёмкость";
        check = true;
    } else {
        result = "Не поместится ни в одну ёмкость";
        check = false;
    }

    document.getElementById("result").value = result;
}

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);