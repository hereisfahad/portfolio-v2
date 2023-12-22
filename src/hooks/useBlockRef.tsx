import { useEffect } from "react";

export default function useBlockRef({
  key,
  blockRef,
  open,
}: {
  key: string;
  blockRef: any;
  open?: number;
}) {
  useEffect(() => {
    if (blockRef?.current) {
      const isFooter = key === "footerPosition";
      let height;
      if (isFooter) {
        height = ((blockRef as any)?.current?.offsetTop - 750).toString();
      } else {
        height = (blockRef as any)?.current?.offsetTop;
      }
      localStorage?.setItem(key, String(height));
    }
  }, [blockRef, open]);
}
