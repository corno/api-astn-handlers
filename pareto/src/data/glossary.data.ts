import * as pd from 'pareto-core-data'

import {
    null_,
    array,
    string,
    reference,
    boolean,
    typeReference,
    dictionary, group, member, taggedUnion, types, func, data, interfaceReference, inf, method, typeParameter, glossaryParameter, parametrizedType, type, parametrizedReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'imports': d({
    }),
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
    'interfaces': d({
        "ArrayHandler": ['group', {
            'members': d({
                "element": method(typeReference("Annotation"), ['reference', interfaceReference("ValueHandler")], false),
                "onEnd": method(typeReference("CloseArrayToken"))
            })
        }],
        "ObjectHandler": ['group', {
            'members': d({
                "property": method(typeReference("SimpleStringToken"), ['reference', interfaceReference("RequiredValueHandler")], false),
                "anonymousProperty": method(typeReference("Annotation"), ['reference', interfaceReference("ValueHandler")], false),
                "onEnd": method(typeReference("CloseObjectToken")),
            }),
        }],
        "OnArray": method(typeReference("OpenArrayToken"), ['reference', interfaceReference("ArrayHandler")], false),
        "OnMissing": method(typeReference("Annotation")),
        "OnMultilineString": method(typeReference("MultilineStringToken")),
        "OnObject": method(typeReference("OpenObjectToken"), ['reference', interfaceReference("ObjectHandler")], false),
        "OnSimpleString": method(typeReference("SimpleStringToken")),
        "OnTaggedUnion": method(typeReference("TaggedUnionToken"), ['reference', interfaceReference("TaggedUnionHandler")], false),
        "RequiredValueHandler": ['group', {
            'members': d({
                "exists": ['reference', interfaceReference("ValueHandler")],
                "missing": ['reference', interfaceReference("OnMissing")],
            }),
        }],
        "TaggedUnionHandler": ['group', {
            'members': d({
                "option": method(typeReference("SimpleStringToken"), ['reference', interfaceReference("RequiredValueHandler")], false),
                "missingOption": method(typeReference("Annotation"), ['reference', interfaceReference("RequiredValueHandler")], false),
                "onEnd": method(null),
            })
        }],
        "TreeHandler": ['group', {
            'members': d({
                "root": ['reference', interfaceReference("RequiredValueHandler")],
                "onEnd": method(null),
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