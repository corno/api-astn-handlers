import * as pt from 'pareto-core-types'

import { T   } from './types.generated'


export type IArrayHandler<GPAnnotation> = {
    'element': ($: T.Annotation<GPAnnotation>, ) => IValueHandler<GPAnnotation>
    'onEnd': ($: T.CloseArrayToken<GPAnnotation>, ) => void
}

export type IObjectHandler<GPAnnotation> = {
    'anonymousProperty': ($: T.Annotation<GPAnnotation>, ) => IValueHandler<GPAnnotation>
    'onEnd': ($: T.CloseObjectToken<GPAnnotation>, ) => void
    'property': ($: T.SimpleStringToken<GPAnnotation>, ) => IRequiredValueHandler<GPAnnotation>
}

export type IOnArray<GPAnnotation> = ($: T.OpenArrayToken<GPAnnotation>, ) => IArrayHandler<GPAnnotation>

export type IOnMissing<GPAnnotation> = ($: T.Annotation<GPAnnotation>, ) => void

export type IOnMultilineString<GPAnnotation> = ($: T.MultilineStringToken<GPAnnotation>, ) => void

export type IOnObject<GPAnnotation> = ($: T.OpenObjectToken<GPAnnotation>, ) => IObjectHandler<GPAnnotation>

export type IOnSimpleString<GPAnnotation> = ($: T.SimpleStringToken<GPAnnotation>, ) => void

export type IOnTaggedUnion<GPAnnotation> = ($: T.TaggedUnionToken<GPAnnotation>, ) => ITaggedUnionHandler<GPAnnotation>

export type IRequiredValueHandler<GPAnnotation> = {
    'exists': IValueHandler<GPAnnotation>
    'missing': IOnMissing<GPAnnotation>
}

export type ITaggedUnionHandler<GPAnnotation> = {
    'missingOption': ($: T.Annotation<GPAnnotation>, ) => IRequiredValueHandler<GPAnnotation>
    'onEnd': () => void
    'option': ($: T.SimpleStringToken<GPAnnotation>, ) => IRequiredValueHandler<GPAnnotation>
}

export type ITreeHandler<GPAnnotation> = {
    'onEnd': () => void
    'root': IRequiredValueHandler<GPAnnotation>
}

export type IValueHandler<GPAnnotation> = {
    'array': IOnArray<GPAnnotation>
    'multilineString': IOnMultilineString<GPAnnotation>
    'object': IOnObject<GPAnnotation>
    'simpleString': IOnSimpleString<GPAnnotation>
    'taggedUnion': IOnTaggedUnion<GPAnnotation>
}