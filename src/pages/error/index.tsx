import React from "react";

interface ErrorPageProps {
  code?: number;
}

export default function ErrorPage(props: ErrorPageProps) {
  const code = props && props.code ? props.code : 404;

  return <div>{code}</div>;
}
