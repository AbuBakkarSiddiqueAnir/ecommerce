import React, { ReactNode } from "react";

type Props = { children: ReactNode };

export default function AuthLayout({ children }: Props) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      {children}
    </div>
  );
}
