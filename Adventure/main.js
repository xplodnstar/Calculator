$(document).ready(function () {
    // create four variables as placeholders
    let num1 = ''
    let num2 = ''
    let opr = ''
    let tot = ''

    // determine if the button is a number or operator
    $('button').on('click', function (e) {
        let btn = e.target.innerHTML
        if (btn >= '0' && btn <= '9') {
            setNum(btn)
        } else {
            setOpr(btn)
        }
        console.log(num1)
        console.log(opr)
        console.log(num2)
    })

    // if num1 is empty, enter the number there, if not empty, put in num2
    function setNum(num) {
        if (num1 === '' || num1 == null) {
            num1 = num
        } else if
            (num1 !== null) {
            num2 = num
        }
        view1(num1)
        view3(num2)
    }

    // if the operator is empty, fill it, otherwise, calculate the total
    function setOpr(opr) {
        if (opr === '' || opr == null) {
            opr = opr
        } else {
            makeTot()
        }
        view2(opr)
    }



    // use the correct calculation type for each operator NOT WORKING
    function makeTot() {
        num1 opr num2
        // if (opr === '+') {
        //     tot = Number(num1) + Number(num2)
        //     $('#answer').html(tot.toFixed(2))
        // } else if
        //     (opr === '-') {
        //     tot = Number(num1) - Number(num2)
        //     $('#answer').html(tot.toFixed(2))
        // } else if
        //     (opr === 'x') {
        //     tot = Number(num1) * Number(num2)
        //     $('#answer').html(tot.toFixed(2))
        // } else {
        //     (opr === '/')
        //     tot = Number(num1) / Number(num2)
        //     $('#answer').html(tot.toFixed(2))
        // }
        console.log(tot)
    }

    function view1(btn) {
        $('#num1').val(btn)
    }

    function view2(btn) {
        $('#opr').val(btn)
    }

    function view3(btn) {
        $('#num2').val(btn)
    }

    $('#clr').on('click', function () {
        $('#num1').val(null)
        $('#num2').val(null)
        $('#opr').val(null)
        num1 = ''
        num2 = ''
        opr = ''
    })

    $('#equals').on('click', function () {
        makeTot()
        $('#num1').val(null)
        $('#num2').val(null)
        $('#opr').val(null)
        num1 = ''
        num2 = ''
        opr = ''
    })

})
