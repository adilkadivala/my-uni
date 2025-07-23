import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useRef, useState } from "react";
const inputCount = 6;

const server_base_api = import.meta.env.VITE_SERVER_BASE_URL;

const VerifyOTP = () => {
  const [otp, setOtp] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const inputRef = useRef<Array<HTMLInputElement | null>>([]);

  // handleClick

  function handleClick() {
    return (e: React.MouseEvent<HTMLInputElement>) => {
      const input = e.target as HTMLInputElement;
      input.setSelectionRange(1, 1);
    };
  }

  // handlepaste

  function handlePaste() {
    return (e: React.ClipboardEvent<HTMLInputElement>) => {
      const pasteData = e.clipboardData.getData("Text").slice(0, 6);
      if (!isNaN(Number(pasteData))) {
        setOtp(pasteData.concat(""));
      }
    };
  }

  function handleKeyUp(index: number) {
    return (e: React.KeyboardEvent<HTMLInputElement>) => {
      const key = e.key;

      const oldOtps = [...otp];

      // handlebackspace
      if (key == "Backspace") {
        oldOtps[index] = "";

        // move focus back box if available
        moveFocusToLeft(index);

        setOtp(oldOtps.join(""));
        return;
      }

      // arrowkeys

      if (key == "ArrowRight") {
        moveFocusToRight(index);
        return;
      }
      if (key == "ArrowLeft") {
        moveFocusToLeft(index);
        return;
      }

      // if got not number value then just return
      if (isNaN(Number(key))) {
        return;
      }

      oldOtps[index] = key;

      setOtp(oldOtps.join(""));
      moveFocusToRight(index);
    };
  }

  // Send focus to next box if available
  function moveFocusToRight(index: number) {
    if (inputRef.current[index + 1]) {
      inputRef.current[index + 1]?.focus();
    }
  }
  // Send focus to next box if available
  function moveFocusToLeft(index: number) {
    if (inputRef.current[index - 1]) {
      inputRef.current[index - 1]?.focus();
    }
  }

  // ------ handle form ------ //

  const handnleForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${server_base_api}/api/v1/verify-otp`,
        { otp }
      );
      if (response) {
        console.log(response);
        setIsLoading(false);
      }
    } catch (error: any) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <form className="h-2/4 flex items-center" onSubmit={handnleForm}>
      <div className="flex-1 flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <Label>OTP</Label>
          <div className="flex w-full gap-1.5 ">
            {new Array(inputCount).fill("").map((_, index) => (
              <Input
                key={index}
                ref={(iRef) => {
                  inputRef.current[index] = iRef;
                }}
                type="text"
                value={otp[index] ?? ""}
                onKeyUp={handleKeyUp(index)}
                onClick={handleClick()}
                onPaste={handlePaste()}
                onChange={(e) => setOtp(e.target.value)}
                inputMode="numeric"
                autoComplete="one-time-code"
                placeholder="9"
                className="text-center p-7 rounded-sm"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Button className="cursor-pointer rounded-sm py-6 font-bold">
            {isLoading ? "Checking" : "Check"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default VerifyOTP;
