export default function (_data, _props, context) {
    return {
        type: "text",
        value: `context: ${JSON.stringify(context)}`
    }
}

