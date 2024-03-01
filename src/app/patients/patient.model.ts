export class Patient {
  constructor(
    public name: string,
    public complaint: string,
    public doctor: string,
    public cnp: string,
    public contact: string,
    public drugs?: string[],
    public allergies?: string[],
    public operations?: string[]
  ) {}
}