export class Alumno {

  constructor(
    public id: number,
    public nombre: string,
    public apellido: string,
    public fechaNacimiento: Date,
    public sexo: "Femenino" | "Masculino",
    public email: string
    ){}
}
