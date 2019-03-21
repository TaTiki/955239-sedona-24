(function() {
    var form = document.querySelector(".form-search");
    var inputs = form.querySelectorAll("input[type=text]");
    var btnSubmit = form.querySelector(".search-button");

    var btn = document.querySelector(".hotel-button");

    document.addEventListener("DOMContentLoaded", function() {

        if (typeof(form) != "undefined" && form != null) {
            form.classList.remove("no-js");
        }
    });

    if (typeof(btn) != "undefined" && btn != null) {
        btn.addEventListener("click", function(evt) {
            evt.preventDefault();
            form.classList.toggle("is-showed");
        });
    }

    if (typeof(btnSubmit) != "undefined" && btnSubmit != null) {
        var counter = 0;
        btnSubmit.addEventListener("click", function(event) {
            var Form = event.target.form;

            for (var i = 0; i < inputs.length; i++) {

                if (inputs[i].value !== "") {
                    counter++
                }
            }
            if (counter === inputs.length) {
                if (form.classList.contains("submit-error")) {
                    form.classList.remove("submit-error");
                }
                Form.submit();
            } else {
                event.preventDefault();
                form.classList.add("submit-error");
            }
        });
    }
}());