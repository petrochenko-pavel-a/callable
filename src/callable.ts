import r1dm=require("raml1-domain-model")

export import Type=r1dm.Type;
export import IAnnotated=r1dm.IAnnotated

export interface Scope extends IAnnotated{
    name(): string
    description(): string
}

export interface ShapeConstructionRule{
    kind(): string
}
export interface ReferenceBuildRule extends ShapeConstructionRule{

    propertyPath(): string

}

export interface ObjectTransformationBuildRule extends ShapeConstructionRule{

    propertiesToIgnore(): string[]

    propertiesToTransform(): { [name:string]: ShapeConstructionRule}
}

export interface Shape extends IAnnotated{
    representationOf():Class
    type(): Type
    scopes(): Scope[]
    rule(): ShapeConstructionRule
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

    requiredScopes(): Scope[]
}

export interface Class extends IAnnotated{

    shapes(): Shape[]

    methods(): Operation[];

    ownerModule(): Module

    superClasses(): Class[]

    properties(): Property[]

    declaredProperties(): Property[]
}

export interface Property{

    name(): string

    required(): boolean

    shape(): Shape

    visibleIn(): Scope[]

    requiredIn(): Scope[]

    declaresScopes():Scope[]

    closesScopes(): Scope[]
}

export interface Module extends IAnnotated{

    classes(): Class[]

    shapes(): Shape[]

    methods(): Operation[]

    scopes(): Scope[]

}