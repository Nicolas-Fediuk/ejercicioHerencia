class Persona{

    static contadorPersonas=0;

    constructor(nombre,apellido,edad){
        this._nombre=nombre;
        this._apellido=apellido;
        this._edad=edad;
        this._idPersona=++Persona.contadorPersonas;
    }

    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre=nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido=apellido;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad=edad;
    }

    toString(){
        return this.idPersona+" "+this.nombre+" "+this.apellido+" "+this.edad;
    }

}

let persona1=new Persona("Nicolas","Fediuk","21");
console.log(persona1.toString());

let persona2=new Persona("Pablo","Cabrea","43");
console.log(persona2.toString());

class Empleado extends Persona{ 

    static contadorEmpleados=0;

    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this._sueldo=sueldo;
        this._idEmpleado=++Empleado.contadorEmpleados;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo=sueldo;
    }
    toString(){
        return super.toString()+" "+this.idEmpleado+" "+this.sueldo;
    }
}

let empleado1 =new Empleado("Javier","Dias","43","1000");
console.log(empleado1.toString());

let empleado2 =new Empleado("Marta","Lopez","25","2000");
console.log(empleado2.toString());

class Cliente extends Persona{

    static contadorCliente=0;

    constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre,apellido,edad);
        this._fechaRegistro=fechaRegistro;
        this._idCliente=++Cliente.contadorCliente;
    }
    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro=fechaRegistro;
    }
    toString(){
       return super.toString()+" "+this.idCliente+" "+this.fechaRegistro;
    }
}

let cliente1=new Cliente("Carmen","Romero","65",new Date());
console.log(cliente1.toString());

let cliente2=new Cliente("Andrea","Echeveste","45",new Date());
console.log(cliente2.toString());