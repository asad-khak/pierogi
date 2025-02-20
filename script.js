document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Столик забронирован!");
});

document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Спасибо за ваш отзыв!");
});
