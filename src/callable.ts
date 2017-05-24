import r1dm=require("raml1-domain-model")

export import Type=r1dm.Type;
export import IAnnotated=r1dm.IAnnotated

export interface Scope extends IAnnotated{
    name(): string
    description(): string
}

export interface Shape extends IAnnotated{
    representationOf():Class
    type(): Type
    scopes(): Scope[]
}

export interface Parameter extends IAnnotated{
    name(): string
    location(): string
    required(): boolean
    shape(): Shape
}

export interface Operation extends IAnnotated{

    displayName(): string

    description(): string

    parameters(): Shape[];

    returnType(): Shape

    errorType(): Shape

    ownerClass(): Class

    ownerModule(): Module

    scopes(): Scope[]
}

export interface Class extends IAnnotated{

    shapes(): Shape[]

    methods(): Operation[];

    ownerModule(): Module
}

export interface Module extends IAnnotated{

    classes(): Class[]

    shapes(): Shape[]

    methods(): Operation[]

}