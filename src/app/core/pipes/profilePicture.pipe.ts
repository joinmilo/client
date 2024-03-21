import { Pipe, PipeTransform } from '@angular/core';
import { Maybe } from 'graphql/jsutils/Maybe';
import { UserContext } from 'ngx-cinlib/core';
import { MediaEntity } from '../api/generated/schema';

@Pipe({
  name: 'profilePicture',
})
export class ProfilePicturePipe implements PipeTransform {
  transform(user: Maybe<UserContext>): MediaEntity | null{
    return user?.uploads?.find(upload => upload?.profilePicture)?.media ?? null
  }
}
