$(document).ready(
  function () {
    $("#appointment-form").validate({
      errorClass: "text-danger",
      rules: {
        name: {
          required: true,
          maxlength: 20,
          minlength: 2,
        },

        phone: {
          required: true,
          number: true,
        },

        email: {
          required: true,
          emailCustom: true,
        },

        reason: {
          required: true,
          minlength: 5,
        },

        member: {
          required: true,
         
        },

        date: {
          required: true,
        },

        hour: {
          required: true,
        },
        userType: {
          required: true,
          checkUserType: true,
        },
      },
    });

    $("#date").datepicker({
      format: 'mm/dd/yyyy',
      startDate: '-0d'
  });


    $.validator.addMethod(
      "emailCustom",
      function (email) {
        var regex =
          /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        let validation = regex.test(email);

        return validation;
      },
      "Please insert a valid Email - eg: example@email.com"
    );

    $.validator.addMethod(
      "checkUserType",
      function (userType) {
        return userType != "0" ? true : false;
      },
      "Choose a option - eg: Driver"
    );

    $("#schedule-appoiment").click(() => {
     
      if (!$("#appointment-form").valid()) {
        Swal.fire({
          title: "Info",
          text: "Please complete all form fields",
          icon: "info",
        });
        return false;
      }

      Swal.fire({
        title: "Are you sure to save?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Dismiss`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Success!", "", "success");

          data = {
            name: $("#name").val(),
            phone: $("#phone").val(),
            email: $("#email").val(),
            reason: $("#reason").val(),
            member: $("#member").val(),
            userType: $("#userType").val(),
            date: $("#date").val(),
            hour: $("#hour").val(),
          };
          localStorage.setItem("datos", JSON.stringify(data));
          $("input").val("");
        } 
        else if (result.isDenied) {
          Swal.fire("Changes not saved", "", "info");
        }
      });
    });
  } // function Validation
);
