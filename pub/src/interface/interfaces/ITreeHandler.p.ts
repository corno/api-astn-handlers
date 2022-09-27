import * as types from "../types/tokens.p"

export type IObjectHandler<PAnnotation> = {
    readonly "property": (
        $: {
            readonly "token": types.TSimpleStringToken<PAnnotation>
        }
    ) => IRequiredValueHandler<PAnnotation>
    readonly "anonymousProperty": (
        $: {
            readonly "annotation": PAnnotation
        }
    ) => IValueHandler<PAnnotation>
    readonly "onEnd": ($: {
        readonly "token": types.TCloseObjectToken<PAnnotation>
    }) => void
}

export type IArrayHandler<PAnnotation> = {
    readonly "element": (
        $: {
            readonly "annotation": PAnnotation
        }
    ) => IValueHandler<PAnnotation>
    readonly "onEnd": ($: {
        readonly "token": types.TCloseArrayToken<PAnnotation>
    }) => void
}

export type ITaggedUnionHandler<PAnnotation> = {
    readonly "option": ($: {
        readonly "token": types.TSimpleStringToken<PAnnotation>
    }) => IRequiredValueHandler<PAnnotation>
    readonly "missingOption": ($: {
        readonly "annotation": PAnnotation
    }) => IRequiredValueHandler<PAnnotation>
    readonly "end": ($: {}) => void
}

export type OnObject<PAnnotation> = ($: {
    readonly "token": types.TOpenObjectToken<PAnnotation>
}) => IObjectHandler<PAnnotation>

export type OnArray<PAnnotation> = ($: {
    readonly "token": types.TOpenArrayToken<PAnnotation>
}) => IArrayHandler<PAnnotation>

export type OnSimpleString<PAnnotation> = ($: {
    readonly "token": types.TSimpleStringToken<PAnnotation>
}) => void

export type OnMultilineString<PAnnotation> = ($: {
    readonly "token": types.TMultilineStringToken<PAnnotation>
}) => void

export type OnTaggedUnion<PAnnotation> = ($: {
    readonly "token": types.TTaggedUnionToken<PAnnotation>
}) => ITaggedUnionHandler<PAnnotation>

export type OnMissing<PAnnotation> = (
    $: {
        readonly "annotation": PAnnotation
    }
) => void

export type IRequiredValueHandler<PAnnotation> = {
    readonly "exists": IValueHandler<PAnnotation>
    readonly "missing": OnMissing<PAnnotation>
}

export type IValueHandler<PAnnotation> = {
    readonly "object": OnObject<PAnnotation>
    readonly "array": OnArray<PAnnotation>
    readonly "multilineString": OnMultilineString<PAnnotation>
    readonly "simpleString": OnSimpleString<PAnnotation>
    readonly "taggedUnion": OnTaggedUnion<PAnnotation>
}

export type ITreeHandler<PAnnotation> = {
    readonly "root": IRequiredValueHandler<PAnnotation>
    readonly "onEnd": () => void
}