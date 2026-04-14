import { useFormContext } from "react-hook-form";
import { AnimatedStep } from "../../Animation";
import { Error } from "./StepPassword.styled";
import { FieldRow, Label, Input } from "./StepPassword.styled";

export const StepPassword = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <AnimatedStep>
      <FieldRow>
        <Label htmlFor="password">Password</Label>

        <Input
          id="password"
          type="password"
          {...register("password")}
          placeholder="Enter password"
          aria-invalid={!!errors.password}
        />
      </FieldRow>

      {errors.password?.message && (
        <Error>{String(errors.password.message)}</Error>
      )}
    </AnimatedStep>
  );
};