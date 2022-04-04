import { KeycloakService } from 'keycloak-angular';

export interface KcAuthOptions {
  url: string;
  realm: string;
  clientId: string;
}

function initializeKeyKloak(options: KcAuthOptions) {
  return (keycloak: KeycloakService) => () =>
    keycloak.init({
      config: {
        url: options.url,
        realm: options.realm,
        clientId: options.clientId,
      },
      initOptions: {
        onLoad: 'login-required',
      },
      bearerExcludedUrls: ['/assets'],
      loadUserProfileAtStartUp: true,
    });
}
