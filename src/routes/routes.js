import Link1 from "./Links/Link1.svelte";
import Link2 from "./Links/Link2.svelte";
import Admin from "./Links/Admin.svelte";
import User from "./Links/User.svelte";
import Params from "./Links/Params.svelte";
import NotFound from "./Links/NotFound.svelte";

import {wrap} from 'svelte-spa-router/wrap';

export default {
    // Exact path
    '/link1': Link1,
    '/link2': Link2,

    // Using named parameters, with last being optional
    // '/hello/:first/:last?': Name,

    // Wildcard parameter
    // Included twice to match both `/wild` (and nothing after) and `/wild/*` (with anything after)
    '/admin': Admin,
    '/admin/*': Admin,
    '/params/:first/:last?': Params,

    // '/user':wrap({
    //     asyncComponent: () => import('./Links/User.svelte')
    // }),

    // Catch-all, must be last
    '*': NotFound,
}