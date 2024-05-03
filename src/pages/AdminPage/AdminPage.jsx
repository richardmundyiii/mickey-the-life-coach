import { Authenticator } from "@aws-amplify/ui-react";

export default function AdminPage() {
  return (
    <Authenticator>
      {({ signOut }) => (
        <div>
          <h1>Hello, welcome to my Website</h1>
          <h4>You are authenticated</h4>
          <button onClick={signOut}>Sign Out</button>
        </div>
      )}
    </Authenticator>
  );
}
