"use client";

import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { Button, Flex, TextField } from "@radix-ui/themes";
import React from "react";

function SinginForm() {
  return (
    <Flex direction="column" gap="2">
      <label htmlFor="email">Email</label>
      <TextField.Root>
        <TextField.Slot>
          <EnvelopeClosedIcon height="16px" width="16px" />
        </TextField.Slot>
        <TextField.Input
          type="email"
          placeholder="email@doamin.com"
          autoFocus
        />
      </TextField.Root>

      <label htmlFor="password">Password</label>
      <TextField.Root>
        <TextField.Slot>
          <LockClosedIcon height="16px" width="16px" />
        </TextField.Slot>
        <TextField.Input
          type="password"
          placeholder="********"
          autoFocus
        />
      </TextField.Root>

      <Button>
        Sign In
      </Button>
    </Flex>
  );
}

export default SinginForm;
