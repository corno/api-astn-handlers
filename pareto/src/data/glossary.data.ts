import * as pd from 'pareto-core-data'

import {
    aInterface, aInterfaceMethod, aInterfaceReference, array, choice, glossaryParameter, group, member, parametrizedType,
    ref, streamconsumer, string, taggedUnion, type, typeParameter, typeReference
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
            "token": member(ref(typeParameter("Token"))),
            "annotation": member(ref(glossaryParameter("Annotation"))),
        })),
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
            "ArrayHandler": aInterface(streamconsumer(
                aInterfaceMethod(glossaryParameter("Annotation"), ['reference', aInterfaceReference("ValueHandler")]),
                aInterfaceMethod(typeReference("CloseArrayToken")),
            )),
            "ObjectHandler": aInterface(streamconsumer(
                choice({
                    "property": aInterfaceMethod(typeReference("SimpleStringToken"), ['reference', aInterfaceReference("RequiredValueHandler")]),
                    "anonymousProperty": aInterfaceMethod(glossaryParameter("Annotation"), ['reference', aInterfaceReference("ValueHandler")]),
                }),
                aInterfaceMethod(typeReference("CloseObjectToken"))
            )),
            "OnArray": aInterface(aInterfaceMethod(typeReference("OpenArrayToken"), ['reference', aInterfaceReference("ArrayHandler")])),
            "OnMissing": aInterface(aInterfaceMethod(glossaryParameter("Annotation"))),
            "OnMultilineString": aInterface(aInterfaceMethod(typeReference("MultilineStringToken"))),
            "OnObject": aInterface(aInterfaceMethod(typeReference("OpenObjectToken"), ['reference', aInterfaceReference("ObjectHandler")])),
            "OnSimpleString": aInterface(aInterfaceMethod(typeReference("SimpleStringToken"))),
            "OnTaggedUnion": aInterface(aInterfaceMethod(typeReference("TaggedUnionToken"), ['reference', aInterfaceReference("TaggedUnionHandler")])),
            "RequiredValueHandler": aInterface(choice({
                "exists": ['reference', aInterfaceReference("ValueHandler")],
                "missing": ['reference', aInterfaceReference("OnMissing")],
            })),
            "TaggedUnionHandler": aInterface(choice({
                "option": aInterfaceMethod(typeReference("SimpleStringToken"), ['reference', aInterfaceReference("RequiredValueHandler")]),
                "missingOption": aInterfaceMethod(glossaryParameter("Annotation"), ['reference', aInterfaceReference("RequiredValueHandler")]),
                //"onEnd": interfaceMethod(null),
            })),
            // "TreeHandler": ['group', {
            //     'members': d({
            //         "root": ['reference', interfaceReference("RequiredValueHandler")],
            //         "onEnd": interfaceMethod(null),
            //     }),
            // }],
            "ValueHandler": aInterface(choice({
                "array": ['reference', aInterfaceReference("OnArray")],
                "object": ['reference', aInterfaceReference("OnObject")],
                "multilineString": ['reference', aInterfaceReference("OnMultilineString")],
                "simpleString": ['reference', aInterfaceReference("OnSimpleString")],
                "taggedUnion": ['reference', aInterfaceReference("OnTaggedUnion")],
            })),
        }),
        'algorithms': d({}),

    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({}),

    },
}