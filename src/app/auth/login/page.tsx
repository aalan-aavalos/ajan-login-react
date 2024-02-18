import React from "react";
import { Button } from "@radix-ui/themes";
import { BookmarkIcon } from "@radix-ui/react-icons";

function LoginPage() {
  return (
    <div>
      LoginPage
      <Button>
        <BookmarkIcon width="16" height="16" /> Login
      </Button>
    </div>
  );
}

export default LoginPage;
