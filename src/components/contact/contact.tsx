"use client";

import { useState, useRef, useContext } from "react";
import Image from "next/image";

import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import { AccordionContext } from "@/context/AccordionContext";
import useBlockRef from "@/hooks/useBlockRef";
import CustomButton from "../reusable/button";
import "./contact.css";

const Contact = () => {
  const blockRef = useRef(null);
  const { open } = useContext(AccordionContext);
  useBlockRef({ key: "contactPosition", blockRef, open });
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);

  const resetForm = (e: React.FormEvent<HTMLFormElement>) => {
    const event = e as any;
    // reset form
    event.target[0].value = "";
    event.target[1].value = "";
    event.target[2].value = "";
    event.target[3].value = "";
    event.target[4].value = "";
    event.target[5].value = "";
    setConsent(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const event = e as any;

    try {
      await fetch(`${process.env.NEXT_PUBLIC_SEND_EMAIL_URL}/send-email`, {
        method: "POST",
        body: JSON.stringify({
          name: event.target[0].value,
          email: event.target[1].value,
          subject: event.target[2].value,
          phone: event.target[3].value,
          company: event.target[4].value,
          message: event.target[5].value,
        }),
      })
        .then((res) => {
          alert("Email sent successfully!");
          resetForm(event);
        })
        .catch((err) => alert("Error sending email, please try again."))
        .finally(() => setLoading(false));
    } catch (error) {
      console.log("Error sending email", error);
    }
  };

  return (
    <div
      ref={blockRef}
      className="flex p-[1rem] md:p-[0px] flex-col max-w-[1000px] items-center text-center mt-[80px] md:mt-[160px] mx-auto text-text_white"
    >
      <h3 className="font-[500] text-[16px]">Get in Touch</h3>
      <h2 className="text-[32px] font-[600] uppercase mt-[12px] text-text_blue">
        Contact me
      </h2>
      <div className="w-full max-w-[850px]">
        {/* contact form */}
        <form onSubmit={handleSubmit} className="flex flex-col mt-[32px]">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col md:w-[50%]">
              <TextField
                id="standard-basic"
                label="Full Name"
                variant="standard"
                autoComplete="name"
                required
              />
            </div>
            <div className="flex flex-col md:w-[50%]">
              <TextField
                id="standard-basic"
                label="Email address"
                variant="standard"
                autoComplete="email"
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 mt-10">
            <div className="flex flex-col md:w-[50%]">
              <TextField
                id="standard-basic"
                label="Subject"
                variant="standard"
                autoComplete="subject"
                required
              />
            </div>
            <div className="flex flex-col md:w-[50%]">
              <TextField
                id="standard-basic"
                label="Phone Number"
                variant="standard"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 mt-10">
            <div className="flex flex-col md:w-[50%]">
              <TextField
                id="standard-basic"
                label="Company name / Industry"
                variant="standard"
                autoComplete="company"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 mt-10">
            <div className="flex flex-col md:w-[50%]">
              <TextField
                id="standard-basic"
                label="How can I help you?"
                variant="standard"
                required
                multiline
              />
            </div>
          </div>
          <FormControlLabel
            sx={{ fontSize: "14px" }}
            className="mt-12"
            required
            control={<Checkbox />}
            value={consent}
            onChange={() => setConsent(!consent)}
            label={
              <Typography className="text-[14px] opacity-50 text-left">
                I agree that my personal information will be processed and
                stored by this website.
              </Typography>
            }
          />

          <CustomButton
            styles="max-w-[250px] mt-[60px] self-center"
            variant="primary"
          // type="submit"
          >
            <span className="flex content-center items-center font-[500] text-[16px] uppercase w-full h-full">
              {loading ? (
                <CircularProgress />
              ) : (
                <>
                  Let's Talk
                  <Image
                    className="ml-2"
                    alt="arrow right"
                    src="/assets/svg/Arrow_lets_talk.svg"
                    width={32}
                    height={32}
                  />
                </>
              )}
            </span>
          </CustomButton>
        </form>
      </div>
    </div>
  );
};

export default Contact;
