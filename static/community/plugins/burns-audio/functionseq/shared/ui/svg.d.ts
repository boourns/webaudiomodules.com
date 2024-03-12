declare type SVGParameter = number | string;
export declare function svg_create(type: string): SVGElement;
export declare function svg_arc([cx, cy]: [number, number], [rx, ry]: [number, number], [t1, Δ]: [number, number], φ: number): SVGPathElement;
export declare function svg_update_arc(arc: SVGElement, [cx, cy]: [number, number], [rx, ry]: [number, number], [t1, Δ]: [number, number], φ: number): void;
export declare function svg_rectangle(x: SVGParameter, y: SVGParameter, width: SVGParameter, height: SVGParameter, fill: string): SVGRectElement;
export declare function svg_update_rectangle(rect: SVGElement, x: SVGParameter, y: SVGParameter, width: SVGParameter, height: SVGParameter, fill: string): void;
export declare function svg_text(x: SVGParameter, y: SVGParameter, size: SVGParameter, content: string, fill: string): SVGTextElement;
export declare function svg_line(x1: SVGParameter, y1: SVGParameter, x2: SVGParameter, y2: SVGParameter, stroke: string): SVGLineElement;
export declare function svg_update_line(line: SVGElement, x1: SVGParameter, y1: SVGParameter, x2: SVGParameter, y2: SVGParameter, stroke: string): void;
export {};
