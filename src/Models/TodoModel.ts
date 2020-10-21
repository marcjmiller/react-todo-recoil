
export class TodoModel {
  public id: number;
  public description: string;
  public dateCreated: number;
  public dateDue: number;
  public isComplete: boolean;
  public isArchived: boolean;
  public ownerId: number;

  constructor(id: number, description: string, dateDue: number, ownerId?: number) {
    this.id = id;
    this.description = description;
    this.dateCreated = new Date().getTime();
    this.dateDue = dateDue;
    this.isComplete = false;
    this.isArchived = false;
    this.ownerId = ownerId && ownerId > 0 ? ownerId : -1;
  }
}
