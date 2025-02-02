/**
 * MEMO:
 * 一応利用しているが、将来的には必要ないと判断するかも。
 * そもそもsveltekitにおけるglobalStateの運用について考え直す必要あり。
 */
import type { Session } from "@supabase/supabase-js";
import { getContext, setContext } from "svelte";
import { readable, type Readable } from "svelte/store";

type SessionType = Session | null;
type ContextSession = Readable<SessionType>;

// 引数を必要とするため、contextでの状態管理が適していると判断
export function setSession(sessionData: SessionType) {
  if (!sessionData) return;
  const session = readable<SessionType>(sessionData);
  setContext("session", session);
}

export function getSession() {
  return getContext<ContextSession>("session");
}

/** svelte5の universal reactivityを利用した状態管理 */
// export function experimentalGetSession(sessionData: SessionType) {
//   const session = $state(sessionData);

//   return {
//     get get() {
//       return session;
//     },
//   };
// }
