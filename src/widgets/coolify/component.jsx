import { useTranslation } from "next-i18next";

import Container from "components/services/widget/container";
import Block from "components/services/widget/block";
import useWidgetAPI from "utils/proxy/use-widget-api";

export default function Component({ service }) {
  const { t } = useTranslation();
  const { widget } = service;

  const { data: deployments, error: deployments_error } = useWidgetAPI(widget, "deployments");
  const { data: resources, error: resources_error } = useWidgetAPI(widget, "resources");

  if (deployments_error || resources_error) {
    return <Container service={service} error={deployments_error ?? resources_error} />;
  }

  if (!Array.isArray(deployments)) return <Container service={service} error={deployments} />;
  if (!Array.isArray(resources)) return <Container service={service} error={resources} />;

  return (
    <Container service={service}>
      <Block label="coolify.deployments" value={t("common.number", { value: deployments.length })} />
      <Block label="coolify.resources" value={t("common.number", { value: resources.length })} />
    </Container>
  );
}
