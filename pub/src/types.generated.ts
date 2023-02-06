import * as pt from 'pareto-core-types'


export namespace VAnnotatedToken {}
export type VAnnotatedToken<AToken> = {
    readonly 'annotation': HAnnotation
    readonly 'token': AToken
}

export type MAnnotatedToken<AToken> = VAnnotatedToken<AToken>
export type UAnnotation = HAnnotation

export namespace GCloseArray {}
export type GCloseArray = {}
export type UCloseArray = GCloseArray

export namespace GCloseArrayToken {}
export type GCloseArrayToken = MAnnotatedToken<UCloseArray>
export type UCloseArrayToken = GCloseArrayToken

export namespace GCloseObject {}
export type GCloseObject = {}
export type UCloseObject = GCloseObject

export namespace GCloseObjectToken {}
export type GCloseObjectToken = MAnnotatedToken<UCloseObject>
export type UCloseObjectToken = GCloseObjectToken

export namespace GMultilineString {
    
    export namespace Plines {}
    export type Plines = pt.Array<string>
}
export type GMultilineString = {
    readonly 'lines': GMultilineString.Plines
}
export type UMultilineString = GMultilineString

export namespace GMultilineStringToken {}
export type GMultilineStringToken = MAnnotatedToken<UMultilineString>
export type UMultilineStringToken = GMultilineStringToken

export namespace GOpenArray {
    
    export namespace Ptype {
        
        export namespace Olist {}
        export type Olist = {}
        
        export namespace Oshorthand__group {}
        export type Oshorthand__group = {}
    }
    export type Ptype = 
        | ['list', Ptype.Olist]
        | ['shorthand group', Ptype.Oshorthand__group]
}
export type GOpenArray = {
    readonly 'type': GOpenArray.Ptype
}
export type UOpenArray = GOpenArray

export namespace GOpenArrayToken {}
export type GOpenArrayToken = MAnnotatedToken<UOpenArray>
export type UOpenArrayToken = GOpenArrayToken

export namespace GOpenObject {
    
    export namespace Ptype {
        
        export namespace Odictionary {}
        export type Odictionary = {}
        
        export namespace Overbose__group {}
        export type Overbose__group = {}
    }
    export type Ptype = 
        | ['dictionary', Ptype.Odictionary]
        | ['verbose group', Ptype.Overbose__group]
}
export type GOpenObject = {
    readonly 'type': GOpenObject.Ptype
}
export type UOpenObject = GOpenObject

export namespace GOpenObjectToken {}
export type GOpenObjectToken = MAnnotatedToken<UOpenObject>
export type UOpenObjectToken = GOpenObjectToken

export namespace GSimpleString {}
export type GSimpleString = {
    readonly 'value': string
    readonly 'wrapping': UWrapping
}
export type USimpleString = GSimpleString

export namespace GSimpleStringToken {}
export type GSimpleStringToken = MAnnotatedToken<USimpleString>
export type USimpleStringToken = GSimpleStringToken

export namespace GTaggedUnion {}
export type GTaggedUnion = {}
export type UTaggedUnion = GTaggedUnion

export namespace GTaggedUnionToken {}
export type GTaggedUnionToken = MAnnotatedToken<UTaggedUnion>
export type UTaggedUnionToken = GTaggedUnionToken

export namespace GWrapping {
    
    export namespace Oapostrophe {}
    export type Oapostrophe = {}
    
    export namespace Onone {}
    export type Onone = {}
    
    export namespace Oquote {}
    export type Oquote = {}
}
export type GWrapping = 
    | ['apostrophe', GWrapping.Oapostrophe]
    | ['none', GWrapping.Onone]
    | ['quote', GWrapping.Oquote]
export type UWrapping = GWrapping