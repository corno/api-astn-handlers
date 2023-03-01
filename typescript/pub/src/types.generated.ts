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
    
    export type CloseArray<GPAnnotation> = {}
    
    export type CloseArrayToken<GPAnnotation> = T.AnnotatedToken<GPAnnotation, T.CloseArray<GPAnnotation>>
    
    export namespace CloseObject {}
    
    export type CloseObject<GPAnnotation> = {}
    
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
            
            export type list<GPAnnotation> = {}
            
            export namespace shorthand__group {}
            
            export type shorthand__group<GPAnnotation> = {}
        }
        
        export type _ltype<GPAnnotation> = 
            | ['list', {}]
            | ['shorthand group', {}]
    }
    
    export type OpenArray<GPAnnotation> = {
        readonly 'type': 
            | ['list', {}]
            | ['shorthand group', {}]
    }
    
    export type OpenArrayToken<GPAnnotation> = T.AnnotatedToken<GPAnnotation, T.OpenArray<GPAnnotation>>
    
    export namespace OpenObject {
        
        export namespace _ltype {
            
            export namespace dictionary {}
            
            export type dictionary<GPAnnotation> = {}
            
            export namespace verbose__group {}
            
            export type verbose__group<GPAnnotation> = {}
        }
        
        export type _ltype<GPAnnotation> = 
            | ['dictionary', {}]
            | ['verbose group', {}]
    }
    
    export type OpenObject<GPAnnotation> = {
        readonly 'type': 
            | ['dictionary', {}]
            | ['verbose group', {}]
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
    
    export type TaggedUnion<GPAnnotation> = {}
    
    export type TaggedUnionToken<GPAnnotation> = T.AnnotatedToken<GPAnnotation, T.TaggedUnion<GPAnnotation>>
    
    export namespace Wrapping {
        
        export namespace apostrophe {}
        
        export type apostrophe<GPAnnotation> = {}
        
        export namespace none {}
        
        export type none<GPAnnotation> = {}
        
        export namespace quote {}
        
        export type quote<GPAnnotation> = {}
    }
    
    export type Wrapping<GPAnnotation> = 
        | ['apostrophe', {}]
        | ['none', {}]
        | ['quote', {}]
}