import { views } from "./index.gen.js";

// export const rootView = views.main;
export const lenraRoutes = [
    {
        path: "/:id",
        view: {
            type: "view",
            name: "main"
        }
    },
    {
        path: "/newPage/:id",
        view: {
            type: "view",
            name: "newPage"
        }
    }
]