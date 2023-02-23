import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

import { $ as glossary } from "./glossary.data"

export const $: gproject.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "an interface that is implementented and consumed by mulitple libraries",
    'license': "ISC",

    'dependencies': d({
    }),
    'type': ['glossary', {
        'glossary': glossary,
    }],
}