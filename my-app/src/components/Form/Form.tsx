import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence } from "framer-motion";

import {
  Buttons,
  Container,
  Card,
  Title,
  Subtitle,
  Img,
  Button,
} from "./Form.styled";

import { StepEmail } from "./steps/StepEmail/StepEmail";
import { StepPassword } from "./steps/StepPassword/StepPassword";
import { StepIndicator } from "./steps/StepIndicator/StepIndicator";

import RightArrow from "../../assets/arrow-sm-right-svgrepo-com.svg";
import LeftArrow from "../../assets/arrow-sm-left-svgrepo-com.svg";

const schema = z.object({
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(8, "Min 8 characters")
    .regex(/[!@#$%^&*]/, "Must include special character"),
});

type FormData = z.infer<typeof schema>;

const submitForm = async (data: FormData) => {
  await fetch("https://api.example.com/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const MultiStepForm = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const [step, setStep] = useState(0);

  const next = async () => {
    const valid = await methods.trigger(step === 0 ? "email" : "password");
    if (valid) setStep((s) => s + 1);
  };

  const back = () => setStep((s) => s - 1);

  const onSubmit = async (data: FormData) => {
    await submitForm(data);
    alert("Successfully registered 🎉");
  };

  return (
    <Container>
      <Card>
        <Title>Registration Form</Title>
        <Subtitle>Fill in your details to create an account</Subtitle>

        <FormProvider {...methods}>
          <StepIndicator step={step} />

          <AnimatePresence mode="wait">
            {step === 0 && <StepEmail key="step1" />}
            {step === 1 && <StepPassword key="step2" />}
          </AnimatePresence>

          <Buttons>
            {step > 0 && (
              <Button $variant="ghost" onClick={back}>
                <Img src={LeftArrow} alt="back" />
                Back
              </Button>
            )}

            {step < 2 ? (
              <Button $variant="primary" onClick={next}>
                Next
                <Img src={RightArrow} alt="next" />
              </Button>
            ) : (
              <Button $variant="primary" onClick={methods.handleSubmit(onSubmit)}>
                Submit
              </Button>
            )}
          </Buttons>
        </FormProvider>
      </Card>
    </Container>
  );
};