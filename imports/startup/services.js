import { ServiceConfiguration } from 'meteor/service-configuration';

ServiceConfiguration.configurations.upsert(
  { service: "weibo" },
  {
    $set: {
      clientId: "125336701305913",
      loginStyle: "popup",
      secret: "07a254d80775269768fe1161424ddd51"
    }
  }
);





