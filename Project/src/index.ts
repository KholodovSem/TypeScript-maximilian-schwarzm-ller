import { ProjectInput } from "./components/project-input";
import { ProjectList } from "./components/project-list";
import "./styles/app.scss";

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");
