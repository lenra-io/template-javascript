export default function (_data, _props) {
    return {
        type: "button",
        text: "NEW PAGE",
        onPressed: {
            action: "@lenra:navTo",
            props: {
                path: "/",
                test: "@id"
            }
        }
    }
}