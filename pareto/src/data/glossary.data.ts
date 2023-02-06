import * as pr from 'pareto-core-raw'

import {
    null_,
    array,
    string,
    reference,
    boolean,
    typeReference,
    dictionary, group, member, taggedUnion, types, func, data, interfaceReference, inf, method, typeParameter, glossaryParameter, template
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import * as mglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pr.wrapRawDictionary

export const $: mglossary.TGlossary = {
    'imports': d({
    }),
    'parameters': d({}),
    'templates': d({
        "AnnotatedToken": {
            'parameters': d({
                "Token": {},
            }),
            'type': group({
                "token": member(typeParameter("Token")),
                "annotation": member(glossaryParameter("Annotation")),
            }),
        }
    }),
    'types': types({
        "Annotation": glossaryParameter("Annotation"),
        "CloseArray": group({}),
        "CloseArrayToken": template("AnnotatedToken", { "Type": reference("CloseArray") }),
        "CloseObject": group({}),
        "CloseObjectToken": template("AnnotatedToken", { "Type": reference("CloseObject") }),
        "MultilineString": group({
            "lines": member(array(string()))
        }),
        "MultilineStringToken": template("AnnotatedToken", { "Type": reference("MultilineString") }),

        "OpenArray": group({
            "type": member(taggedUnion({
                "shorthand group": group({}),
                "list": group({}),
            }))
        }),
        "OpenArrayToken": template("AnnotatedToken", { "Type": reference("OpenArray") }),

        "OpenObject": group({
            "type": member(taggedUnion({
                "verbose group": group({}),
                "dictionary": group({}),
            }))
        }),
        "OpenObjectToken": template("AnnotatedToken", { "Type": reference("OpenObject") }),

        "SimpleString": group({
            "wrapping": member(reference("Wrapping")),
            "value": member(string())
        }),
        "SimpleStringToken": template("AnnotatedToken", { "Type": reference("SimpleString") }),
        "TaggedUnion": group({}),
        "TaggedUnionToken": template("AnnotatedToken", { "Type": reference("TaggedUnion") }),
        "Wrapping": taggedUnion({
            "quote": group({}),
            "apostrophe": group({}),
            "none": group({}),
        }),
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
                "root": ['reference', interfaceReference("ValueHandler")],
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