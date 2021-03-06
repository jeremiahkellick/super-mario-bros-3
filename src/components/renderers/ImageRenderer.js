import Renderer from './Renderer';
import Vector from '../../Vector';

class ImageRenderer extends Renderer {
  constructor(image, position, size, options = {}) {
    super(options);
    this.image = image;
    this.position = position;
    this.size = size;
  }

  draw(ctx) {
    this.drawImage(ctx, this.image, this.position, this.size);
  }
}

export default ImageRenderer;
