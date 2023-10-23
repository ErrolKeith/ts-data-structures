interface Queue<T> {
  enqueue(item: T): void;
  dequeue(): T | undefined;
  size(): number;
}

export type Patient = {
  name: string;
  age: number;
};

export class WaitingRoom implements Queue<Patient> {
  private patients: Patient[] = [];
  public enqueue(patient: Patient) {
    this.patients.push(patient);
  }

  public dequeue() {
    return this.patients.shift();
  }

  public size() {
    return this.patients.length;
  }
}
