module DeclarationMerging {

    interface Box {
        height: number;
        width: number;
    }
    interface Box {
        scale: number;
    }
    var box: Box = { height: 5, width: 6, scale: 10 };


    interface Document {
        createElement(tagName: any): Element; 
    }
    interface Document {
        createElement(tagName: string): HTMLElement;
    }
    interface Document {
        createElement(tagName: "div"): HTMLDivElement;
        createElement(tagName: "span"): HTMLSpanElement;
        createElement(tagName: "canvas"): HTMLCanvasElement;
    }

    class Coords {
        constructor(
            public x: number,
            public y: number
        ){}
    }

    window.onmousedown = function (evt: MouseEvent) {
        var coords = new Coords(evt.pageX, evt.pageY);
    }

}