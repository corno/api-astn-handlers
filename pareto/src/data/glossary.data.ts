import * as pd from 'pareto-core-data'

import {
    null_,
    array,
    string,
    reference,
    boolean,
    typeReference,
    dictionary, group, member, taggedUnion, types, func, data, interfaceReference, inf, interfaceMethod, typeParameter, glossaryParameter, parametrizedType, type, parametrizedReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'types': d({
        "AnnotatedToken": parametrizedType({
            "Token": null,
        }, group({
            "token": member(typeParameter("Token")),
            "annotation": member(glossaryParameter("Annotation")),
        })),
        "Annotation": type(glossaryParameter("Annotation")),
        "CloseArray": type(group({})),
        "CloseArrayToken": type(parametrizedReference("AnnotatedToken", { "Type": typeReference("CloseArray") })),
        "CloseObject": type(group({})),
        "CloseObjectToken": type(parametrizedReference("AnnotatedToken", { "Type": typeReference("CloseObject") })),
        "MultilineString": type(group({
            "lines": member(array(string()))
        })),
        "MultilineStringToken": type(parametrizedReference("AnnotatedToken", { "Type": typeReference("MultilineString") })),
        "OpenArray": type(group({
            "type": member(taggedUnion({
                "shorthand group": group({}),
                "list": group({}),
            }))
        })),
        "OpenArrayToken": type(parametrizedReference("AnnotatedToken", { "Type": typeReference("OpenArray") })),
        "OpenObject": type(group({
            "type": member(taggedUnion({
                "verbose group": group({}),
                "dictionary": group({}),
            }))
        })),
        "OpenObjectToken": type(parametrizedReference("AnnotatedToken", { "Type": typeReference("OpenObject") })),
        "SimpleString": type(group({
            "wrapping": member(reference("Wrapping")),
            "value": member(string())
        })),
        "SimpleStringToken": type(parametrizedReference("AnnotatedToken", { "Type": typeReference("SimpleString") })),
        "TaggedUnion": type(group({})),
        "TaggedUnionToken": type(parametrizedReference("AnnotatedToken", { "Type": typeReference("TaggedUnion") })),
        "Wrapping": type( taggedUnion({
            "quote": group({}),
            "apostrophe": group({}),
            "none": group({}),
        })),
    }),
    'builders': d({
    }),
    'interfaces': d({
        "ArrayHandler": ['group', {
            'members': d({
                "element": interfaceMethod(typeReference("Annotation"), ['reference', interfaceReference("ValueHandler")]),
                "onEnd": interfaceMethod(typeReference("CloseArrayToken"))
            })
        }],
        "ObjectHandler": ['group', {
            'members': d({
                "property": interfaceMethod(typeReference("SimpleStringToken"), ['reference', interfaceReference("RequiredValueHandler")]),
                "anonymousProperty": interfaceMethod(typeReference("Annotation"), ['reference', interfaceReference("ValueHandler")]),
                "onEnd": interfaceMethod(typeReference("CloseObjectToken")),
            }),
        }],
        "OnArray": interfaceMethod(typeReference("OpenArrayToken"), ['reference', interfaceReference("ArrayHandler")]),
        "OnMissing": interfaceMethod(typeReference("Annotation")),
        "OnMultilineString": interfaceMethod(typeReference("MultilineStringToken")),
        "OnObject": interfaceMethod(typeReference("OpenObjectToken"), ['reference', interfaceReference("ObjectHandler")]),
        "OnSimpleString": interfaceMethod(typeReference("SimpleStringToken")),
        "OnTaggedUnion": interfaceMethod(typeReference("TaggedUnionToken"), ['reference', interfaceReference("TaggedUnionHandler")]),
        "RequiredValueHandler": ['group', {
            'members': d({
                "exists": ['reference', interfaceReference("ValueHandler")],
                "missing": ['reference', interfaceReference("OnMissing")],
            }),
        }],
        "TaggedUnionHandler": ['group', {
            'members': d({
                "option": interfaceMethod(typeReference("SimpleStringToken"), ['reference', interfaceReference("RequiredValueHandler")]),
                "missingOption": interfaceMethod(typeReference("Annotation"), ['reference', interfaceReference("RequiredValueHandler")]),
                "onEnd": interfaceMethod(null),
            })
        }],
        "TreeHandler": ['group', {
            'members': d({
                "root": ['reference', interfaceReference("RequiredValueHandler")],
                "onEnd": interfaceMethod(null),
            }),
        }],
        "ValueHandler": ['group', {
            'members': d({
                "array": ['reference', interfaceReference("OnArray")],
                "object": ['reference', interfaceReference("OnObject")],
                "multilineString": ['reference', interfaceReference("OnMultilineString")],
                "simpleString": ['reference', interfaceReference("OnSimpleString")],
                "taggedUnion": ['reference', interfaceReference("OnTaggedUnion")],
            }),
        }],
    }),
    'functions': d({
    }),
}