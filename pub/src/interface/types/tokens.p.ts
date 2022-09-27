import * as pt from "pareto-core-types"

export type TAnnotatedToken<Token, PAnnotation> = {
    readonly "token": Token
    readonly "annotation": PAnnotation
}

export type TWrapping =
    | ["quote", null]
    | ["apostrophe", null]
    | ["none", null]


export type TOpenObject = {
    readonly "type":
    | ["verbose group", null]
    | ["dictionary", null]
}

export type TOpenArray = {
    readonly "type":
    | ["shorthand group", null]
    | ["list", null]
}

export type TSimpleString = {
    readonly "wrapping": TWrapping
    readonly "value": string
}

export type TMultilineString = {
    readonly "lines": pt.Array<string>
}

export type TCloseObject = null

export type TCloseArray = null

export type TTaggedUnion = null

export type TCloseArrayToken<PAnnotation> = TAnnotatedToken<TCloseArray, PAnnotation>

export type TCloseObjectToken<PAnnotation>  = TAnnotatedToken<TCloseObject, PAnnotation>

export type TOpenArrayToken<PAnnotation> = TAnnotatedToken<TOpenArray, PAnnotation>

export type TOpenObjectToken<PAnnotation> = TAnnotatedToken<TOpenObject, PAnnotation>

export type TSimpleStringToken<PAnnotation> = TAnnotatedToken<TSimpleString, PAnnotation>

export type TMultilineStringToken<PAnnotation> = TAnnotatedToken<TMultilineString, PAnnotation>

export type TTaggedUnionToken<PAnnotation> = TAnnotatedToken<TTaggedUnion, PAnnotation>