import React from "react";
import { RouteComponentProps } from "react-router-dom";

type ErrorPageProps = RouteComponentProps;

export default function ErrorPage(props: ErrorPageProps) {
  const { code } = (props.match.params as { code: string }) ?? { code: "404" };

  return <div>{code}</div>;
}
