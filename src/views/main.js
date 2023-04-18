import { Flex, View } from "@lenra/components";

export default function(_data, _props) {
  return Flex([
    View("menu"),
    View("home")
  ])
    .direction("vertical")
    .scroll(true)
    .spacing(4)
    .crossAxisAlignment("center")
}

