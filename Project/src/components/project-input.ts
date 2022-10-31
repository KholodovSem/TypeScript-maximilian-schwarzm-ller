import { Component } from "./base-component";
import { ValidateObject, validate } from "../utils/validation";
import { projectState } from "../state/project-state-module";
import { BindThis } from "../decorators/autobind";

//*Project input class
export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleElement: HTMLInputElement;
  descriptionElement: HTMLTextAreaElement;
  peopleElement: HTMLInputElement;

  constructor() {
    super("project-input", "app", true, "user-input");
    this.titleElement = <HTMLInputElement>this.element.querySelector("#title");
    this.descriptionElement = <HTMLTextAreaElement>(
      this.element.querySelector("#description")
    );
    this.peopleElement = <HTMLInputElement>(
      this.element.querySelector("#people")
    );

    this.configure();
  }

  configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }

  renderContent() {}

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleElement.value;
    const enteredDescription = this.descriptionElement.value;
    const enteredPeople = this.peopleElement.value;

    const titleValidatable = new ValidateObject({
      value: enteredTitle,
      required: true,
    });
    const descriptionValidatable = new ValidateObject({
      value: enteredDescription,
      required: true,
      minLength: 5,
    });
    const peopleValidatable = new ValidateObject({
      value: Number(enteredPeople),
      required: true,
      min: 1,
    });

    if (
      !validate(titleValidatable) ||
      !validate(descriptionValidatable) ||
      !validate(peopleValidatable)
    ) {
      alert("Invalid input, try again!");
      return;
    }
    return [enteredTitle, enteredDescription, Number(enteredPeople)];
  }

  @BindThis
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, description, people] = userInput;
      projectState.addProject(title, description, people);
      this.element.reset();
    }
  }
}
