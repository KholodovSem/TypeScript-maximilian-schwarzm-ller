//* Component Base Class
export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
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
