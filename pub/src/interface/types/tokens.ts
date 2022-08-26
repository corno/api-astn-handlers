import * as pt from "pareto-core-types"

export type AnnotatedToken<Token, Annotation> = {
    readonly "token": Token
    readonly "annotation": Annotation
}

export type Wrapping =
    | ["quote", { }]
    | ["apostrophe", { }]
    | ["none", { }]


export type OpenObject = {
    readonly "type":
    | ["verbose group", {}]
    | ["dictionary", {}]
}

export type OpenArray = {
    readonly "type":
    | ["shorthand group", {}]
    | ["list", {}]
}

export type SimpleString = {
    readonly "wrapping": Wrapping
    readonly "value": string
}

export type MultilineString = {
    readonly "lines": pt.Array<string>
}

export type CloseObject = { }

export type CloseArray = { }

export type TaggedUnion = { }

export type CloseArrayToken<Annotation> = AnnotatedToken<CloseArray, Annotation>

export type CloseObjectToken<Annotation>  = AnnotatedToken<CloseObject, Annotation>

export type OpenArrayToken<Annotation> = AnnotatedToken<OpenArray, Annotation>

export type OpenObjectToken<Annotation> = AnnotatedToken<OpenObject, Annotation>

export type SimpleStringToken<Annotation> = AnnotatedToken<SimpleString, Annotation>

export type MultilineStringToken<Annotation> = AnnotatedToken<MultilineString, Annotation>

export type TaggedUnionToken<Annotation> = AnnotatedToken<TaggedUnion, Annotation>