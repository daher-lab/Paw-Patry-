export const FEEDBACK_KEY = "pawpawrty-feedback";
export const OWNER_AUTH_KEY = "pawpawrty-owner-auth";

export type Feedback = {
  id: string;
  name: string;
  comments: string;
  /** @deprecated kept for older local entries */
  liked?: string;
  improve?: string;
  date: string;
};

export function loadFeedback(): Feedback[] {
  try {
    const raw = localStorage.getItem(FEEDBACK_KEY);
    return raw ? (JSON.parse(raw) as Feedback[]) : [];
  } catch {
    return [];
  }
}

export function saveFeedback(entries: Feedback[]) {
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(entries));
}

export function isOwnerAuthed() {
  return sessionStorage.getItem(OWNER_AUTH_KEY) === "1";
}

export function setOwnerAuthed(on: boolean) {
  if (on) sessionStorage.setItem(OWNER_AUTH_KEY, "1");
  else sessionStorage.removeItem(OWNER_AUTH_KEY);
}

/** Change this password anytime — only you should know it. */
export const OWNER_PASSWORD = "pawpawrty";
