$(() => {
    let number = 0;
    $("#addrow").on('click', function () {
        number++;
        AddRow();
    })

    $("#rows").on('click', '.btn-danger', function () {
        console.log("in button");
        var id = $(this).val();
        document.getElementById(id).remove();
    })

    function AddRow() {
        $("#rows").append(
            '<div class="row" id="' + number + '">' +
            '<div class="col-md-2 offset-md-2 mt-2">' +
            '<input type="text" name="people[' + number + '].firstname" placeholder="First Name" class="form-control" />' +
            '</div>' +
            '<div class="col-md-2 mt-2">' +
            '<input type="text" name="people[' + number + '].lastname" placeholder="Last Name" class="form-control" />' +
            '</div>' +
            '<div class="col-md-2 mt-2">' +
            '<input "type="text" name="people[' + number + '].age" placeholder="Age" class="form-control" />' +
            '</div>' +
            '<div class="col-md-2 mt-2">' +
            '<button type="button"  id="delete" value="' + number + '" class="btn btn-danger">Delete</button>' +
            '</div >' +
            '</div>'
        );
    }
})
