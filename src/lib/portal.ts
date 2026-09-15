/**
 * Third-party membership / dog portal software.
 * Paste the real URLs here once her company finishes setup (Tuesday).
 */
export const DOG_PORTAL_URL = "";

/** Shared signup/checkout link from her software (used by all plan buttons). */
export const MEMBERSHIP_SIGNUP_URL = "";

export function hasPortalUrl() {
  return DOG_PORTAL_URL.trim().length > 0;
}

export function hasSignupUrl() {
  return MEMBERSHIP_SIGNUP_URL.trim().length > 0;
}
