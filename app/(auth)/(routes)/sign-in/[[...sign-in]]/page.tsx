import React from "react";
import { SignIn } from "@clerk/nextjs";
import AuthLayout from "../../../AuthLayout";

type Props = {};

export default function page({}: Props) {
  return (
    <AuthLayout>
      <SignIn />
    </AuthLayout>
  );
}
