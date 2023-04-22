import { animate, style, transition, trigger } from '@angular/animations';

export const fadeInAnimation = trigger('fadeIn', [
  transition(':enter', 
  [
    style({ opacity: 0, transform: 'scale(0.5)' }),
    animate('400ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
  ]),
]);

export const growOnSidesAnimation = trigger('growOnSides', [
  transition(':enter', 
  [
    style({ opacity: 0, transform: 'scaleX(0)'}),
    animate('400ms ease-out', style({ opacity: 1, transform: 'scaleX(1)'}))
  ]),
]);

export const fadeInFromRightAnimation = trigger('fadeInFromRight', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(150px)' }),
    animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
  ])
]);