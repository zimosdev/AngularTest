import { UIRouter }  from "@uirouter/angular";


/** UIRouter Config  */
export function UIRouterConfigFn(router: UIRouter) {
    // If no URL matches, go to the `Hello` state's name by default
    router.urlService.rules.otherwise({ state: 'hello' });
}