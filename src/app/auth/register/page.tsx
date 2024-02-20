import SingupForm from "@/components/auth/SingupForm";
import { Card, Container, Flex, Heading, Link, Text } from "@radix-ui/themes";
import React from "react";
import NavLink from "next/link";

function RegisterPage() {
  return (
    <>
      <Container size="1" height="100%" className="p-3 md:p0">
        <Flex className="h-screen w-full items-center">
          <Card className="w-full p7">
            <Heading>Registro</Heading>

            <SingupForm />

            <Flex justify="between" my="4">
              <Text>¿Ya tienes una cuenta?</Text>
              <Link asChild>
                <NavLink href="/auth/login" passHref>
                  Inicia Sesión
                </NavLink>
              </Link>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </>
  );
}

export default RegisterPage;
