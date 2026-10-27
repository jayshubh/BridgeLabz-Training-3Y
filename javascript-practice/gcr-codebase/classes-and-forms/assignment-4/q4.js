class FormBuilder {
  constructor(fields, root) {
    this.fields = fields;
    this.root = root;
  }

  render() {
    const form = document.createElement("form");
    for (const field of this.fields) {
      const label = document.createElement("label");
      label.textContent = field.label;
      const input = document.createElement("input");
      input.type = field.type;
      input.name = field.name;
      input.required = Boolean(field.required);
      label.append(input);
      form.append(label, document.createElement("br"));
    }
    const submit = document.createElement("button");
    submit.type = "submit";
    submit.textContent = "Submit";
    form.append(submit);
    this.root.replaceChildren(form);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      document.querySelector("#result").textContent =
        JSON.stringify(this.getFormData(form), null, 2);
    });
  }

  getFormData(form) {
    return Object.fromEntries(new FormData(form).entries());
  }
}

new FormBuilder([
  { type: "text", name: "username", label: "Username", required: true },
  { type: "email", name: "email", label: "Email", required: true },
], document.querySelector("#form-root")).render();
