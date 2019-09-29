import CustomComponent, { setComponentAttributes, setComponentProperties, setRootComponent } from './CustomComponent';

let componentAttributes: any | null = null;
let componentProperties: any | null = null;
let elementName: string | null = null;
let rootComponent: React.FunctionComponent<any> | null = null;

export class ReactWebComponent {
  public static setAttributes(attributes: any) {
    componentAttributes = attributes;
  }

  public static setProperties(properties: any) {
    componentProperties = properties;
  }

  public static render(App: React.FunctionComponent<any>, name: string) {
    rootComponent = App;
    elementName = name;

    this.validateDependencies();

    setComponentAttributes(componentAttributes);
    setComponentProperties(componentProperties);
    setRootComponent(rootComponent);

    this.setComponentProperties();

    customElements.define(elementName, CustomComponent);
  }

  private static setComponentProperties() {
    if (!rootComponent) {
      return;
    }
    
    const properties = { ...componentProperties };
    const propertyMap = {} as PropertyDescriptorMap;

    Object.keys(properties).forEach((key: string) => {
      const property: PropertyDescriptor = {
        configurable: true,
        enumerable: true,
        get() {
          return properties[key];
        },
        set(newValue) {
          const oldValue = properties[key];
          properties[key] = newValue;
          (this as any).reactPropsChangedCallback(key, oldValue, newValue);
        },
      };

      propertyMap[key] = property;
    });

    Object.defineProperties(CustomComponent.prototype, propertyMap);
  }

  private static validateDependencies() {
    if (!componentAttributes) {
      throw Error('Cannot define custom element: Attributes have not been set.');
    }

    if (!componentProperties) {
      throw Error('Cannot define custom element: Properties have not been set.');
    }

    if (!rootComponent) {
      throw Error('Cannot define custom element: Root Component have not been set.');
    }

    if (!elementName) {
      throw Error('Cannot define custom element: Element name has not been set.');
    }
  }
}
