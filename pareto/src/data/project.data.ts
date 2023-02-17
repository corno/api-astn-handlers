import * as pd from 'pareto-core-data'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.wrapRawDictionary

import { $ as glossary } from "./glossary.data"

export const $: mproject.T.Project = {
    'author': "Corno",
    'description': "an interface that is implementented and consumed by mulitple libraries",
    'license': "ISC",

    'dependencies': d({
    }),
    'type': ['glossary', {
        'glossary': glossary,
    }],
}