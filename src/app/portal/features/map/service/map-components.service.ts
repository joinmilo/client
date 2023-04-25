import {
  ApplicationRef, Component, ComponentRef,
  createComponent,
  EnvironmentInjector,
  Injectable,
  Injector, Type
} from '@angular/core';
import {MarkerComponent} from '../components/marker.component';
import {CardData, CardEntity} from '../../../../shared/card/typings/card';
import {ContentCardComponent} from '../../../../shared/card/components/content-card/content-card.component';

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
  private refs: ComponentRef<any>[] = [];

  constructor(
    private injector: Injector,
    private environmentInjector: EnvironmentInjector,
    private applicationRef: ApplicationRef
  ) { }

  createMarkerElement(color: string, icon: string): HTMLElement {
    const [element, component] = this.createElementWithComponent(MarkerComponent);
    component.instance.color = color;
    component.instance.icon = icon;
    return element;
  }

  createPopupElement(entity: CardEntity, data: CardData): HTMLElement {
    const [element, component] = this.createElementWithComponent(ContentCardComponent);
    component.instance.entity = entity;
    component.instance.data = data;
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
