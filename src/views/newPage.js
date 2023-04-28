export default function (_data, _props) {
    console.log(_props);
    console.log(_data);
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