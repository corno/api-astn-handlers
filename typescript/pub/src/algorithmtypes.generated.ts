import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"


export namespace ASYNC {
    
    export namespace I {
        
        export type ArrayHandler<GAnnotation> = {
            'data': ($: T.Annotation<GAnnotation>, ) => ASYNC.I.ValueHandler<GAnnotation>
            'end': ($: T.CloseArrayToken<GAnnotation>, ) => void
        }
        
        export type ObjectHandler<GAnnotation> = {
            'data': {
                readonly 'anonymousProperty': ($: T.Annotation<GAnnotation>, ) => ASYNC.I.ValueHandler<GAnnotation>
                readonly 'property': ($: T.SimpleStringToken<GAnnotation>, ) => ASYNC.I.RequiredValueHandler<GAnnotation>
            }
            'end': ($: T.CloseObjectToken<GAnnotation>, ) => void
        }
        
        export type OnArray<GAnnotation> = ($: T.OpenArrayToken<GAnnotation>, ) => ASYNC.I.ArrayHandler<GAnnotation>
        
        export type OnMissing<GAnnotation> = ($: T.Annotation<GAnnotation>, ) => void
        
        export type OnMultilineString<GAnnotation> = ($: T.MultilineStringToken<GAnnotation>, ) => void
        
        export type OnObject<GAnnotation> = ($: T.OpenObjectToken<GAnnotation>, ) => ASYNC.I.ObjectHandler<GAnnotation>
        
        export type OnSimpleString<GAnnotation> = ($: T.SimpleStringToken<GAnnotation>, ) => void
        
        export type OnTaggedUnion<GAnnotation> = ($: T.TaggedUnionToken<GAnnotation>, ) => ASYNC.I.TaggedUnionHandler<GAnnotation>
        
        export type RequiredValueHandler<GAnnotation> = {
            readonly 'exists': ASYNC.I.ValueHandler<GAnnotation>
            readonly 'missing': ASYNC.I.OnMissing<GAnnotation>
        }
        
        export type TaggedUnionHandler<GAnnotation> = {
            readonly 'missingOption': ($: T.Annotation<GAnnotation>, ) => ASYNC.I.RequiredValueHandler<GAnnotation>
            readonly 'option': ($: T.SimpleStringToken<GAnnotation>, ) => ASYNC.I.RequiredValueHandler<GAnnotation>
        }
        
        export type ValueHandler<GAnnotation> = {
            readonly 'array': ASYNC.I.OnArray<GAnnotation>
            readonly 'multilineString': ASYNC.I.OnMultilineString<GAnnotation>
            readonly 'object': ASYNC.I.OnObject<GAnnotation>
            readonly 'simpleString': ASYNC.I.OnSimpleString<GAnnotation>
            readonly 'taggedUnion': ASYNC.I.OnTaggedUnion<GAnnotation>
        }
    }
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace I {}
    
    export namespace IW {}
    
    export namespace A {}
}