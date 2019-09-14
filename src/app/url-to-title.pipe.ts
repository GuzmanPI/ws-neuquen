import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlToTitle'
})
export class UrlToTitlePipe implements PipeTransform {
  /**
   * @desc Converts a url into a title.
   *       e.g. a url like: hero-detail/DH72B456DGF73) would be converted into a title like this: Hero Detail
   * @param value string A url to be converted into a
   *
   * @returns string A title from a url.
   */
  transform(value: string): any {
    if (value) {
      return this.formatTitle(value);
    } else {
      return value;
    }
  }

  /**
   * @desc Converts a url into a title.
   * @param url string The url to be converted into a title.
   *
   * @returns string A title from a url.
   */
  private formatTitle(url: string): string {
    const cleanUrl = this.removeParams(url);

    return cleanUrl
      .replace(/-/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.substring(1))
      .join(' ');
  }

  /**
   * @desc Removes the slash params from the url.
   * @param url string A url.
   *
   * @returns string The url without any slash params.
   */
  private removeParams(url: string): string {
    const slashIndex = url.indexOf('/');

    if (slashIndex > -1) {
      return url.substring(0, slashIndex);
    } else {
      return url;
    }
  }
}
