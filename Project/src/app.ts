//* Drag & Drop Interfaces
interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}

interface DragTarget {
  dragOverHandler(event: DragEvent): void;
  dropHandler(event: DragEvent): void;
  dragLeaveHandler(event: DragEvent): void;
}

//* Project class
class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectType
  ) {}
}

//* Project state manager
type Listener<T> = (items: T[]) => void;

class State<T> {
  protected listeners: Listener<T>[] = [];

  addListener(listener: Listener<T>) {
    this.listeners.push(listener);
  }
}

class ProjectState extends State<Project> {
  private projects: Project[] = [];
  private static instance: ProjectState;

  private constructor() {
    super();
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, description: string, people: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      people,
      "active"
    );
    this.projects.push(newProject);
    this.updateListener();
  }

  moveProject(id: string, newStatus: ProjectType) {
    const project = this.projects.find((p) => p.id === id);
    if (project && project.status !== newStatus) {
      project.status = newStatus;
      this.updateListener();
    }
  }

  private updateListener() {
    for (const listenerFn of this.listeners) {
      listenerFn([...this.projects]);
    }
  }
}

const projectState = ProjectState.getInstance();

//* Component Base Class
abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(
    templateElement: string,
    hostElement: string,
    insertAtStart: boolean,
    newElementId?: string
  ) {
    this.templateElement = <HTMLTemplateElement>(
      document.getElementById(templateElement)
    );
    this.hostElement = <T>document.getElementById(hostElement);

    const templateContent = <DocumentFragment>(
      this.templateElement.content.cloneNode(true)
    );
    this.element = <U>templateContent.firstElementChild;
    if (newElementId) {
      this.element.id = newElementId;
    }

    this.attach(insertAtStart);
  }

  private attach(insertAtBeginning: boolean) {
    this.hostElement.insertAdjacentElement(
      insertAtBeginning ? "afterbegin" : "beforeend",
      this.element
    );
  }

  abstract configure?(): void;
  abstract renderContent?(): void;
}
//* SIngle project class
class ProjectItem
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
  dragEndHandler(_event: DragEvent) {
    console.log("DragEnd");
  }

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

//*Project list class
class ProjectList
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

//*Project input class
class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
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

const projectInput = new ProjectInput();
const activeProjectList = new ProjectList("active");
const finishedProjectList = new ProjectList("finished");

//-------------------------------------Helpers-------------------------------------------

//* Union types
type ProjectType = "active" | "finished";

//* Validation
interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

class ValidateObject {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;

  constructor(configObj: Validatable) {
    this.value = configObj.value;
    if (configObj.required) {
      this.required = configObj.required;
    }
    if (configObj.minLength) {
      this.minLength = configObj.minLength;
    }
    if (configObj.maxLength) {
      this.maxLength = configObj.maxLength;
    }
    if (configObj.min) {
      this.min = configObj.min;
    }
    if (configObj.max) {
      this.max = configObj.max;
    }
  }
}

function validate(validatableInput: Validatable) {
  let isValid = true;

  if (validatableInput.required) {
    isValid = isValid && validatableInput.value.toString().length !== 0;
  }
  if (
    validatableInput.minLength != null &&
    typeof validatableInput.value === "string"
  ) {
    isValid =
      isValid && validatableInput.value.length >= validatableInput.minLength;
  }
  if (
    validatableInput.maxLength != null &&
    typeof validatableInput.value === "string"
  ) {
    isValid =
      isValid && validatableInput.value.length <= validatableInput.maxLength;
  }
  if (
    validatableInput.min != null &&
    typeof validatableInput.value === "number"
  ) {
    isValid = isValid && validatableInput.value >= validatableInput.min;
  }
  if (
    validatableInput.max != null &&
    typeof validatableInput.value === "number"
  ) {
    isValid = isValid && validatableInput.value <= validatableInput.max;
  }

  return isValid;
}
//---------------------------------------Decorators-----------------------------------------------
//* Autobinding
function BindThis(
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalFn = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const modifyFn = originalFn.bind(this);
      return modifyFn;
    },
  };
  return adjDescriptor;
}
