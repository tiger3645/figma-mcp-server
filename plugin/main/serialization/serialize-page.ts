export function serializePage(page: PageNode): string {
    let nodes: any[] = [];
    try {
        nodes = page.children.map((node) => ({
            id: node.id,
            name: node.name,
            type: node.type,
            visible: node.visible,
            locked: node.locked,
            x: (node as any).x,
            y: (node as any).y,
            width: (node as any).width,
            height: (node as any).height,
        }));
    } catch (error) {
        // Page not loaded — return id/name only
        console.error("Error serializing page:", error);
    }
    return JSON.stringify({
        id: page.id,
        name: page.name,
        nodes,
    });
}