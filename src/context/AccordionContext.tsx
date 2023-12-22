import React from "react";

type Props = {
  children: React.ReactNode;
};

type Context = {
  open: number;
  setOpen: React.Dispatch<React.SetStateAction<number>>;
};

export const AccordionContext = React.createContext({} as Context);

const AccordionOpenContext = (props: Props) => {
  const [open, setOpen] = React.useState(1);

  return (
    <AccordionContext.Provider value={{ open, setOpen }}>
      {props.children}
    </AccordionContext.Provider>
  );
};

export default AccordionOpenContext;
