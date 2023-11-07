"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserAvatar } from "@/components/ui/user-avatar";
import { useParams } from "next/navigation";
import { deleteCookie } from "cookies-next";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useRouter } from "next/navigation";

export function UserAccountNav() {
  const { data: user, isLoading: isUserLoading } = useCurrentUser();
  const params = useParams();
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          className="w-9 h-9"
          user={{ name: user?.name || null, image: user?.image || null }}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user?.name && <p className="font-medium">{user?.name}</p>}
            {user?.email && (
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                {user?.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={`/dashboard`}>Dashboard</Link>
        </DropdownMenuItem>
        {/* <DropdownMenuItem asChild>
          <Link href={`/${params?.storeId}/campaigns`}>Campaigns</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`/${params?.storeId}/settings`}>Settings</Link>
        </DropdownMenuItem> */}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer"
          onSelect={(event) => {
            event.preventDefault();
            deleteCookie("token");
            router.push("/login");
          }}
        >
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
