import { ElementCollection } from "../element-find/element-collection";
import { ElementFind } from "../element-find/element-find";

export function getVKId (): string | undefined {
  return new ElementFind().getElementByElementIdSingle(ElementCollection.LeftColumnAlbums)?.getAttribute("href")?.replace(/\/albums/, "");
}