import * as pt from 'pareto-core-types'


export namespace T {
    
    export namespace AnnotatedToken {
        
        export type annotation<GAnnotation, TToken> = GAnnotation
        
        export type token<GAnnotation, TToken> = TToken
    }
    
    export type AnnotatedToken<GAnnotation, TToken> = {
        readonly 'annotation': GAnnotation
        readonly 'token': TToken
    }
    
    export namespace CloseArray {}
    
    export type CloseArray<GAnnotation> = null
    
    export type CloseArrayToken<GAnnotation> = T.AnnotatedToken<GAnnotation, T.CloseArray<GAnnotation>>
    
    export namespace CloseObject {}
    
    export type CloseObject<GAnnotation> = null
    
    export type CloseObjectToken<GAnnotation> = T.AnnotatedToken<GAnnotation, T.CloseObject<GAnnotation>>
    
    export namespace MultilineString {
        
        export namespace lines {
            
            export type A<GAnnotation> = string
        }
        
        export type lines<GAnnotation> = pt.Array<string>
    }
    
    export type MultilineString<GAnnotation> = {
        readonly 'lines': pt.Array<string>
    }
    
    export type MultilineStringToken<GAnnotation> = T.AnnotatedToken<GAnnotation, T.MultilineString<GAnnotation>>
    
    export namespace OpenArray {
        
        export namespace _ltype {
            
            export namespace list {}
            
            export type list<GAnnotation> = null
            
            export namespace shorthand__group {}
            
            export type shorthand__group<GAnnotation> = null
        }
        
        export type _ltype<GAnnotation> = 
            | ['list', null]
            | ['shorthand group', null]
    }
    
    export type OpenArray<GAnnotation> = {
        readonly 'type': 
            | ['list', null]
            | ['shorthand group', null]
    }
    
    export type OpenArrayToken<GAnnotation> = T.AnnotatedToken<GAnnotation, T.OpenArray<GAnnotation>>
    
    export namespace OpenObject {
        
        export namespace _ltype {
            
            export namespace dictionary {}
            
            export type dictionary<GAnnotation> = null
            
            export namespace verbose__group {}
            
            export type verbose__group<GAnnotation> = null
        }
        
        export type _ltype<GAnnotation> = 
            | ['dictionary', null]
            | ['verbose group', null]
    }
    
    export type OpenObject<GAnnotation> = {
        readonly 'type': 
            | ['dictionary', null]
            | ['verbose group', null]
    }
    
    export type OpenObjectToken<GAnnotation> = T.AnnotatedToken<GAnnotation, T.OpenObject<GAnnotation>>
    
    export namespace SimpleString {
        
        export type value<GAnnotation> = string
        
        export type wrapping<GAnnotation> = T.Wrapping<GAnnotation>
    }
    
    export type SimpleString<GAnnotation> = {
        readonly 'value': string
        readonly 'wrapping': T.Wrapping<GAnnotation>
    }
    
    export type SimpleStringToken<GAnnotation> = T.AnnotatedToken<GAnnotation, T.SimpleString<GAnnotation>>
    
    export namespace TaggedUnion {}
    
    export type TaggedUnion<GAnnotation> = null
    
    export type TaggedUnionToken<GAnnotation> = T.AnnotatedToken<GAnnotation, T.TaggedUnion<GAnnotation>>
    
    export namespace Wrapping {
        
        export namespace apostrophe {}
        
        export type apostrophe<GAnnotation> = null
        
        export namespace none {}
        
        export type none<GAnnotation> = null
        
        export namespace quote {}
        
        export type quote<GAnnotation> = null
    }
    
    export type Wrapping<GAnnotation> = 
        | ['apostrophe', null]
        | ['none', null]
        | ['quote', null]
}