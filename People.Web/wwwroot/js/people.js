$(() => {
    let number = 0;
    $("#addrow").on('click', function () {
        number++;
        AddRow();
    })

    $("#rows").on('click', '.btn-danger', function () {
        const button = $(this);
        const row = button.closest('.row');
        row.remove();

        let counter = 0;
        $(".person-row").each(function () {
            console.log('came in');
            const row = $(this);
            const inputs = row.find('input');
            console.log(inputs);
            $(inputs).each(function () {
                console.log('in here too');
                const input = $(this);
                const name = input.attr('name');
                console.log(name);
                const IndexOfDot = name.IndexOf('.');
                const attrName = name.substring(IndexOfDot + 1);
                input.attr('name', `people[${counter}].${attrName}`);
            });
            counter++;
            number = counter;
        });
    });

    function AddRow() {
        $("#rows").append(
            '<div class="row person-row" id="' + number + '">' +
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
