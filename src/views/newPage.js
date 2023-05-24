export default function (_data, _props, context) {
    console.log(_props);
    console.log(_data);
    console.log(JSON.stringify(context));
    return {
        type: "button",
        text: `NEW PAGE ${JSON.stringify(context)}`,
        onPressed: {
            action: "@lenra:navTo",
            props: {
                path: "/",
            }
        }
    }
}