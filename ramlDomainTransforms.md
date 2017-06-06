The often case in data modeling is when you have domain entity(model class) which can be represented 
by different data structures depending from context.
 
![Diagram](Domain_model.png)
 
 
The goal of this module is to provide an approach to mark a connections between domain classes and shapes
and implementation which is capable to perform this transformations at runtime.


----

At first let's define a way how we mark RAML data type as a shape of some other type.

RAML Shapes are using `shapeOf` annotation to do it.

let's look on the following sample

```raml
NewPersonData:
  (core.shapeOf): Person
  properties:
    name: string
    lastName: string

```

Here we are marking `NewPersonData` type as a shape of `Person` model class.

This annotation may be only be applied to the types which have an `object` type as a root of their
super type hierarchy. Domain class also should be a direct descendant of an object type.

---

## Conversion from the model to shape:  

Conversion from the model to shape is defined when system knows how to fill all properties
of shape type.

We use following algorithm to perform a conversion which is performed for every property 
of shape type.

1. If domain model has a property with a same name exists: check if the system knows how to transform value of this
property into value of the shape property. If transformation is undefined then whole conversion of model instance to 
shape instance can not be executed

2. If shape property has an annotation `property` and this annotation values is the name of the property
of domain class, or qualified name of the property of the domain class, then: check if the system knows how to transform value of this
property into value of the shape property. If transformation is undefined then whole conversion of model instance to 
shape instance can not be executed

Value conversion is executed by the following algorithm: 

1. if values have a type with same structural constraints then no conversion is needed
2. If target value is a shape of model property value then conversion from model to shape is executed
3. If target value is a reference to model property value then conversion to reference is executed
4. Otherwise conversion can not be performed and algorithm should abort.


```raml

```