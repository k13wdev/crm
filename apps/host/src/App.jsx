import { React, lazy, Suspense } from "react";
import { Button as HostButton } from "./Button";

const RemoteButton = lazy(() =>
  // eslint-disable-next-line import/no-unresolved
  import("remoteApp/Button").then(({ Button }) => ({ default: Button })).catch(() => ({ default: () => <>Error</> })),
);
export const App = () => (
  <div>
    App host
    <br />
    <HostButton />
    <Suspense>
      <RemoteButton />
    </Suspense>
  </div>
);
