import { getUserFromContext } from "./user_from_context";
import { AuthorizationError } from "../graphql/errors";


export function requireSignIn(resolver) {
    function protectResolver(object, args, context) {
        return getUserFromContext(context)
            .then(resolver(object, args, context));
    }

    return protectResolver;
}

export function limitAccess(resolver, {allowed, action}) {
    function protectResolver(object, args, context) {
        return getUserFromContext(context)
            .then(user => {
                const authorization = user.authorization;
                if (!allowed.includes(authorization)) {
                    throw AuthorizationError(authorization, action);
                }
            })
            .then(resolver(object, args, context));
    }

    return protectResolver;
}