//* Union types
export type ProjectType = "active" | "finished";

//* Project class
export class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectType
  ) {}
}
