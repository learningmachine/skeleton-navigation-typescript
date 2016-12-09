import { Aurelia } from 'aurelia-framework'
import environment from './environment';
import { HttpClient } from 'aurelia-fetch-client';

(<any>Promise).config({
  longStackTraces: environment.debug,
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources')
    .plugin("aurelia-animator-css");

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  let http = new HttpClient();
  http.configure(config => {
    config
      .useStandardConfiguration()
      .withBaseUrl('https://api.github.com/');
  });

  aurelia.container.registerInstance(HttpClient, http);

  aurelia.start().then(() => aurelia.setRoot());
}
