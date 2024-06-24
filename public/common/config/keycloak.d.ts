import * as KeycloakAdminClient from '@keycloak/keycloak-admin-client';
export declare const keycloakConfig: {
    realm: string;
    clientId: string;
    clientSecret: string;
    baseUrl: string;
    loginUrl: string;
    logoutUrl: string;
    tokenUrl: string;
    loginCallbackUri: string;
    logoutCallbackUri: string;
};
export declare const keycloakAdminClient: () => Promise<KeycloakAdminClient.default>;
