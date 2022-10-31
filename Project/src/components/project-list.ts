import { Component } from "./base-component";
import { projectState } from "../state/project-state-module";
import { BindThis } from "../decorators/autobind";
import { DragTarget } from "../models/drag-drop";
import { Project, ProjectType } from "../models/project";
import { ProjectItem } from "./project-item";

//*Project list class
export class ProjectList
  extends Component<HTMLDivElement, HTMLElement>
  implements DragTarget
{
  assignedProjects: Project[];

  constructor(private type: ProjectType) {
    super("project-list", "app", false, `${type}-projects`);
    this.assignedProjects = [];

    this.configure();
    this.renderContent();
  }

  @BindThis
  dragOverHandler(_event: DragEvent) {
    if (_event.dataTransfer && _event.dataTransfer.types[0] === "text/plain") {
      _event.preventDefault();
      const listEl = this.element.querySelector("ul")!;
      listEl.classList.add("droppable");
    }
  }

  @BindThis
  dropHandler(_event: DragEvent) {
    const projectId = _event.dataTransfer!.getData("text/plain");
    projectState.moveProject(
      projectId,
      this.type === "active" ? "active" : "finished"
    );
  }

  @BindThis
  dragLeaveHandler(_event: DragEvent) {
    const listEl = this.element.querySelector("ul")!;
    listEl.classList.remove("droppable");
  }

  renderProjects() {
    const listEl = document.getElementById(`${this.type}-project-list`)!;
    listEl.innerHTML = "";
    for (const prjItem of this.assignedProjects) {
      new ProjectItem(this.element.querySelector("ul")!.id, prjItem);
    }
  }

  renderContent() {
    const listId = `${this.type}-project-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector("h2")!.textContent =
      this.type.toUpperCase() + " PROJECTS";
  }

  configure() {
    this.element.addEventListener("dragover", this.dragOverHandler);
    this.element.addEventListener("dragleave", this.dragLeaveHandler);
    this.element.addEventListener("drop", this.dropHandler);
    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter((p) => {
        if (this.type === "active") {
          return p.status === "active";
        }
        return p.status === "finished";
      });
      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });
  }
}
