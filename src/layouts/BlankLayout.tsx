import { FC, memo } from "react";
import { LayoutProps } from "./types";

/**
 * Blank Layout Component
 *
 * Just include page content.
 */
const BlankLayout: FC<LayoutProps> = (props) => <>{props.children}</>;

export default memo(BlankLayout);
