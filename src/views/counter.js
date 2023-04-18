import { Flex, Text, Button } from "@lenra/components";

/**
 * 
 * @param {import("../classes/Counter").Counter[]} param0 
 * @param {import("@lenra/app-server").props} param1 
 * @returns 
 */
export default function ([counter], { text }) {
  return Flex([
    Text(`${text}: ${counter.count}`),
    Button("+")
      .onPressed("increment", {
        "id": counter._id
      })
  ])
    .spacing(16)
    .mainAxisAlignment("spaceEvenly")
    .crossAxisAlignment("center")
}

