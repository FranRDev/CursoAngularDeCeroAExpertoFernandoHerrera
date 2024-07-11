import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Usuario {
    _id?: string;
    @Prop({ required: true })
    nombre: string;
    @Prop({ unique: true, required: true })
    correo: string;
    @Prop({ minlength: 6, required: true })
    clave?: string;
    @Prop({ type: [String], default: ['usuario'] })
    roles: string[];
    @Prop({ default: true })
    activo: boolean;
}

export const EsquemaUsuario = SchemaFactory.createForClass(Usuario);