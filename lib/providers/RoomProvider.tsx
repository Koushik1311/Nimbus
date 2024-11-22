"use client";

import LoadingSpinner from "@/components/global/LoadingSpinner";
import {
  ClientSideSuspense,
  RoomProvider as RoomProviderWrapper,
} from "@liveblocks/react/suspense";
import LiveCursorProvider from "./LiveCursorProvider";

export default function RoomProvider({
  roomId,
  children,
}: {
  roomId: string;
  children: React.ReactNode;
}) {
  return (
    <RoomProviderWrapper
      id={roomId}
      initialPresence={{
        cursor: null,
      }}
    >
      <ClientSideSuspense fallback={<LoadingSpinner />}>
        <LiveCursorProvider>{children}</LiveCursorProvider>
      </ClientSideSuspense>
    </RoomProviderWrapper>
  );
}
