import * as pd from 'pareto-core-data'

import {
    null_,
    array,
    string,
    boolean,
    typeReference,
    dictionary, group, member, taggedUnion, types, interfaceReference, inf, interfaceMethod, typeParameter, glossaryParameter, parametrizedType, type, stream, choice, ref
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'imports': d({}),
    'types': d({
        "AnnotatedToken": parametrizedType({
            "Token": null,
        }, group({
            "token": member(typeParameter("Token")),
            "annotation": member(glossaryParameter("Annotation")),
        })),
        "Annotation": type(glossaryParameter("Annotation")),
        "CloseArray": type(group({})),
        "CloseArrayToken": type(ref(typeReference("AnnotatedToken", { "Type": typeReference("CloseArray") }))),
        "CloseObject": type(group({})),
        "CloseObjectToken": type(ref(typeReference("AnnotatedToken", { "Type": typeReference("CloseObject") }))),
        "MultilineString": type(group({
            "lines": member(array(string())),
        })),
        "MultilineStringToken": type(ref(typeReference("AnnotatedToken", { "Type": typeReference("MultilineString") }))),
        "OpenArray": type(group({
            "type": member(taggedUnion({
                "shorthand group": group({}),
                "list": group({}),
            })),
        })),
        "OpenArrayToken": type(ref(typeReference("AnnotatedToken", { "Type": typeReference("OpenArray") }))),
        "OpenObject": type(group({
            "type": member(taggedUnion({
                "verbose group": group({}),
                "dictionary": group({}),
            })),
        })),
        "OpenObjectToken": type(ref(typeReference("AnnotatedToken", { "Type": typeReference("OpenObject") }))),
        "SimpleString": type(group({
            "wrapping": member(ref(typeReference("Wrapping"))),
            "value": member(string()),
        })),
        "SimpleStringToken": type(ref(typeReference("AnnotatedToken", { "Type": typeReference("SimpleString") }))),
        "TaggedUnion": type(group({})),
        "TaggedUnionToken": type(ref(typeReference("AnnotatedToken", { "Type": typeReference("TaggedUnion") }))),
        "Wrapping": type(taggedUnion({
            "quote": group({}),
            "apostrophe": group({}),
            "none": group({}),
        })),
    }),
    'type': ['asynchronous', {
        'interfaces': d({
            "ArrayHandler": stream(
                interfaceMethod(typeReference("Annotation"), ['reference', interfaceReference("ValueHandler")]),
                interfaceMethod(typeReference("CloseArrayToken")),
            ),
            "ObjectHandler": stream(
                choice({
                    "property": interfaceMethod(typeReference("SimpleStringToken"), ['reference', interfaceReference("RequiredValueHandler")]),
                    "anonymousProperty": interfaceMethod(typeReference("Annotation"), ['reference', interfaceReference("ValueHandler")]),
                }),
                interfaceMethod(typeReference("CloseObjectToken"))
            ),
            "OnArray": interfaceMethod(typeReference("OpenArrayToken"), ['reference', interfaceReference("ArrayHandler")]),
            "OnMissing": interfaceMethod(typeReference("Annotation")),
            "OnMultilineString": interfaceMethod(typeReference("MultilineStringToken")),
            "OnObject": interfaceMethod(typeReference("OpenObjectToken"), ['reference', interfaceReference("ObjectHandler")]),
            "OnSimpleString": interfaceMethod(typeReference("SimpleStringToken")),
            "OnTaggedUnion": interfaceMethod(typeReference("TaggedUnionToken"), ['reference', interfaceReference("TaggedUnionHandler")]),
            "RequiredValueHandler": choice({
                "exists": ['reference', interfaceReference("ValueHandler")],
                "missing": ['reference', interfaceReference("OnMissing")],
            }),
            "TaggedUnionHandler": choice({
                "option": interfaceMethod(typeReference("SimpleStringToken"), ['reference', interfaceReference("RequiredValueHandler")]),
                "missingOption": interfaceMethod(typeReference("Annotation"), ['reference', interfaceReference("RequiredValueHandler")]),
                //"onEnd": interfaceMethod(null),
            }),
            // "TreeHandler": ['group', {
            //     'members': d({
            //         "root": ['reference', interfaceReference("RequiredValueHandler")],
            //         "onEnd": interfaceMethod(null),
            //     }),
            // }],
            "ValueHandler": choice({
                "array": ['reference', interfaceReference("OnArray")],
                "object": ['reference', interfaceReference("OnObject")],
                "multilineString": ['reference', interfaceReference("OnMultilineString")],
                "simpleString": ['reference', interfaceReference("OnSimpleString")],
                "taggedUnion": ['reference', interfaceReference("OnTaggedUnion")],
            }),
        }),
        'functions': d<g_glossary.T.Glossary._ltype.asynchronous.functions.D<pd.SourceLocation>>({}),
    }],
}