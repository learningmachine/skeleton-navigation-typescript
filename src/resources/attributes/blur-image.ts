import { autoinject } from 'aurelia-framework';
import { image } from 'stackblur-canvas';

@autoinject
export class BlurImageCustomAttribute {
  constructor(private element: Element) {
    this.element = element;
  }

  public valueChanged(newImage: HTMLImageElement) {
    if (newImage.complete) {
      image(newImage, <HTMLCanvasElement>this.element, 40);
    } else {
      newImage.onload = () => image(newImage, <HTMLCanvasElement>this.element, 40);
    }
  }
}
