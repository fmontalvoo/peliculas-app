import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {
  private image_url: string = "https://image.tmdb.org/t/p/w500";

  transform(image_path: String): unknown {
    if (image_path)
      return `${this.image_url}${image_path}`;

    return './assets/images/no-image.jpg';
  }

}
