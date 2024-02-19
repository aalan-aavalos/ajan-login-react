"use client";

import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import React from "react";

import { useForm, Controller } from "react-hook-form";

import { useRouter } from "next/router";

function SingunForm() {

  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await fetch("http://localhost:3030/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      console.log("Form submitted successfully");
      router.push("");
    } catch (error) {
      console.log("Error submitting form");
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" gap="2">
        <label htmlFor="name">Name</label>
        <TextField.Root>
          <TextField.Slot>
            <PersonIcon height="16px" width="16px" />
          </TextField.Slot>
          <Controller
            name="name"
            control={control}
            rules={{
              required: {
                message: "Name is requiered",
                value: true,
              },
            }}
            render={({ field }) => {
              return (
                <TextField.Input
                  type="text"
                  placeholder="Write your name"
                  autoFocus
                  {...field}
                />
              );
            }}
          />
        </TextField.Root>

        {errors.name && (
          <Text color="ruby" className="text-xs">
            {errors.name.message}
          </Text>
        )}

        <label htmlFor="email">Email</label>
        <TextField.Root>
          <TextField.Slot>
            <EnvelopeClosedIcon height="16px" width="16px" />
          </TextField.Slot>
          <Controller
            name="email"
            control={control}
            rules={{
              required: {
                message: "Email is requiered",
                value: true,
              },
            }}
            render={({ field }) => {
              return (
                <TextField.Input
                  type="email"
                  placeholder="email@doamin.com"
                  {...field}
                />
              );
            }}
          />
        </TextField.Root>

        {errors.email && (
          <Text color="ruby" className="text-xs">
            {errors.email.message}
          </Text>
        )}

        <label htmlFor="password">Password</label>
        <TextField.Root>
          <TextField.Slot>
            <LockClosedIcon height="16px" width="16px" />
          </TextField.Slot>
          <Controller
            name="password"
            control={control}
            rules={{
              required: {
                message: "Password is requiered",
                value: true,
              },
            }}
            render={({ field }) => {
              return (
                <TextField.Input
                  type="password"
                  placeholder="********"
                  {...field}
                />
              );
            }}
          />
        </TextField.Root>
        {errors.password && (
          <Text color="ruby" className="text-xs">
            {errors.password.message}
          </Text>
        )}

        <Button type="submit" mt="4">
          Sign Up
        </Button>
      </Flex>
    </form>
  );
}

export default SingunForm;
