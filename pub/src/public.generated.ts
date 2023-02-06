import * as pt from 'pareto-core-types'

import * as t from './types.generated'


export type TAnnotation = t.UAnnotation

export type TCloseArray = t.UCloseArray

export type TCloseArrayToken = t.UCloseArrayToken

export type TCloseObject = t.UCloseObject

export type TCloseObjectToken = t.UCloseObjectToken

export type TMultilineString = t.UMultilineString

export type TMultilineStringToken = t.UMultilineStringToken

export type TOpenArray = t.UOpenArray

export type TOpenArrayToken = t.UOpenArrayToken

export type TOpenObject = t.UOpenObject

export type TOpenObjectToken = t.UOpenObjectToken

export type TSimpleString = t.USimpleString

export type TSimpleStringToken = t.USimpleStringToken

export type TTaggedUnion = t.UTaggedUnion

export type TTaggedUnionToken = t.UTaggedUnionToken

export type TWrapping = t.UWrapping

export type IArrayHandler = {
    'element': ($: TAnnotation, ) => IValueHandler
    'onEnd': ($: TCloseArrayToken, ) => void
}

export type IObjectHandler = {
    'anonymousProperty': ($: TAnnotation, ) => IValueHandler
    'onEnd': ($: TCloseObjectToken, ) => void
    'property': ($: TSimpleStringToken, ) => IRequiredValueHandler
}

export type IOnArray = ($: TOpenArrayToken, ) => IArrayHandler

export type IOnMissing = ($: TAnnotation, ) => void

export type IOnMultilineString = ($: TMultilineStringToken, ) => void

export type IOnObject = ($: TOpenObjectToken, ) => IObjectHandler

export type IOnSimpleString = ($: TSimpleStringToken, ) => void

export type IOnTaggedUnion = ($: TTaggedUnionToken, ) => ITaggedUnionHandler

export type IRequiredValueHandler = {
    'missing': IOnMissing
    'root': IValueHandler
}

export type ITaggedUnionHandler = {
    'missingOption': ($: TAnnotation, ) => IRequiredValueHandler
    'onEnd': () => void
    'option': ($: TSimpleStringToken, ) => IRequiredValueHandler
}

export type ITreeHandler = {
    'onEnd': () => void
    'root': IRequiredValueHandler
}

export type IValueHandler = {
    'array': IOnArray
    'multilineString': IOnMultilineString
    'object': IOnObject
    'simpleString': IOnSimpleString
    'taggedUnion': IOnTaggedUnion
}