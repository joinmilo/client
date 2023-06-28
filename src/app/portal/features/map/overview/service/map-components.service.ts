import {
    ApplicationRef, ComponentRef,
    createComponent,
    EnvironmentInjector,
    Injectable,
    Injector, Type
} from '@angular/core';
import { MapPopupComponent } from '../components/map-popup/map-popup.component';
import { MapMarkerComponent } from '../components/marker/map-marker.component';
import { PointOfInterest } from '../typings/point-of-interest';

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

  createMarkerElement(poi: PointOfInterest): HTMLElement {
    const [element, component] = this.createElementWithComponent(MapMarkerComponent);
    component.instance.color = poi.color;
    component.instance.icon = poi.icon;
    return element;
  }

  createPopupElement(poi: PointOfInterest): HTMLElement {
    const [element, component] = this.createElementWithComponent(MapPopupComponent);
    component.instance.poi = poi;
    return element;
  }

  cleanup() {
    this.refs.splice(0).forEach((ref) => ref.destroy());
    this.elements.splice(0).forEach((element) => element.remove());
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
    return [element, component]
  }
}
