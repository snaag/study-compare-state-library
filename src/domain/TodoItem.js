export class TodoItem {
    id;
    text;
    isDone;

    constructor(id, text, isDone=false) {
        this.id = id;
        this.text = text;
        this.isDone = isDone;
    }
}
