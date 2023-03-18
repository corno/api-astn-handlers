import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"


export namespace ASYNC {
    
    export namespace I {
        
        export type ArrayHandler<GAnnotation> = {
            'data': ($: T.Annotation<GAnnotation>, ) => I.ValueHandler<GAnnotation>
            'end': ($: T.CloseArrayToken<GAnnotation>, ) => void
        }
        
        export type ObjectHandler<GAnnotation> = {
            'data': {
                'anonymousProperty': ($: T.Annotation<GAnnotation>, ) => I.ValueHandler<GAnnotation>
                'property': ($: T.SimpleStringToken<GAnnotation>, ) => I.RequiredValueHandler<GAnnotation>
            }
            'end': ($: T.CloseObjectToken<GAnnotation>, ) => void
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
            'option': ($: T.SimpleStringToken<GAnnotation>, ) => I.RequiredValueHandler<GAnnotation>
        }
        
        export type ValueHandler<GAnnotation> = {
            'array': I.OnArray<GAnnotation>
            'multilineString': I.OnMultilineString<GAnnotation>
            'object': I.OnObject<GAnnotation>
            'simpleString': I.OnSimpleString<GAnnotation>
            'taggedUnion': I.OnTaggedUnion<GAnnotation>
        }
    }
    
    export namespace C {}
    
    export namespace F {}
}

export namespace SYNC {
    
    export namespace I {}
    
    export namespace I2 {}
    
    export namespace I3 {}
    
    export namespace C {}
    
    export namespace C2 {}
    
    export namespace C3 {}
    
    export namespace F {}
}