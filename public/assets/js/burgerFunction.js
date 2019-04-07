import { puts } from "util";

$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");

        var newDevouredState = {
            eaten: newDevoured
        };

        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: newDevoured
        }).then(
            function () {
                console.log("change eaten state to ", newDevoured);
            }
        );
    });

    $("create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burger").val().trim();
        }
    })
})