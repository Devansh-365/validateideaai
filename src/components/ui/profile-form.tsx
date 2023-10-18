"use client";

import { InputHTMLAttributes, ReactNode, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

export function ProfileForm({
  title,
  description,
  inputData,
  helpText,
  buttonText = "Save Changes",
  disabledTooltip,
}: {
  title: string;
  description: string;
  inputData: InputHTMLAttributes<HTMLInputElement>;
  helpText?: string;
  buttonText?: string;
  disabledTooltip?: string | ReactNode;
}) {
  const [value, setValue] = useState(inputData.defaultValue);
  const [saving, setSaving] = useState(false);
  const saveDisabled = useMemo(() => {
    return saving || !value || value === inputData.defaultValue;
  }, [saving, value, inputData.defaultValue]);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setSaving(true);

        setSaving(false);
      }}
      className="rounded-lg border dark:border-zinc-800 border-zinc-200"
    >
      <div className="relative flex flex-col space-y-6 p-5 sm:p-10">
        <div className="flex flex-col space-y-3">
          <h2 className="text-xl font-medium">{title}</h2>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        {typeof inputData.defaultValue === "string" ? (
          <Input
            {...inputData}
            type="text"
            required
            disabled={disabledTooltip ? true : false}
            onChange={(e) => setValue(e.target.value)}
            className={cn("", {
              "cursor-not-allowed bg-gray-100 text-gray-400": disabledTooltip,
            })}
          />
        ) : (
          <div className="h-[2.35rem] w-full max-w-md animate-pulse rounded-md bg-gray-200" />
        )}
      </div>

      <div className="flex items-center justify-between rounded-b-lg border-t dark:border-zinc-800 border-zinc-200 p-3 sm:px-10">
        <p className="text-sm text-gray-400">{helpText}</p>
        <div>
          <Button>{buttonText}</Button>
        </div>
      </div>
    </form>
  );
}
