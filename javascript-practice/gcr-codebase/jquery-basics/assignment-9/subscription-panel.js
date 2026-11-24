$(function () {
  let notificationsEnabled = false;
  const showMessage = (text) => $("<strong>").text(text).appendTo($("#message").empty());

  $("#subscribe").on("click", function () {
    notificationsEnabled = true;
    showMessage("Notifications enabled.");
  });

  $("#unsubscribe").on("click", function () {
    notificationsEnabled = false;
    showMessage("Notifications disabled.");
  });

  // Delegated .on() automatically attaches to dynamically added topics.
  $("#topics").on("click", ".topic", function () {
    showMessage(notificationsEnabled
      ? `Subscribed interest: ${$(this).clone().children().remove().end().text().trim()}`
      : "Enable notifications first.");
  });

  $("#topics").on("click", ".remove", function (event) {
    event.stopPropagation();
    $(this).parent().off().remove();
    showMessage("Subscription removed.");
  });

  $("#addTopic").on("click", function () {
    const $topic = $("<div>", { class: "topic", text: "New Tech Topic " });
    const $remove = $("<button>", { class: "remove", type: "button", text: "Remove" });
    $topic.append($remove).appendTo("#topics");
    showMessage("New subscription topic added.");
  });
});
