"use client";

import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { Button, Flex, TextField, Text } from "@radix-ui/themes";
import React from "react";
import { useForm, Controller } from "react-hook-form";

import axios from "axios"; // Importa axios

function SinginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await axios.get(
        `http://localhost:3030/users?email=${data.email}`
      );
      const user = response.data[0];

      if (!user) {
        // Si no se encuentra el usuario
        alert("Usuario no encontrado");
        return;
      }

      if (user.password !== data.password) {
        // Si la contraseña no coincide
        alert("Contraseña incorrecta");
        return;
      }

      // Si las credenciales son válidas, podrías realizar alguna acción, como redirigir al usuario a otra página
      alert("Inicio de sesión exitoso!");
      //router.push('/')
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" gap="2">
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
                message: "Email is required",
                value: true,
              },
            }}
            render={({ field }) => {
              return (
                <TextField.Input
                  type="email"
                  placeholder="email@doamin.com"
                  autoFocus
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
                message: "Passwrod is required",
                value: true,
              },
            }}
            render={({ field }) => {
              return (
                <TextField.Input
                  type="password"
                  placeholder="********"
                  autoFocus
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
          Sign In
        </Button>
      </Flex>
    </form>
  );
}

export default SinginForm;
