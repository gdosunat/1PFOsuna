export class Alumno {

  constructor(
    public id: number,
    public nombre: string,
    public apellido: string,
    public sexo: "Femenino" | "Masculino",
    public email: string,
    public pais: string
    ){}
}
