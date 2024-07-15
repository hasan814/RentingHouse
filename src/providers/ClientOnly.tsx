"use client";

import { useEffect, useState } from "react";
import { ClientOnlyProps } from "../types";

const ClientOnly = ({ children }: ClientOnlyProps) => {
  // ============ State ===========
  const [hasMounted, setHasMounted] = useState(false);

  // ============ Effect ===========
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // ============ Rendering ===========
  if (!hasMounted) return null;

  return <div>{children}</div>;
};

export default ClientOnly;
