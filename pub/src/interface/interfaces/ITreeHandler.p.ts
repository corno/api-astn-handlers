import * as grammar from "../types/tokens"

export type IObjectHandler<Annotation> = {
    property: (
        $: {
            token: grammar.SimpleStringToken<Annotation>
        }
    ) => IRequiredValueHandler<Annotation>
    anonymousProperty: (
        $: {
            annotation: Annotation
        }
    ) => IValueHandler<Annotation>
    onEnd: ($: {
        token: grammar.CloseObjectToken<Annotation>
    }) => void
}

export type IArrayHandler<Annotation> = {
    element: (
        $: {
            annotation: Annotation
        }
    ) => IValueHandler<Annotation>
    onEnd: ($: {
        token: grammar.CloseArrayToken<Annotation>
    }) => void
}

export type ITaggedUnionHandler<Annotation> = {
    option: ($: {
        token: grammar.SimpleStringToken<Annotation>
    }) => IRequiredValueHandler<Annotation>
    missingOption: ($: {
        annotation: Annotation
    }) => IRequiredValueHandler<Annotation>
    end: ($: {}) => void
}

export type OnObject<Annotation> = ($: {
    token: grammar.OpenObjectToken<Annotation>
}) => IObjectHandler<Annotation>

export type OnArray<Annotation> = ($: {
    token: grammar.OpenArrayToken<Annotation>
}) => IArrayHandler<Annotation>

export type OnSimpleString<Annotation> = ($: {
    token: grammar.SimpleStringToken<Annotation>
}) => void

export type OnMultilineString<Annotation> = ($: {
    token: grammar.MultilineStringToken<Annotation>
}) => void

export type OnTaggedUnion<Annotation> = ($: {
    token: grammar.TaggedUnionToken<Annotation>
}) => ITaggedUnionHandler<Annotation>

export type OnMissing<Annotation> = (
    $: {
        annotation: Annotation
    }
) => void

export type IRequiredValueHandler<Annotation> = {
    exists: IValueHandler<Annotation>
    missing: OnMissing<Annotation>
}

export type IValueHandler<Annotation> = {
    object: OnObject<Annotation>
    array: OnArray<Annotation>
    multilineString: OnMultilineString<Annotation>
    simpleString: OnSimpleString<Annotation>
    taggedUnion: OnTaggedUnion<Annotation>
}

export type ITreeHandler<Annotation> = {
    root: IRequiredValueHandler<Annotation>
    onEnd: () => void
}