import credentialedProxyHandler from "../../utils/proxy/handlers/credentialed";

const widget = {
  api: "{url}/api/{endpoint}",
  proxyHandler: credentialedProxyHandler,

  mappings: {
    deployments: {
      endpoint: "v1/deployments",
    },
    resources: {
      endpoint: "v1/resources"
    }
  },
};

export default widget;
