import { Indicator, Step } from "./StepIndicator.styled";

export const StepIndicator = ({ step }: { step: number }) => {
  return (
    <Indicator>
      {[0, 1].map((currentStep) => (
        <Step key={currentStep} $active={currentStep === step}>
          Step {currentStep + 1}
        </Step>
      ))}
    </Indicator>
  );
};