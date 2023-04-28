import { views } from "./index.gen.js";

// export const rootView = views.main;
export const lenraRoutes = [
    {
        path: "/",
        view: {
            type: "view",
            name: "main"
        }
    },
    {
        path: "/newPage/:id",
        view: {
            type: "view",
            name: "newPage",
            props: {
                id: "@route.id",
                route: "@route",
                me: "@me"
            },
            query: {
                id: "@me",
                route: "@route",
                routeId: "@route.id"
            }
        }
    }
]