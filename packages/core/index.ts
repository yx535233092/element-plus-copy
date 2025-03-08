import { makeInstaller } from "@element-plus-copy/utils";
import components from "./components";
import "@element-plus-copy/theme/index.css";

const installer = makeInstaller(components);

export * from "@element-plus-copy/components";
export default installer;
