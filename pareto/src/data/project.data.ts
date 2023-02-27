import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

import { $ as glossary } from "./glossary.data"

export const $: gproject.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "an interface for streaming an untyped ASTN dataset. implemented and consumed by multiple packages",
    'license': "TBD",

    'dependencies': d({
    }),
    'type': ['glossary', {
        'glossary': glossary,
    }],
}