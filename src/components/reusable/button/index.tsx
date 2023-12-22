import React from "react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  styles?: string;
  variant?: "primary" | "hollow";
  type?: "button" | "link" | "submit";
  url?: string;
  onClick?: () => void;
};

type Variant = {
  primary: {
    container: string;
  };
  hollow: {
    container: string;
  };
  default: {
    container: string;
  };
};

type BtnType = {
  button: string;
  link: string;
  submit: string;
};

const CustomButton = (props: Props) => {
  const buttonVariants: Variant = {
    primary: {
      container:
        "w-fit font-[600] px-[35px] py-[22px] bg-btn_primary_bg text-text_black rounded-[9px] hover:cursor-pointer",
    },
    hollow: {
      container:
        "w-fit px-[35px] font-[600] py-[22px] border-[1px] border-btn_blue_border rounded-[9px] mt-[82px] hover:cursor-pointer",
    },
    default: {
      container:
        "w-fit px-[35px] py-[22px] border-[1px] border-btn_blue_border rounded-[9px] mt-[82px] hover:cursor-pointer",
    },
  };

  return (
    <>
      {!props.type || props.type === "submit" ? (
        <button
          onClick={props.onClick}
          className={`${
            buttonVariants[props?.variant || "default"]
              .container as keyof Variant
          } ${props?.styles}`}
        >
          {props.children}
        </button>
      ) : null}
      {props.type === "link" ? (
        <Link
          target={props.url?.includes("http") ? "_blank" : "_self"}
          href={props.url || "#"}
          className={`block ${
            buttonVariants[props?.variant || "default"]
              .container as keyof Variant
          } ${props?.styles}`}
        >
          {props.children}
        </Link>
      ) : null}
    </>
  );
};

export default CustomButton;
