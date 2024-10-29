import { Avatar } from "@/components/ui/avatar";
import { type AvatarStatusChangeDetails } from "@ark-ui/react";

export function AvatarEvents() {
  const handleStatusChange = (details: AvatarStatusChangeDetails) => {
    console.log(details.status);
  };
  return (
    <Avatar.Root onStatusChange={handleStatusChange}>
      <Avatar.Fallback>PA</Avatar.Fallback>
      <Avatar.Image src="https://i.pravatar.cc/3000" alt="avatar" />
    </Avatar.Root>
  );
}
