import React from "react";
import { Container, Card, Heading, Flex, Text, Link } from "@radix-ui/themes";
import SinginForm from "@/components/auth/SinginForm";
import NavLink from "next/link";

function LoginPage() {
  return (
    <>
      <Container size="1" height="100%" className="p-3 md:p0">
        <Flex className="h-screen w-full items-center">
          <Card className="w-full p7">
            <Heading>Ingresar</Heading>

            <SinginForm />

            <Flex justify="between" my="4">
              <Text>¿No tienes una cuenta</Text>
              <Link asChild>
                <NavLink href="/auth/register" passHref>Registrarse</NavLink>
              </Link>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </>
  );
}

export default LoginPage;
