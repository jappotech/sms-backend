import * as KeycloakAdminClient from '@keycloak/keycloak-admin-client';

export const keycloakConfig = {
  realm: 'sms-backend',
  clientId: 'sms-client',
  clientSecret: '6N2sC7ZSRkFBn8HLd9FkQf2XngxqW6rL',
  baseUrl: `${process.env.KEYCLOAK_URL}/auth`,
  loginUrl: `${process.env.KEYCLOAK_URL}/auth/realms/sms-backend/protocol/openid-connect/auth`,
  logoutUrl: `${process.env.KEYCLOAK_URL}/auth/realms/sms-backend/protocol/openid-connect/logout`,
  tokenUrl: `${process.env.KEYCLOAK_URL}/auth/realms/sms-backend/protocol/openid-connect/token`,
  loginCallbackUri: '/callback',
  logoutCallbackUri: '/logout',
};

export const keycloakAdminClient = async function () {
  const kcAdminClient = new KeycloakAdminClient.default({
    baseUrl: keycloakConfig.baseUrl,
    realmName: keycloakConfig.realm,
  });

  await kcAdminClient.auth({
    username: 'admin',
    password: 'admin',
    grantType: 'password',
    clientId: 'admin-cli',
    clientSecret: 'gYxIa2fggPsBfD8kpHaNTwRwIXpvps0c',
  });

  return kcAdminClient;
};
