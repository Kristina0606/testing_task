import { useFormContext } from "react-hook-form";
import { AnimatedStep } from "../../Animation";
import { Error } from "./StepEmail.styled";
import { FieldRow, Label, Input } from "./StepEmail.styled";

export const StepEmail = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <AnimatedStep>
      <FieldRow>
        <Label htmlFor="email">Email</Label>

        <Input
          id="email"
          {...register("email")}
          placeholder="Enter email"
          aria-invalid={!!errors.email}
        />
      </FieldRow>

      {errors.email && <Error>{errors.email?.message as string}</Error>}
    </AnimatedStep>
  );
};