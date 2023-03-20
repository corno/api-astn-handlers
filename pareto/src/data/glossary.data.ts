import * as pd from 'pareto-core-data'

import {
    null_,
    array,
    string,
    boolean,
    typeReference,
    dictionary, group, member, taggedUnion, aInterfaceReference, aInterfaceMethod, typeParameter, glossaryParameter, parametrizedType, type, stream, choice, ref
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
    'asynchronous': {
        'interfaces': d({
            "ArrayHandler": stream(
                aInterfaceMethod(typeReference("Annotation"), ['reference', aInterfaceReference("ValueHandler")]),
                aInterfaceMethod(typeReference("CloseArrayToken")),
            ),
            "ObjectHandler": stream(
                choice({
                    "property": aInterfaceMethod(typeReference("SimpleStringToken"), ['reference', aInterfaceReference("RequiredValueHandler")]),
                    "anonymousProperty": aInterfaceMethod(typeReference("Annotation"), ['reference', aInterfaceReference("ValueHandler")]),
                }),
                aInterfaceMethod(typeReference("CloseObjectToken"))
            ),
            "OnArray": aInterfaceMethod(typeReference("OpenArrayToken"), ['reference', aInterfaceReference("ArrayHandler")]),
            "OnMissing": aInterfaceMethod(typeReference("Annotation")),
            "OnMultilineString": aInterfaceMethod(typeReference("MultilineStringToken")),
            "OnObject": aInterfaceMethod(typeReference("OpenObjectToken"), ['reference', aInterfaceReference("ObjectHandler")]),
            "OnSimpleString": aInterfaceMethod(typeReference("SimpleStringToken")),
            "OnTaggedUnion": aInterfaceMethod(typeReference("TaggedUnionToken"), ['reference', aInterfaceReference("TaggedUnionHandler")]),
            "RequiredValueHandler": choice({
                "exists": ['reference', aInterfaceReference("ValueHandler")],
                "missing": ['reference', aInterfaceReference("OnMissing")],
            }),
            "TaggedUnionHandler": choice({
                "option": aInterfaceMethod(typeReference("SimpleStringToken"), ['reference', aInterfaceReference("RequiredValueHandler")]),
                "missingOption": aInterfaceMethod(typeReference("Annotation"), ['reference', aInterfaceReference("RequiredValueHandler")]),
                //"onEnd": interfaceMethod(null),
            }),
            // "TreeHandler": ['group', {
            //     'members': d({
            //         "root": ['reference', interfaceReference("RequiredValueHandler")],
            //         "onEnd": interfaceMethod(null),
            //     }),
            // }],
            "ValueHandler": choice({
                "array": ['reference', aInterfaceReference("OnArray")],
                "object": ['reference', aInterfaceReference("OnObject")],
                "multilineString": ['reference', aInterfaceReference("OnMultilineString")],
                "simpleString": ['reference', aInterfaceReference("OnSimpleString")],
                "taggedUnion": ['reference', aInterfaceReference("OnTaggedUnion")],
            }),
        }),
        'algorithms': d({}),
        
    },
    'synchronous': {
        'interfaces': d({ }),
        'algorithms': d({}),
        
    },
}