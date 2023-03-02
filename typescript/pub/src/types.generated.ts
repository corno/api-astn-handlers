import * as pt from 'pareto-core-types'


export namespace T {
    
    export namespace AnnotatedToken {
        
        export type annotation<GPAnnotation, AToken> = GPAnnotation
        
        export type token<GPAnnotation, AToken> = AToken
    }
    
    export type AnnotatedToken<GPAnnotation, AToken> = {
        readonly 'annotation': GPAnnotation
        readonly 'token': AToken
    }
    
    export type Annotation<GPAnnotation> = GPAnnotation
    
    export namespace CloseArray {}
    
    export type CloseArray<GPAnnotation> = null
    
    export type CloseArrayToken<GPAnnotation> = T.AnnotatedToken<GPAnnotation, T.CloseArray<GPAnnotation>>
    
    export namespace CloseObject {}
    
    export type CloseObject<GPAnnotation> = null
    
    export type CloseObjectToken<GPAnnotation> = T.AnnotatedToken<GPAnnotation, T.CloseObject<GPAnnotation>>
    
    export namespace MultilineString {
        
        export namespace lines {
            
            export type A<GPAnnotation> = string
        }
        
        export type lines<GPAnnotation> = pt.Array<string>
    }
    
    export type MultilineString<GPAnnotation> = {
        readonly 'lines': pt.Array<string>
    }
    
    export type MultilineStringToken<GPAnnotation> = T.AnnotatedToken<GPAnnotation, T.MultilineString<GPAnnotation>>
    
    export namespace OpenArray {
        
        export namespace _ltype {
            
            export namespace list {}
            
            export type list<GPAnnotation> = null
            
            export namespace shorthand__group {}
            
            export type shorthand__group<GPAnnotation> = null
        }
        
        export type _ltype<GPAnnotation> = 
            | ['list', null]
            | ['shorthand group', null]
    }
    
    export type OpenArray<GPAnnotation> = {
        readonly 'type': 
            | ['list', null]
            | ['shorthand group', null]
    }
    
    export type OpenArrayToken<GPAnnotation> = T.AnnotatedToken<GPAnnotation, T.OpenArray<GPAnnotation>>
    
    export namespace OpenObject {
        
        export namespace _ltype {
            
            export namespace dictionary {}
            
            export type dictionary<GPAnnotation> = null
            
            export namespace verbose__group {}
            
            export type verbose__group<GPAnnotation> = null
        }
        
        export type _ltype<GPAnnotation> = 
            | ['dictionary', null]
            | ['verbose group', null]
    }
    
    export type OpenObject<GPAnnotation> = {
        readonly 'type': 
            | ['dictionary', null]
            | ['verbose group', null]
    }
    
    export type OpenObjectToken<GPAnnotation> = T.AnnotatedToken<GPAnnotation, T.OpenObject<GPAnnotation>>
    
    export namespace SimpleString {
        
        export type value<GPAnnotation> = string
        
        export type wrapping<GPAnnotation> = T.Wrapping<GPAnnotation>
    }
    
    export type SimpleString<GPAnnotation> = {
        readonly 'value': string
        readonly 'wrapping': T.Wrapping<GPAnnotation>
    }
    
    export type SimpleStringToken<GPAnnotation> = T.AnnotatedToken<GPAnnotation, T.SimpleString<GPAnnotation>>
    
    export namespace TaggedUnion {}
    
    export type TaggedUnion<GPAnnotation> = null
    
    export type TaggedUnionToken<GPAnnotation> = T.AnnotatedToken<GPAnnotation, T.TaggedUnion<GPAnnotation>>
    
    export namespace Wrapping {
        
        export namespace apostrophe {}
        
        export type apostrophe<GPAnnotation> = null
        
        export namespace none {}
        
        export type none<GPAnnotation> = null
        
        export namespace quote {}
        
        export type quote<GPAnnotation> = null
    }
    
    export type Wrapping<GPAnnotation> = 
        | ['apostrophe', null]
        | ['none', null]
        | ['quote', null]
}