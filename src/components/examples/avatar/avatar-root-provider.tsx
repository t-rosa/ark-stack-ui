import { Avatar } from "@/components/ui/avatar";
import { useAvatar } from "@ark-ui/react/avatar";

export function AvatarRootProvider() {
  const avatar = useAvatar();

  return (
    <>
      <button onClick={() => avatar.setSrc("https://new-source.com")}>
        Change Source
      </button>

      <Avatar.RootProvider value={avatar}>
        <Avatar.Fallback>PA</Avatar.Fallback>
        <Avatar.Image src="https://i.pravatar.cc/300" alt="avatar" />
      </Avatar.RootProvider>
    </>
  );
}
