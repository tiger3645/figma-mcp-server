import { serializePage } from "serialization/serialize-page";
import { ToolResult } from "../tool-result";
import type { GetPagesParams } from "@shared/types";

export async function getPages(args: GetPagesParams): Promise<ToolResult> {
    // Use root.children directly — avoids loading all pages which is slow on large files.
    // Children of non-current pages may be unloaded; serializePage handles that gracefully.
    const pages = figma.root.children as PageNode[];
    const serializedPages = pages.map((page) => serializePage(page));
    return {
        isError: false,
        content: serializedPages,
    };
}