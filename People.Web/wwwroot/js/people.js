$(() => {
    let number = 0;
    $("#addrow").on('click', function () {
        //console.log(GetPreviousValue());
        //number++;
        //var number = parseInt(GetPreviousValue()) + 1;
        number++;
        console.log(number);
        AddRow();
        console.log(document.getElementById("delete0"));
    })

    $("#delete").on('click', function () {
        document.getElementById("my-element").remove();
    })

    function AddRow() {
        $("#rows").append(
            '<div class="col-md-2 offset-md-2 mt-2">' +
            '<input type="text" name="people[' + number + '].firstname" placeholder="First Name" class="form-control" />' +
            '</div>' +
            '<div class="col-md-2 mt-2">' +
            '<input type="text" name="people[' + number + '].lastname" placeholder="Last Name" class="form-control" />' +
            '</div>' +
            '<div class="col-md-2 mt-2">' +
            '<input type="text" name="people[' + number + '].age" placeholder="Age" class="form-control" />' +
            '</div>' +
            '<div id="delete" class="col-md-2 mt-2">' +
            '<ng form>'+
            '<p id=' + number + ' class="btn btn-danger">Delete</p>' +
            '</ng form>'+
            '</div>' +
            '</div>'
        );

    }
    function GetPreviousValue() {
        //var v = $("#btn").closest("div#btn").find("button[class='btn btn - primary']").val();
        //console.log(v);

        //var value = $("#rows").closest("div#age").find("input[placeholder='Age']").val();

        //var value = document.querySelector('input:last-of-type').value;

        //var value = $("#rows").closest("div#age").find("input[placeholder='Age']").val();
        //console.log($("#rows").closest("div#age").find("input[placeholder='Age']"));
        //return value;
    }

    var element = document.getElementById("delete"+number)

    //document.querySelector('body > div:last-of-type').remove();

    //var table = document.getElementById(table1);
    //var lastRow = table.rows.length;

    //var country = lastRow.getElementById('Country');
    //country.setAttribute('class', "Country" + lastRow); 
    //$(".add").on("click", function () {
    //    var val = $(this).closest("div.options").find("input[name='quantity']").val();
    //});
    // the closest ancestor with the id of "div-02"
    //console.log(el.closest("#div-02")); // <div id="div-02">
})
