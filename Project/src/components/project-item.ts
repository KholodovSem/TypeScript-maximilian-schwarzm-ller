import { Component } from "./base-component";
import { Draggable } from "../models/drag-drop";
import { Project } from "../models/project";
import { BindThis } from "../decorators/autobind";

//* Project item
export class ProjectItem
  extends Component<HTMLUListElement, HTMLLIElement>
  implements Draggable
{
  private project: Project;

  get persons() {
    if (this.project.people === 1) {
      return "1 person";
    } else {
      return `${this.project.people} persons`;
    }
  }

  constructor(hostId: string, project: Project) {
    super("single-project", hostId, false, project.id);
    console.log(this.element);
    this.project = project;

    this.configure();
    this.renderContent();
  }

  @BindThis
  dragStartHandler(_event: DragEvent) {
    _event.dataTransfer!.setData("text/plain", this.project.id);
    _event.dataTransfer!.effectAllowed = "move";
  }

  @BindThis
  dragEndHandler(_event: DragEvent) {}

  configure() {
    this.element.addEventListener("dragstart", this.dragStartHandler);
    this.element.addEventListener("dragend", this.dragEndHandler);
  }
  renderContent() {
    this.element.querySelector("h2")!.textContent = this.project.title;
    this.element.querySelector("h3")!.textContent = this.persons;
    this.element.querySelector("p")!.textContent = this.project.description;
  }
}
