import * as pt from 'pareto-core-types'

import { T } from './types.generated'


export namespace I {
    
    export type ArrayHandler<GAnnotation> = {
        'element': ($: T.Annotation<GAnnotation>, ) => I.ValueHandler<GAnnotation>
        'onEnd': ($: T.CloseArrayToken<GAnnotation>, ) => void
    }
    
    export type ObjectHandler<GAnnotation> = {
        'anonymousProperty': ($: T.Annotation<GAnnotation>, ) => I.ValueHandler<GAnnotation>
        'onEnd': ($: T.CloseObjectToken<GAnnotation>, ) => void
        'property': ($: T.SimpleStringToken<GAnnotation>, ) => I.RequiredValueHandler<GAnnotation>
    }
    
    export type OnArray<GAnnotation> = ($: T.OpenArrayToken<GAnnotation>, ) => I.ArrayHandler<GAnnotation>
    
    export type OnMissing<GAnnotation> = ($: T.Annotation<GAnnotation>, ) => void
    
    export type OnMultilineString<GAnnotation> = ($: T.MultilineStringToken<GAnnotation>, ) => void
    
    export type OnObject<GAnnotation> = ($: T.OpenObjectToken<GAnnotation>, ) => I.ObjectHandler<GAnnotation>
    
    export type OnSimpleString<GAnnotation> = ($: T.SimpleStringToken<GAnnotation>, ) => void
    
    export type OnTaggedUnion<GAnnotation> = ($: T.TaggedUnionToken<GAnnotation>, ) => I.TaggedUnionHandler<GAnnotation>
    
    export type RequiredValueHandler<GAnnotation> = {
        'exists': I.ValueHandler<GAnnotation>
        'missing': I.OnMissing<GAnnotation>
    }
    
    export type TaggedUnionHandler<GAnnotation> = {
        'missingOption': ($: T.Annotation<GAnnotation>, ) => I.RequiredValueHandler<GAnnotation>
        'onEnd': () => void
        'option': ($: T.SimpleStringToken<GAnnotation>, ) => I.RequiredValueHandler<GAnnotation>
    }
    
    export type TreeHandler<GAnnotation> = {
        'onEnd': () => void
        'root': I.RequiredValueHandler<GAnnotation>
    }
    
    export type ValueHandler<GAnnotation> = {
        'array': I.OnArray<GAnnotation>
        'multilineString': I.OnMultilineString<GAnnotation>
        'object': I.OnObject<GAnnotation>
        'simpleString': I.OnSimpleString<GAnnotation>
        'taggedUnion': I.OnTaggedUnion<GAnnotation>
    }
}

export namespace B {}

export namespace F {}