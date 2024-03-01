export class Doctor {
  constructor(
    public image: string | ArrayBuffer | undefined | null,
    public name: string,
    public profession: string,
    public specializations: string[],
    public education: string,
    public experience: string,
    public certifications: string[]
  ) {}
}