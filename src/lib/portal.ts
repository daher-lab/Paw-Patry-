/** Pet Parent Portal (Gingr) — memberships, day passes, and dog check-in. */
export const PORTAL_URL = "https://pawpawrty.portal.gingrapp.com";

export const DOG_PORTAL_URL = PORTAL_URL;

/** Shared signup/checkout link used by all plan buttons. */
export const MEMBERSHIP_SIGNUP_URL = PORTAL_URL;

export function hasPortalUrl() {
  return DOG_PORTAL_URL.trim().length > 0;
}

export function hasSignupUrl() {
  return MEMBERSHIP_SIGNUP_URL.trim().length > 0;
}
