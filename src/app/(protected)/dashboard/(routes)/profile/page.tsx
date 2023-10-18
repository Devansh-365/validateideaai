import React from "react";
import { Button } from "@/components/ui/button";
import { ProfileForm } from "@/components/ui/profile-form";

type Props = {};

export default async function ProfilePage({}: Props) {
  return (
    <>
      <section className="flex h-36 items-center border-b dark:border-zinc-800 border-zinc-200 mt-[62px]">
        <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Profile</h1>
            {/* <CreateProjectButton /> */}
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 my-10 grid gap-5 md:col-span-4">
        <ProfileForm
          title="Your Name"
          description="This will be your display name on PitchPerfectAi."
          inputData={{
            name: "name",
            defaultValue: "",
            placeholder: "Steve Jobs",
            maxLength: 32,
          }}
          helpText="Max 32 characters."
        />
        <ProfileForm
          title="Your Email"
          description="This will be the email you use to log in to PitchPerfectAi and receive notifications."
          inputData={{
            name: "email",
            defaultValue: "",
            placeholder: "janedoe@email.com",
            maxLength: 32,
          }}
          helpText="Must be a valid email address."
        />
        <div className="rounded-lg border border-red-600">
          <div className="flex flex-col space-y-3 p-5 sm:p-10">
            <h2 className="text-xl font-medium">Delete Account</h2>
            <p className="text-sm text-gray-400">
              Permanently delete your PitchPerfectAi account. This action cannot
              be undone - please proceed with caution.
            </p>
          </div>
          <div className="border-b border-red-600" />
          <div className="flex items-center justify-end p-3 sm:px-10">
            <div>
              <Button variant="destructive">Delete Account</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
