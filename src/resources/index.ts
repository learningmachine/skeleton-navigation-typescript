import { FrameworkConfiguration } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    './attributes/blur-image',
    './elements/loading-indicator',
    './value-converters/upper-value-converter'
  ]);
}
