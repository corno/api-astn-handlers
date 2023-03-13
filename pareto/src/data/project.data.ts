import * as pd from 'pareto-core-data'

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

import { $ as glossary } from "./glossary.data"

export const $: g_project.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "an interface for streaming an untyped ASTN dataset. implemented and consumed by multiple packages",
    'license': "TBD",

    'dependencies': d({
    }),
    'type': ['glossary', {
        'root': glossary,
        'imports': d({
        }),
    }],
}