import * as Lucide from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useCallback, useMemo } from "react";

// Extract the exact icon names for autocomplete
type LucideIconName = keyof typeof Lucide;

const useLucideIcons = () => {
  const icons = useMemo(() => Lucide, []);

  const getLucideIcon = useCallback(
    (iconName: string): any => {
      const Icon = icons[iconName as LucideIconName];
      return Icon ?? undefined;
    },
    [icons]
  );

  return { getLucideIcon };
};

export default useLucideIcons;
