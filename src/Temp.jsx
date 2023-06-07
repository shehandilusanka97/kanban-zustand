import React, { useMemo } from "react";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";

export default function Temp({ state }) {
  const tasks = useStore((store) => store.task);
  const filtered = useMemo(
    () => tasks.filter((task) => task.state === state),
    shallow
  );
}
