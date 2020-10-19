export class Todo {
  public id: number;
  public description: string;
  public dateCreated: number;
  public dateDue: number;
  public completed: boolean;
  public archived: boolean;

  constructor(id: number, description: string, dateCreated: number, dateDue: number) {
    this.id = id;
    this.description = description;
    this.dateCreated = dateCreated;
    this.dateDue = dateDue;
    this.completed = false;
    this.archived = false;
  }
}
