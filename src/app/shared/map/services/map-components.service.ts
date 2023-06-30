import {
  ApplicationRef, ComponentRef,
  createComponent,
  EnvironmentInjector,
  Injectable,
  Injector, Type
} from '@angular/core';
import { Maybe } from 'src/schema/schema';
import { MapMarkerComponent } from '../components/marker/map-marker.component';
import { MapPopupComponent } from '../components/popup/map-popup.component';
import { PointOfInterest } from '../typings/map';

/**
 * This programmatically creates Components bound to Html Elements
 * for leaflet to work with. NOTE: Use cleanup() to remove
 * components created here, e.g. in an onDestroy hook.
 */
@Injectable({
  providedIn: 'root'
})
export class MapComponentsService {

  private elements: HTMLElement[] = [];
  private refs: ComponentRef<unknown>[] = [];

  constructor(
    private injector: Injector,
    private environmentInjector: EnvironmentInjector,
    private applicationRef: ApplicationRef
  ) { }

  public createMarkerElement(color?: Maybe<string>, icon?: Maybe<string>): HTMLElement {
    const [element, component] = this.createElementWithComponent(MapMarkerComponent);
    component.instance.color = color;
    component.instance.icon = icon;
    return element;
  }

  public createPopupElement(poi: PointOfInterest): HTMLElement {
    const [element, component] = this.createElementWithComponent(MapPopupComponent);
    component.instance.poi = poi;
    return element;
  }

  private createElementWithComponent<C>(componentType: Type<C>, tag = 'div'): [HTMLElement, ComponentRef<C>] {
    const element = document.createElement(tag)
    const component = createComponent(componentType, {
      elementInjector: this.injector,
      environmentInjector: this.environmentInjector,
      hostElement: element
    });
    this.applicationRef.attachView(component.hostView);
    this.refs.push(component);
    this.elements.push(element);
    return [element, component];
  }

  public cleanup(): void {
    this.refs.splice(0).forEach((ref) => ref.destroy());
    this.elements.splice(0).forEach((element) => element.remove());
  }
}
