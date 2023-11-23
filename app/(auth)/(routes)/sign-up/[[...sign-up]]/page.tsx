import React from "react";
import { SignUp } from "@clerk/nextjs";
import AuthLayout from "../../../AuthLayout";

type Props = {};

export default function page({}: Props) {
  return (
    <AuthLayout>
      <SignUp />
    </AuthLayout>
  );
}
