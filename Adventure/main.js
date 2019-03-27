$(document).ready(function () {

    $("#add").on('click', function (e) {
        e.preventDefault()

        var num1 = Number($("#num1").val())
        var num2 = Number($("#num2").val())

        $("#answer").html(num1 + num2)

    })

    $("#sub").on('click', function (e) {
        e.preventDefault()

        var num1 = Number($("#num1").val())
        var num2 = Number($("#num2").val())

        $("#answer").html(num1 - num2)
    })

    $("#mult").on('click', function (e) {
        e.preventDefault()

        var num1 = Number($("#num1").val())
        var num2 = Number($("#num2").val())

        $("#answer").html(num1 * num2)
    })

    $("#divd").on('click', function (e) {
        e.preventDefault()

        var num1 = Number($("#num1").val())
        var num2 = Number($("#num2").val())

        $("#answer").html(num1 / num2)
    })


})
