import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
import { MimeTypeDefinition } from '../typings/media';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  
  constructor(
    private sanitizer: DomSanitizer
  ) { }

  public fileToMedia(file: File): Observable<MediaEntity> {
    return new Observable(observer => {
      const reader = new FileReader();

      reader.onload = event => {
        observer.next({
          base64: (event?.target?.result as string)?.split(',')[1],
          mimeType: file.type,
          size: file.size,
          modified: file.lastModified,
          url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file)) as string,
        });
        observer.complete();
      };

      reader.onerror = (event) => {
        observer.error(event);
      };

      reader.readAsDataURL(file);
    });
  }

  public mimeTypeDefinition(element?: Maybe<MediaEntity>): Maybe<MimeTypeDefinition> {
    if (element?.mimeType?.includes('audio')) {
      return 'AUDIO';
    } else if (element?.mimeType?.includes('image')) {
      return 'IMAGE';
    } else if (element?.mimeType?.includes('video')) {
      return 'VIDEO';
    } else if (element?.mimeType?.includes('pdf')) {
      return 'PDF';
    } else if (element?.extension?.includes('doc')) {
      return 'WORD';
    }
    return null;
  }

  public static isValidUrl(value: Maybe<string>): boolean {
    try {
      if (value && new URL(value)) {
        return true;
      }
    } catch(_) {
      return false;
    }
    return false;
  }

  public parseYoutubeUrl(url?: Maybe<string>): Maybe<string> {
    if (url) {
      const youtubeRegex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(youtubeRegex);

      if (match && match[2].length == 11) {
        return `https://www.youtube.com/embed/${match[2]}`
      }
    }
    return null;
  }

  public getUrlHost(url: string): string {
    const location = new URL(url);
    return location.hostname;
  }

}

